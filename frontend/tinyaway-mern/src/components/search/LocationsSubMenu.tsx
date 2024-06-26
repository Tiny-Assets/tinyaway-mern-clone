import styled from "styled-components";

export default function LocationsSubMenu() {
    return(
        <LocationsSub>
            <Location>AUSTRALIA</Location>
            <Location>MALAYSIA</Location>
            <Location>NEW ZEALAND</Location>
            <Location>TAIWAN</Location>
            <Location>EUROPE</Location>
        </LocationsSub>
    )
}

const LocationsSub = styled.div`
    background-color: white; 
    color: var(--corpDarkGrey1); 
    font-size: 21px; 
    padding: 30px 35px; 
    border-bottom-left-radius: 2rem; 
    border-bottom-right-radius: 2rem; 
`

const Location = styled.div`
    padding: 10px; 
`