import styled from "styled-components";
import heroPic from '../../assets/heroBG.jpg'

export const HeroSection = styled.div`
    background-image: url(${heroPic}); 
    background-size: cover; 
    background-position-y: -360px; 
    background-repeat: no-repeat; 
    height: 912px; 
`

export const HeroTitle = styled.h1`
    color: white; 
    text-align: center;
    padding-top: 230px;
    font-weight: 700; 
`