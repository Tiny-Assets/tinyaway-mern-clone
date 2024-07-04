import styled from "styled-components";

export const LocationsSub = styled.div`
    background-color: white; 
    color: var(--corpDarkGrey1); 
    font-size: 21px; 
    display: inline-block; 
    padding: 30px 35px; 
    border-bottom-left-radius: 2rem; 
    border-bottom-right-radius: 2rem; 

    &.resultspage {
        position: relative; 
        top: -40px; 
        left: 290px; 
        z-index: 3; 
    }
`

export const Location = styled.div`
    padding: 10px; 
`