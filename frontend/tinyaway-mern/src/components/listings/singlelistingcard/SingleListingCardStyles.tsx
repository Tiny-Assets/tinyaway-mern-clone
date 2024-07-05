import styled from "styled-components";

// Specs from UI for desktop version
// 795px + 65px = 860px (assumed full height)
// width = 530px 

export const SingleCard = styled.div`
    background-color: white; 
    height: 860px;
    width: 530px;
    display: flex; 
    flex-direction: column; 
    border: 1px solid var(--corpLightGrey1); 
    border-radius: 1rem; 
    overflow: hidden; 
`

export const ListingImageArea = styled.div`
    background-size: cover;
    background-position: center; 
    height: 58%; 
    width: 100%; 
`

export const CardHeader = styled.div`
    display: flex; 
    justify-content: space-between; 
    // align-items: center; 
    padding: 10px 15px; 
    border-bottom: 1px solid var(--corpLightGrey1); 
`

export const ListingSide = styled.div`
    width: 75%; 
`

export const CardTitle = styled.h3`
    font-family: 'Work Sans';
    font-weight: 500; 
    font-size: 32px; 
    color: var(--corpBlack); 
    white-space: nowrap; 
    overflow: hidden; 
    text-overflow: ellipsis; 
`

export const CardSubtitle = styled.h4`
    font-size: 16px; 
    color: var(--corpBlack); 
`

export const RatingSection = styled.div`
    display: flex; 
    gap: 5px; 
    font-size: 21px; 
    margin-top: 5px; 
`

export const PriceSide = styled.div`
    width: 20%; 
    text-align: end; 
`

export const PriceAmount = styled.h4`
    font-family: 'Work Sans';
    font-weight: 600; 
    font-size: 21px; 
    color: var(--corpBlack); 
    text-align: center; 
`

export const DescriptionSection = styled.div`
    // background-color: lightgreen; 
    height: 22%; 
    overflow: hidden; 
    border-bottom: 1px solid var(--corpLightGrey1); 
`

export const ListingDescription = styled.p`
    height: 90%; 
    color: var(--corpLightGrey2); 
    font-size: 21px;  
    text-overflow: ellipsis; 
    overflow: hidden; 
    margin: 10px; 
`

export const IconDrawer = styled.div`
    color: var(--corpLightGrey2); 
    flex-grow: 1; 
    display: flex; 
    font-size: 21px; 
    justify-content: center; 
    align-items: center; 
`