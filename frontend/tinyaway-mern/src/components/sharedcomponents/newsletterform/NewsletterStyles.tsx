import styled from "styled-components";
import NewsletterImg from '../../../assets/newsletterImg.jpg'; 

export const NewsletterSection = styled.div`
    background-color: var(--corpGreyBG); 
    height: 500px; 
    width: 100%;
    display: flex;
`

export const NewsletterImage = styled.div`
    background-image: url(${NewsletterImg});
    background-size: cover;
    background-position: center;  
    width: 50%;  
`

export const NewsletterForm = styled.div`
    color: var(--corpDarkGrey1); 
    width: 35%; 
    display: flex; 
    flex-direction: column; 
    justify-content: center; 
    gap: 25px;
    font-size: 18px; 
    margin-left: 100px; 
`

export const EmailPill = styled.div`
    background-color: white; 
    color: var(--corpDarkGrey1); 
    font-size: 21px; 
    display: flex; 
    justify-content: space-between; 
    align-items: center; 
    padding: 10px 20px; 
    width: 60%; 
    border-radius: 3rem; 

    .icon {
        background-color: var(--corpYellow); 
        font-size: 18px; 
        padding: 15px; 
        border-radius: 2rem;
    }
`