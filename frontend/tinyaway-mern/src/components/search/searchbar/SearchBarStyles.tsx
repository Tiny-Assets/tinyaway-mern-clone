import styled from "styled-components";

export const SearchGrid = styled.div`
    display: grid; 
    grid-template-columns: repeat(5, 225px); 
    justify-content: center; 
    align-items: start; 
    margin-top: 30px; 
`

export const SubmenuGrid = styled.div`
    display: grid; 
    grid-template-columns: repeat(45, 25px); 
    grid-template-rows: repeat(6, 50px); 
    justify-content: center; 
    position: relative; 
    top: -30px;
    z-index: 0;  
`

export const Sub1 = styled.div`
    display: grid; 
    grid-column-start: 1; 
    grid-column-end: 10; 
`

export const Sub2 = styled.div`
    display: grid; 
    grid-column-start: 19; 
    grid-column-end: 36; 
    grid-row-start: 2;
    grid-row-end: 7; 
`

export const Sub3 = styled.div`
    display: grid; 
    grid-column-start: 28; 
    grid-column-end: 45; 
    grid-row-start: 2;
    grid-row-end: 7; 
`


export const SingleField = styled.div`
    background-color: white; 
    color: var(--corpDarkGrey1); 
    width: 135px; 
    font-size: 21px; 
    display: flex; 
    justify-content: space-between; 
    align-items: center; 
    border-left: 1px solid var(--corpLightGrey1); 
    padding: 15px 45px; 
    z-index: 1; 

    &.start{
        border-top-left-radius: 2rem; 
        border-bottom-left-radius: 2rem; 
        border: none; 
    }

    &.end{
        background-color: var(--corpYellow); 
        color: black; 
        justify-content: center; 
        border-top-right-radius: 2rem; 
        border-bottom-right-radius: 2rem; 
    }

    &.pill {
        border: none;
        border-radius: 2rem; 
        padding: 10px 40px; 

        &#yellow {
            background-color: var(--corpYellow); 
            color: var(--corpBlack); 
            justify-content: center; 
            padding: 10px 20px; 
        }
    }
`