import styled from "styled-components";

// Location Sub Menu Styles
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

// Date Light Box Styles
export const LightBoxWrapper = styled.div`
    background-color: white;  
    height: 50vh; 
    width: 50vw; 
    position: absolute; 
    top: 30%;
    left: 20%;
    border-radius: 2rem;   
    padding: 30px 50px; 
    z-index: 3; 
`

export const LightBoxHeader = styled.div`
    font-size: 28px; 
    color: var(--corpDarkGrey2); 
    display: flex; 
    align-items: center; 
    justify-content: space-between; 
    border-bottom: 1px solid var(--corpLightGrey2); 
    padding-bottom: 20px; 
`