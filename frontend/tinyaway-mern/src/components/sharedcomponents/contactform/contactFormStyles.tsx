import styled from "styled-components";

// Contact Section Styles 
export const ContactWrapper = styled.div`
    background-size: cover; 
    background-height: 90vh; 
    display: flex; 
    align-items: center; 
    justify-content: center; 
    gap: 10%; 
    width: 100%; 
    height: 90vh; 


    h1 {
        color: white; 
        font-weight: 700;
        width: 600px;
        margin-bottom: 100px;  
    }

    p {
        color: white; 
        font-size: 28px; 
    }
`

export const BrandsPart = styled.div`
    width: 90%; 
    height: 175px; 
    display: flex; 
    align-items: center; 
    justify-content: start;
    gap: 3%; 
    margin-left: 50px; 
`

export const DisplayedLogo = styled.div`
    background-size: contain;
    background-repeat: no-repeat; 
    background-position: center;  
    height: 100px; 
    width: 200px; 
    margin-left: 30px; 
`

// Form Styles
export const FormWrapper = styled.div`
    background-color: black; 
    color: white; 
    width: 820px; 
    height: 830px; 
    align-self: start; 
    display: flex; 
    flex-direction: column; 
    align-items: center; 
    margin-top: 100px; 
    border-radius: 2rem; 

    h2 {
        color: white; 
        font-size: 28px; 
        font-weight: 600; 
        margin-bottom: 20px; 
    }
`

export const FormLogoTop = styled.div`
    background-color: var(--corpYellow); 
    color: var(--corpDarkGrey1); 
    height: 85px; 
    width: 85px; 
    position: relative;
    top: -40px;  
    font-size: 52px; 
    text-align: center; 
    align-content: center; 
    border-radius: 3rem; 
`

export const FormField = styled.div`
    background-color: white; 
    width: 80%; 
    border-radius: 2rem; 
    margin-bottom: 20px; 

    p {
        color: var(--corpLightGrey2); 
        font-size: 21px; 
        padding: 20px 40px; 
    }

    &.message {
        height: 25%; 
    }
`
