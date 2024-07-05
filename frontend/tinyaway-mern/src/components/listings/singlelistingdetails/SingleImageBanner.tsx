import { useEffect, useState } from "react";
import { BannerStyle } from "./SingleListingStyles";

interface ImageBannerProps {
    listingId: string; 
}

export default function SingleImageBanner({ listingId }: ImageBannerProps) {
    const [imageUrls, setImageUrls] = useState([]); 
    const [fetchStatus, setFetchStatus] = useState(false); 
    const url = `http://localhost:4000/api/housePictures?listingId=${ listingId }`; 
    
    useEffect(() => {
        fetch(url)
            .then(res => {
                if (res.ok) {
                    return res.json(); 
                } else {
                    throw new Error('Network response was not ok.');
                }
            })
            .then(data => {
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
    
    return(
        <>
            { fetchStatus &&
                <BannerStyle style={{ backgroundImage: `url(${imageUrls[4]}` }}/>
            }
        </>
    )
}