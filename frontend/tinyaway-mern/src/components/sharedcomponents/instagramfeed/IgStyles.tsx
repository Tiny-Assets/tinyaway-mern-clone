import styled from "styled-components"

export const FeedHeader = styled.div`
    background-color: var(--corpGreyBG); 
    width: 100%; 
    display: flex; 
    flex-direction: column; 
    align-items: center; 

    h1 {
        margin-top: 30px; 
    }
`
export const IgRef = styled.div`
    color: black; 
    display: flex;
    align-items: center;  
    gap: 10px; 
    font-size: 24px; 
    font-weight: 800;
    margin-bottom: 20px;  
`

export const IgFeedRow = styled.div`
    width: 100%; 
    display: flex; 
    justify-content: space-between; 
    margin-bottom: 10px; 
`

export const IgFeedItem = styled.div`
    background-color: lightgreen; 
    height: 375px; 
    width: 375px; 
`