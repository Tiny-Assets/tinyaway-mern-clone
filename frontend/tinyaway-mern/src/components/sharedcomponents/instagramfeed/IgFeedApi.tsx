import { FeedHeader, IgRef, IgFeedRow, IgFeedItem } from "./IgStyles";
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