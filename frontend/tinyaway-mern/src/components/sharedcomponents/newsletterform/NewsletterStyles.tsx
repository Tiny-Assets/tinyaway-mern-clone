import styled from "styled-components";
import NewsletterImg from '../../../assets/newsletterImg.jpg'; 

export const NewsletterSection = styled.div`
    background-color: var(--corpGreyBG); 
    height: 500px; 
    width: 100vw;
    display: flex;
    gap: 100px; 
    padding-bottom: 10px;
`

export const NewsletterImage = styled.div`
    background-image: url(${NewsletterImg});
    background-size: cover;
    background-position: center;  
    width: 50%;  
`

export const NewsletterForm = styled.div`
    color: var(--corpDarkGrey1); 
    width: 40%; 
    display: flex; 
    flex-direction: column; 
    justify-content: center; 
    gap: 30px;
    font-size: 18px; 
`

export const EmailPill = styled.div`
    background-color: white; 
    color: var(--corpDarkGrey1); 
    font-size: 21px; 
    display: flex; 
    justify-content: space-between; 
    align-items: center; 
    padding: 15px 30px; 
    width: 60%; 
    border-radius: 3rem; 

    .icon {
        background-color: var(--corpYellow); 
        font-size: 18px; 
        padding: 10px; 
        border-radius: 2rem;
    }
`