import styled from "styled-components";

export const Card = styled.div`
    background-color: white; 
    height: 850px;
    width: 500px;  
    display: flex; 
    flex-direction: column; 
    border: 1px solid var(--corpLightGrey1); 
    border-radius: 1rem; 
    overflow: hidden; 
`

export const ListingImg = styled.div`
    height: 501px; 
    width: 530px; 
    background-size: cover; 
`

export const CardHead = styled.div`
    display: flex; 
    justify-content: space-between; 
    align-items: flex-start; 
    font-family: "Work Sans"; 
    font-weight: 500;
    padding: 5px 20px; 
    border-bottom: 1px solid var(--corpLightGrey1); 
`

export const CardTitle = styled.div`
    font-size: 23px;  
    text-align: left;
    width: 300px;  
    height: 24px; 
    overflow: hidden;
`

export const CardSub = styled.div`
    font-size: 16px;  
    text-align: left; 
    margin-top: 2px; 
`

export const Price = styled.div`
    font-family: "Work Sans";
    font-size: 16px; 
    text-align: right; 
    margin-top: 3px; 
`

export const ReviewPart = styled.div`
    display: flex;
    gap: 5px; 
    margin-top: 5px;  
    margin-bottom: 5px; 
`

export const Description = styled.div`
    color: var(--corpLightGrey2);  
    height: 150px; 
    font-size: 21px; 
    text-align: left; 
    padding: 15px; 
    overflow: hidden; 
`

export const IconDrawer = styled.div`
    height: 66px; 
    align-content: center; 
    border-top: 1px solid var(--corpLightGrey1); 
    border-bottom-left-radius: 1rem; 
    border-bottom-right-radius: 1rem; 
    margin-top: auto; 
`