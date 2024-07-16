import styled from "styled-components";

export const SpareLandWrapper = styled.div`
    background-color: var(--corpGreyBG); 
    height: 580px; 
    display: flex; 
    flex-direction: column; 
    align-items: center;
    justify-content: center;  
    text-align: center;

    h3 {
        color: var(--corpDarkGrey1); 
        font-size: 28px; 
        margin-bottom: 40px; 
    }

    p {
        color: var(--corpDarkGrey1); 
        width: 870px; 
    }
`

export const WhyHostWrapper = styled.div`
    height: 2000px; 
    display: flex;
    justify-content: center;  
    gap: 10%; 
    margin: 50px; 
`

export const WhyHostSticky = styled.div`
    height: 450px; 
    width: 400px; 
    position: sticky; 
    top: 200px; 

    h2 {
        color: var(--corpDarkGrey1); 
        font-size: 34px; 
        font-weight: 700; 
    }
`

export const WhyHostReason = styled.div`
    color: var(--corpDarkGrey1); 
    font-size: 21px; 
    display: flex; 
    align-items: center; 
    gap: 3%; 
    margin-top: 30px; 
    margin-left: 10px; 
`

export const WhyHostCardSection = styled.div`
    height: 2000px; 
    width: 1100px; 
    display: flex; 
    justify-content: space-between; 
    align-items: center; 
    flex-wrap: wrap; 
`

export const ReasonCard = styled.div`
    height: 600px; 
    width: 530px; 
    border-radius: 2rem; 
    border: 2px solid var(--corpLightGrey1); 

    .reasonTitle {
        color: var(--corpDarkGrey1); 
        font-size: 28px; 
        display: flex;
        align-items: baseline; 
        justify-content: start;  
        gap: 15px; 
        margin: 20px;

        h2 {
            font-family: 'Source Sans 3';
            font-weight: 600; 
            font-size: 32px; 
            color: var(--corpDarkGrey1); 
        }
    }

    .reasonDescription {
        color: var(--corpDarkGrey1); 
        height: 150px; 
        width: 490px; 
        margin-left: 15px; 

        p {
            font-size: 18px; 
        }
    }
`

export const CardImg = styled.div`
    background-size: cover; 
    height: 350px; 
    width: 530px; 
    border-top-left-radius: 2rem; 
    border-top-right-radius: 2rem; 
`