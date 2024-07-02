import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function IgFeedApi() {
    return(
        <>
            <FeedHeader>
                <h1>Follow along with our adventures, socially.</h1>
                <IgRef>
                    <FontAwesomeIcon icon={ faInstagram } />
                    <p>tiny.away</p>
                </IgRef>
                <IgFeedRow>
                    <IgFeedItem>Thumbnail</IgFeedItem>
                    <IgFeedItem>Thumbnail</IgFeedItem>
                    <IgFeedItem>Thumbnail</IgFeedItem>
                    <IgFeedItem>Thumbnail</IgFeedItem>
                    <IgFeedItem>Thumbnail</IgFeedItem>
                </IgFeedRow>
            </FeedHeader>
        </>
    )
}

const FeedHeader = styled.div`
    background-color: var(--corpGreyBG); 
    color: var(--corpDarkGrey1); 
    width: 100vw; 
    display: flex; 
    flex-direction: column; 
    align-items: center; 

    h1 {
        font-size: 64px; 
        font-family: "Work Sans"; 
        font-weight: 600; 
        margin-top: 30px; 
    }
`
const IgRef = styled.div`
    color: black; 
    display: flex;
    align-items: center;  
    gap: 10px; 
    font-size: 24px; 
    font-weight: 800;
    margin-bottom: 50px;  
`

const IgFeedRow = styled.div`
    display: flex; 
    gap: 9px;  
    margin-bottom: 10px; 
`

const IgFeedItem = styled.div`
    background-color: lightgreen; 
    height: 377px; 
    width: 377px; 
`