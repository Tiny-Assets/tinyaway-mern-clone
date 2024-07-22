import styled from "styled-components";
import { SearchFilterContextProvider } from "../contexts/SearchFilterContext";
import { LocationProvider } from "../contexts/LocationContext";
import { GuestNumberProvider } from "../contexts/GuestNumberContext";
import { RoomNumberProvider } from "../contexts/RoomNumberContext";
import SearchResultsLayout from "../components/searchresultspagecomponents/SearchResultsLayout";

export default function SearchResults() {
    return(
        <>
        <GuestNumberProvider><LocationProvider><RoomNumberProvider><SearchFilterContextProvider>
            <PageConfiguration>
                <SearchResultsLayout />
            </PageConfiguration>
        </SearchFilterContextProvider></RoomNumberProvider></LocationProvider></GuestNumberProvider>
        </>
    )
}

const PageConfiguration = styled.div`
    background-color: var(--corpGreyBG); 
`