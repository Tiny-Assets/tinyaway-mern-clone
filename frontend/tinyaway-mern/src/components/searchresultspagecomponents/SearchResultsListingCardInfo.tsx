import { useState, useEffect } from "react";
import SingleListingCard from '../listings/singlelistingcard/SingleListingCard'; 

interface SearchResultsListingCardProps {
    searchListingId: string; 
}

export default function SearchResultsListingCardInfo({ searchListingId }: SearchResultsListingCardProps) {
    const [searchDisplay, setSearchDisplay] = useState([]); 
    const [fetchStatus, setFetchStatus] = useState(false); 

    useEffect(() => {
        const url = `http://localhost:4000/api/houseSummary?listingId=${ searchListingId }`; 
    
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setSearchDisplay(data)
                setFetchStatus(true); 
            })
    }, []); 

    useEffect(() => {
        console.log(searchDisplay); 
    },[searchDisplay]); 

    return(
        <>
            { fetchStatus ? (
                <SingleListingCard listingId={ searchDisplay.id } name={ searchDisplay.listing_name } featuredImage={ searchDisplay.featuredImage } tags={ searchDisplay.tags } />
            ) : (
                <p>Loading...</p>
            )
            }
        </>
    )
}