import { useState, useEffect } from "react";
import { ListingContainer } from "./GroupListingStyles";
import SingleListingCard from "../singlelistingcard/SingleListingCard";
import RenderPagination from "../../../sharedutilities/renderPagination";

export default function AllListings() {
    const [listings, setListings] = useState([]); 
    const [displayedListings, setDisplayedListings] = useState([]); 
    const [fetchStatus, setFetchStatus] = useState(false); 
    const [pageSelected, setPageSelected] = useState(1); 

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
    
    const selectPage = (e) => {
        const pageNumber = e.target.innerText; 
        setPageSelected(pageNumber); 
    }

    useEffect(() => {
        console.log(pageSelected); 
    }, [pageSelected]); 

    useEffect(() => {
        const firstStory = (pageSelected - 1) * 12; 
        const lastStory = firstStory + 12; 
        setDisplayedListings(listings.slice(firstStory, lastStory)); 
    },[pageSelected, setDisplayedListings, listings]); 

    return(
        <>
            <ListingContainer>
                { fetchStatus && 
                    displayedListings.map((listing, index) => (
                        <SingleListingCard key={ index } listingId={ listing.id } name={ listing.listing_name } featuredImage={ listing.featuredImage } tags={ listing.tags }/>
                    ))
                }
            </ListingContainer>
                <RenderPagination dataQuantity={ listings.length } btnClick={ selectPage } pageSelected={ pageSelected } />
        </>
    )
}