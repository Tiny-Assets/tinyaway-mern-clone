import styled from "styled-components";
import { LocationProvider } from "../contexts/LocationContext";
import { GuestNumberProvider } from "../contexts/GuestNumberContext";
import { RoomNumberProvider } from "../contexts/RoomNumberContext";

export default function SearchResults() {
    return(
        <>
        <GuestNumberProvider><LocationProvider><RoomNumberProvider>
                <PageConfiguration>
                </PageConfiguration>
        </RoomNumberProvider></LocationProvider></GuestNumberProvider>
        </>
    )
}

const PageConfiguration = styled.div`
    background-color: var(--corpGreyBG); 
`