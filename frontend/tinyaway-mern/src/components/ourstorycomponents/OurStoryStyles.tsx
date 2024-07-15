import styled from "styled-components";

export const OurStoryWrapper = styled.div`
    margin: 50px 150px; 

    h2 {
        color: var(--corpLightGrey2); 
        font-family: 'Work Sans'; 
        font-size: 28px; 
        width: 65%; 
        margin-bottom: 50px; 
    }
`

export const DoubleColumnWrapper = styled.div`
    color: var(--corpLightGrey2); 
    display: flex; 
    gap: 10%; 
    margin-bottom: 50px; 
`

export const FirstPara = styled.p`
    width: 30%; 
`

export const SecondPara = styled.p`
    width: 55%; 
`

export const ImageFeature = styled.div`
    background-size: cover; 
    background-position: center; 
    height: 700px;
    width: 1614px; 
    border-radius: 2rem; 
    margin-bottom: 50px; 
`

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

// Contact Form Styles
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
export const BrandsPart = styled.div`
    width: 100%; 
    height: 175px; 
`