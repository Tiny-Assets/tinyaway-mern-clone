import styled from "styled-components";

export const Calculator = styled.div`
    display: flex; 
    align-items: center; 
    color: black; 
    font-size: 21px; 
`

export const Decrement = styled.div`
    background-color: var(--corpLightGrey2); 
    color: white; 
    height: 10px; 
    width: 10px;
    display: flex; 
    justify-content: center; 
    align-items: center;  
    margin-right: 30px;
    padding: 10px;  
    border-radius: 2rem; 
`

export const Increment = styled.div`
    background-color: var(--corpDarkGrey2); 
    color: white; 
    height: 10px; 
    width: 10px;
    display: flex; 
    justify-content: center; 
    align-items: center;  
    margin-left: 30px;
    padding: 10px; 
    border-radius: 2rem;
`