import { useState, useEffect } from "react"
import { ListingContainer, SectionTitle } from "./GroupListingStyles.tsx"
import SingleListingCard from "../singlelistingcard/SingleListingCard.tsx";
import PillButton from "../../sharedcomponents/genericpillbutton/PillButton.tsx";

export default function PopularListings() {
    const [listings, setListings] = useState([]); 
    const [fetchStatus, setFetchStatus] = useState(false); 
    const url = 'http://localhost:4000/api/tinyaway12'; 

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
        console.log(listings); 
    }, [listings]); 

    return(
        <>
            <SectionTitle>
                <h1>POPULAR TINY HOUSE DESTINATIONS</h1>
                <p>
                    Hear it from our guests. This is the list of tiny houses that we have specially curated for you, based on reviews from our guests who have stayed in them.
                </p>
            </SectionTitle>
            <ListingContainer>
                { fetchStatus &&
                    listings.map((listing, index) => (
                        <SingleListingCard key={index} listingId={ listing.id } name={ listing.listing_name } featuredImage={ listing.featuredImage } tags={ listing.tags }/>
                    ))
                }

                <PillButton className='noChange' buttonName='EXPLORE ALL OUR PROPERTIES' path='/tiny-house-destinations' />
            </ListingContainer>
            
        </>
    )
}