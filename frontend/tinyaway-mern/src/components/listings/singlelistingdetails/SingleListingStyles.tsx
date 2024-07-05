import styled from "styled-components";

// Hero Section of Single Listing Page
export const SingleHouseHeroWrapper = styled.div`
    width: 100%; 
    height: 70vh; 
    display: flex; 
    gap: 5px; 
`

export const SingleHeroFeaturedImage = styled.div`
    background-size: cover; 
    height: 100%; 
    width: 67%; 
`

export const NonFeatureImages = styled.div`
    height: 100%; 
    width: 33%; 
    display: flex; 
    flex-direction: column; 
    gap: 5px; 
`
export const SingleHeroSmallImage = styled.div`
    background-size: cover; 
    height: 50%; 
    width: 100%; 
`

// Intro Section of Single Listing Page 
export const SingleListingIntroWrapper = styled.div`
    width: 85%; 
    height: 50vh;
    display: flex; 
    align-items: center; 
    margin: 50px auto; 
`

export const FeaturedImageSmall = styled.div`
    background-size: cover; 
    height: 100%; 
    width: 50%; 
`

export const ListingSummary = styled.div`
    color: black; 
    height: 100%;
    width: 60%;  
    margin: auto 50px;
    display: flex;
    flex-direction: column; 
    // justify-content: space-between; 
    // border: 1px solid blue; 
`

export const TagsAndIcons = styled.div`
    display: flex; 
`

export const TagsBox = styled.div`
    display: flex; 
    gap: 10px; 
`

export const IconCounterWrapper = styled.div`
    display: flex; 
    gap: 30px; 
    margin-left: 20px; 
    align-items: center; 
`

export const CounterBox = styled.div`
    color: var(--corpLightGrey2); 
    font-size: 21px; 
    display: flex;
    align-items: center;  
    gap: 10px; 
`

export const ListingSummaryText = styled.p`
    font-size: 20px; 
    color: var(--corpBlack); 
    width: 90%; 
    line-height: 1.8rem; 
    // border: 1px solid red; 
`

export const SummaryActions = styled.div`
    justify-self: flex-end; 
    display: flex; 
    gap: 20px; 
`

// Image Banner Styles
export const BannerStyle = styled.div`
    background-size: cover; 
    background-repeat: no-repeat; 
    background-position: center; 
    width: 100%; 
    height: 70vh; 
`

// Collapsible Details Menus
export const DetailsWrapper = styled.div`
    display: flex; 
    justify-content: center; 
    gap: 5%; 
`

export const ColumnWrapper = styled.div`
    width: 45%; 
`

export const DetailsTitle = styled.h2`
    font-size: 34px; 
    color: var(--corpDarkGrey1); 
    margin: 30px 0px; 
`

export const SubMenuWrapper = styled.div`
    margin: 20px 0px; 
    border-bottom: 1px solid var(--corpLightGrey1); 
`

export const SubMenu = styled.div`
    color: var(--corpDarkGrey1); 
    display: flex; 
    justify-content: space-between; 
`

export const SubMenuTitle = styled.h2`
    font-size: 24px; 
    font-weight: 500; 
    margin-bottom: 10px; 
`

// Submenu Content Layout
export const CenteredContent = styled.div`
    color: var(--corpBlack); 
    width: 90%; 
    margin-bottom: 10px; 
`

export const SplitContent = styled.div`
    color: var(--corpBlack); 
    width: 95%; 
    display: flex; 
    justify-content: space-between; 
    align-items: center; 
`
