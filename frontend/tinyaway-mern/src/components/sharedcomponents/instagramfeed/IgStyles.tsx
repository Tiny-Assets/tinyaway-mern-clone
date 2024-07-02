import styled from "styled-components"

export const FeedHeader = styled.div`
    background-color: var(--corpGreyBG); 
    width: 100vw; 
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
    margin-bottom: 50px;  
`

export const IgFeedRow = styled.div`
    display: flex; 
    gap: 9px;  
    margin-bottom: 10px; 
`

export const IgFeedItem = styled.div`
    background-color: lightgreen; 
    height: 377px; 
    width: 377px; 
`