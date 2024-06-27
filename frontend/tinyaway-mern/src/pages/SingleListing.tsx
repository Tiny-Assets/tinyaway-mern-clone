import styled from "styled-components"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import ListingIntro from "../components/listings/singleListingComponents/ListingIntro";

export default function SingleListing() {
    const [listingDetails, setListingDetails] = useState({}); 
    const listingId = useParams(); 
    console.log(listingId); 

    useEffect(() => {
        const url = `http://localhost:4000/api/findHouse?listingId=${listingId.id}`; 

        fetch(url)
            .then(res => {
                if (res.ok) {
                    return res.json(); // Assuming response is JSON
                } else {
                    throw new Error('Network response was not ok.');
                }
            })
            .then(data => {
                console.log(data); 
                setListingDetails(data); 
            })
    }, []); 

    const imageUrl = listingDetails.images?.picture_url;
    const name = listingDetails.name?.toUpperCase(); 
    const street = listingDetails.address?.street?.toUpperCase(); 
    const description = listingDetails.description; 
    const tags = listingDetails.amenities; 

    return(
        <>
        <HeroFeature>
            <div>
                { imageUrl &&
                    <MainImage style={{backgroundImage: `url(${imageUrl})` }}/>
                }
            </div>
            <div>
                <SecImage />
                <SecImage />
            </div>
        </HeroFeature>
        <ListingIntro name={ name } street={ street } description={ description } tags={ tags } />
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
    width: 628px; 
    height: 345px;
    margin-bottom: 10px; 
`