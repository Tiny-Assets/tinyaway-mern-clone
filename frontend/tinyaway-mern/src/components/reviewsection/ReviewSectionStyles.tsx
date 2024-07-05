import styled from "styled-components";

export const ReviewSectionStyles = styled.div`
    background-color: var(--corpLightGrey2); 
    display: flex; 
    height: 65vh; 
    width: 100%; 
`

export const ReviewImage = styled.div`
    width: 50%; 
    overflow: hidden; 
`

export const ReviewContent = styled.div`
    width: 50%; 

    h2 {
        color: white; 
        margin-left: 100px;
        margin-top: 110px; 
    }

    .review {
        color: white; 
        font-size: 24px; 
        font-weight: 350; 
        width: 35%; 
        margin-left: 100px; 
        margin-top: 20px; 
    }
`

export const Signature = styled.p`
    color: white; 
    font-family: 'Great Vibes'; 
    font-size: 32px;
    margin-left: 100px;  
    margin-top: 50px; 
`