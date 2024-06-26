import styled from "styled-components"
import heroPic from "../../assets/heroBG.jpg"
import SearchBar from "./SearchBar"
import { GuestNumberProvider } from "../../contexts/GuestNumberContext"
import { RoomNumberProvider } from "../../contexts/RoomNumberContext"

export default function SearchArea() {
    return(
        <GuestNumberProvider><RoomNumberProvider>
            <HeroSection>
                <HeroTitle>Book & Experience Amazing <br/> Tiny Houses</HeroTitle>
                <SearchBar />
            </HeroSection>
            </RoomNumberProvider></GuestNumberProvider>
    )
}

const HeroSection = styled.div`
    background-image: url(${heroPic}); 
    background-size: cover; 
    background-position-y: -360px; 
    background-repeat: no-repeat; 
    height: 912px; 
`

const HeroTitle = styled.h1`
    font-family: 'Work Sans'; 
    font-size: 64px; 
    color: white; 
    text-align: center;
    padding-top: 230px;
`