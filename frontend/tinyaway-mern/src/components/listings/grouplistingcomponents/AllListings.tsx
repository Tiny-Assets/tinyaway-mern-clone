import { useState, useEffect } from "react";
import { ListingContainer } from "./GroupListingStyles";
import SingleListingCard from "../singlelistingcard/SingleListingCard";

export default function AllListings() {
    const [listings, setListings] = useState([]); 
    const [fetchStatus, setFetchStatus] = useState(false); 
    const url = 'http://localhost:4000/api/tinyawayall'; 

    useEffect(() => {
        fetch(url)
            .then(res => {
                if (res.ok) {
                    return res.json(); 
                } else {
                    throw new Error('Network response was not ok.');
                }
            })
            .then(data => {
                setListings(data); 
                setFetchStatus(true); 
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    },[]); 
    
    useEffect(() => {
        console.log(listings[0]); 
    }, [listings]); 

    return(
        <>
            <ListingContainer>
                { fetchStatus && 
                    listings.map((listing, index) => (
                        <SingleListingCard key={ index } listingId={ listing.id } name={ listing.listing_name } featuredImage={ listing.featuredImage } tags={ listing.tags }/>
                    ))
                }
            </ListingContainer>
        </>
    )
}