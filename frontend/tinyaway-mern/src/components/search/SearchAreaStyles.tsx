import styled from "styled-components";
import heroPic from '../../assets/heroBG.jpg'

export const HeroSection = styled.div`
    background-image: url(${heroPic}); 
    background-size: cover; 
    background-repeat: no-repeat; 
    background-position-y: -350px; 
    height: 60vh
    width: 100%; 
    overflow: hidden; 
`

export const HeroTitle = styled.h1`
    color: white; 
    text-align: center;
    padding-top: 230px;
    font-weight: 700; 
`