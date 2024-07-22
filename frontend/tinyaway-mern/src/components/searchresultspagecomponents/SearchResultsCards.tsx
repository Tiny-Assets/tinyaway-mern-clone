import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import SearchResultsListingCardInfo from "./SearchResultsListingCardInfo";

export default function SearchResultsCards() {
    const [fetchStatus, setFetchStatus] = useState(false); 
    const [searchResults, setSearchResults] = useState([]); 
    const location = useLocation(); 
    const searchParams = new URLSearchParams(location.search); 
    const conditionsArray = []; 

    if (searchParams.get('country')) {
        const country = searchParams.get('country'); 
        conditionsArray.push(`country=${country}`); 
    }
    if (searchParams.get('bedrooms') !== null) {
        const bedrooms = searchParams.get('bedrooms'); 
        conditionsArray.push(`bedrooms=${bedrooms}`); 
    }
    if (searchParams.get('accommodates') !== null) {
        const accommodates = searchParams.get('accommodates'); 
        conditionsArray.push(`accommodates=${accommodates}` ); 
    }

    useEffect(() => {
        const queryString = conditionsArray.length > 0 ?
        `?${conditionsArray.join('&')}`
        :
        ''

        const fetchResults = async () => {
            const url = `http://localhost:4000/api/search${ queryString }`; 
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    // console.log(data); 
                    setSearchResults(data); 
                    setFetchStatus(true); 
                })
                .catch(error => console.error('Error fetching data:', error));
        } 
        fetchResults();
    }, []);

    return(
        <>
            { fetchStatus ? (
                searchResults.map(( listing, index ) => (
                    <SearchResultsListingCardInfo key={ index } searchListingId={ listing.listing_id } />
                ))
            ) : (
                <>late</>
            )
            }
        </>
    )
}