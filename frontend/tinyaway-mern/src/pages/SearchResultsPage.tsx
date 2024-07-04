import styled from "styled-components";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { LocationProvider } from "../contexts/LocationContext";
import { GuestNumberProvider } from "../contexts/GuestNumberContext";
import { RoomNumberProvider } from "../contexts/RoomNumberContext";
import SearchResultsLayout from "../components/searchresultspagecomponents/SearchResultsLayout";

export default function SearchResults() {
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
                    console.log(data); 
                })
                .catch(error => console.error('Error fetching data:', error));
            } 
        fetchResults();
    }, []);

    return(
        <>
        <GuestNumberProvider><LocationProvider><RoomNumberProvider>
                <PageConfiguration>
                    <SearchResultsLayout />
                </PageConfiguration>
        </RoomNumberProvider></LocationProvider></GuestNumberProvider>
        </>
    )
}

const PageConfiguration = styled.div`
    background-color: var(--corpGreyBG); 
`