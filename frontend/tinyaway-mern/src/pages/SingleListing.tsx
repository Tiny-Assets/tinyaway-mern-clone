import styled from "styled-components"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import ListingIntro from "../components/listings/singleListingComponents/ListingIntro";
import ListingDetails from "../components/listings/singleListingComponents/ListingDetails";

export default function SingleListing() {
    const [listingDetails, setListingDetails] = useState(null); 
    const [fetchComplete, setFetchComplete] = useState(false); 
    const { id } = useParams(); // Destructure id from useParams

    useEffect(() => {
        const fetchListing = async () => {
                const url = `http://localhost:4000/api/findHouse?listingId=${id}`;
                fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        setListingDetails(data); 
                        setFetchComplete(true); 
                    })
                    .catch(error => console.error('Error fetching data:', error));
                } 
        fetchListing();
    }, [id]);

    return(
        <>
            { fetchComplete &&
            <>
                <HeroFeature>
                    <div>
                        <MainImage style={{backgroundImage: `url(${listingDetails.images.picture_url}`}}/>
                    </div>
                    <div>
                        <SecImage />
                        <SecImage />
                    </div>
                </HeroFeature>
                <ListingIntro name={ listingDetails.name.toUpperCase() } street={ listingDetails.address.street.toUpperCase() } description={ listingDetails.summary } />
                <ListingDetails listingDetails={ listingDetails } />
            </>
        }
        </>
        
    )
}

const HeroFeature = styled.div`
    display: flex; 
    gap: 10px; 
    height: 700px; 
`

const MainImage = styled.div` 
    background-size: cover; 
    background-repeat: no-repeat; 
    width: 1282px; 
    height: 700px; 
    overflow: hidden; 
`

const SecImage = styled.div`
    background-color: lightblue; 
    width: 610px; 
    height: 345px;
    margin-bottom: 10px; 
`

const MainContent = styled.div`
    margin-left: 100px; 
`