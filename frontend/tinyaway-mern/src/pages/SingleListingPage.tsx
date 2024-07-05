import { useEffect, useState } from "react"
import { useParams, useLocation } from "react-router-dom";
import SingleListingHero from "../components/listings/singlelistingdetails/SingleListingHero";
import SingleListingIntro from "../components/listings/singlelistingdetails/SingleListingIntro";
import SingleImageBanner from "../components/listings/singlelistingdetails/SingleImageBanner";
import ListingDetailsCollapsed from "../components/listings/singlelistingdetails/ListingDetailsCollapsed";

export default function SingleListing() {
    const { id } = useParams(); 
    const [details, setDetails] = useState(); 
    const [ fetchComplete, setFetchComplete] = useState(false); 
    const location = useLocation(); 

    const detailsUrl = `http://localhost:4000/api/houseDetails?listingId=${ id }`
    useEffect(() => {
        fetch(detailsUrl)
        .then(res => {
            if (res.ok) {
                return res.json(); 
            } else {
                throw new Error('Network response was not ok.');
            }
        })
        .then(data => {
            setDetails(data); 
            setFetchComplete(true); 
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    },[detailsUrl]);

    return(
        <>
            <SingleListingHero listingId={ id } />
            
            {   fetchComplete && 
                <>
                    <SingleListingIntro 
                        detailsInfo={ details } 
                        name={ location.state.listingName.name } 
                        tags={ location.state.listingTags.tags }
                    />
                    <SingleImageBanner listingId={ id } />
                    <ListingDetailsCollapsed content={ details }/>
                </>
            }
        </>
    )
}