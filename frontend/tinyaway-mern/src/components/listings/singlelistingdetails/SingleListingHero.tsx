import { useState, useEffect } from "react"
import { NonFeatureImages, SingleHeroFeaturedImage, SingleHeroSmallImage, SingleHouseHeroWrapper } from "./SingleListingStyles";

interface SingleListingHeroProps {
    listingId: string; 
}

export default function SingleListingHero({ listingId }: SingleListingHeroProps) {
    const [imageUrls, setImageUrls] = useState([]); 
    const [fetchStatus, setFetchStatus] = useState(false); 
    const url = `http://localhost:4000/api/housePictures?listingId=${ listingId }`; 

    useEffect(() => {
        fetch(url)
            .then(res => {
                if (res.ok) {
                    return res.json(); // Assuming response is JSON
                } else {
                    throw new Error('Network response was not ok.');
                }
            })
            .then(data => {
                // Work with your data here
                const tempArray = []; 
                data.map((singleEntry) => {
                    tempArray.push(singleEntry.original_url); 
                }); 
                setImageUrls(tempArray); 
                setFetchStatus(true); 
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    },[url])

    // useEffect(() => {
    //     console.log(imageUrls); 
    // }, [imageUrls]); 


    return(
        <>
            { fetchStatus ? (
                <SingleHouseHeroWrapper>
                    <SingleHeroFeaturedImage style={{backgroundImage:`url(${ imageUrls[0] })`}}/>
                    <NonFeatureImages>
                        <SingleHeroSmallImage style={{backgroundImage:`url(${ imageUrls[1] })`}}/>
                        <SingleHeroSmallImage style={{backgroundImage:`url(${ imageUrls[2] })`}}/>
                    </NonFeatureImages>
                </SingleHouseHeroWrapper>
            ):(
                <p>Boo</p>
            )

            }
        </>
    )
}