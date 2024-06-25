import styled from "styled-components"
import heroPic from "../../assets/heroBG.jpg"
import SearchBar from "./SearchBar"

export default function SearchArea() {
    return(
        <HeroSection>
            <HeroTitle>Book & Experience Amazing <br/> Tiny Houses</HeroTitle>
            <SearchBar />
        </HeroSection>
    )
}

const HeroSection = styled.div`
    background-image: url(${heroPic}); 
    background-size: cover; 
    background-position-y: -360px; 
    height: 912px; 
`

const HeroTitle = styled.h1`
    font-family: 'Work Sans'; 
    font-size: 64px; 
    color: white; 
    text-align: center;
    padding-top: 230px;
`