import styled from "styled-components";

// Tiny Stories Main Page Styles
export const HeroArea = styled.div`
    background-size: fit;
    height: 60vh; 
    width: 100%; 
    text-align: center; 
    align-content: center; 

    h1 {
        color: white; 
        font-weight: 700; 
    }

    p {
        color: white; 
        font-size: 24px; 
    }
`

export const ContentWrapper = styled.div`
    display: flex; 
    flex-direction: column; 
    align-items: center; 
`
export const ContentArea = styled.div`
    display: flex; 
    flex-direction: column; 
    justify-content: center; 
    margin: 30px 125px; 
`

export const StoryCardsArea = styled.div`
    display: grid; 
    grid-template-columns: repeat(4, 1fr); 
    gap: 20px; 
    margin-top: 30px; 
`

// ------------------------------------------------------------- //
// ------------------------------------------------------------- //
// ------------------------------------------------------------- //
// ------------------------------------------------------------- //

// Single Card Styles

export const SingleStoryCard = styled.div`
    background-color: white; 
    height: 478px; 
    min-width: 403px; 
    display: flex; 
    flex-direction: column; 
    align-items: center; 
    border-radius: 1rem; 
    border: 1px solid var(--corpLightGrey1); 
`

export const StoryCardTitle = styled.div`
    height: 20%; 
    width: 90%; 
    display: flex; 
    align-items: center;
    gap: 8%; 
    margin: 5px; 
`
export const FakeProfilePic = styled.div`
    background-color: orange; 
    height: 68px;
    width: 68px;
    border-radius: 2rem; 
`

export const StoryInfo = styled.div`
    height: 80px;
    width: 70%;  
    display: flex; 
    flex-direction: column; 
    align-items: flex-start; 
    justify-content: center;
`

export const AuthorName = styled.div`
    font-size: 16px; 
`

export const StoryHeader = styled.div`
    font-size: 18px; 
    font-weight: bold; 
    text-align: start; 
    line-height: 1.5rem; 
`

export const FakeImage = styled.img`
    height: 50%; 
    width: 100%; 
`