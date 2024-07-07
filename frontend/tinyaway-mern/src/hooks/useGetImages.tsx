import { useEffect, useContext, useState } from "react";
import { SingleListingImagesContext } from "../contexts/SingleListingImagesContext";

interface useImagesProps {
    listingId: string; 
}

export default function useGetImages({ listingId }: useImagesProps) {
    const { imageArray, setImageArray } = useContext(SingleListingImagesContext); 
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
                console.log(data); 
                const tempArray = []; 
                data.map((singleEntry) => {
                    tempArray.push(singleEntry.original_url); 
                }); 
                setImageArray(tempArray); 
                setFetchStatus(true); 
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    },[setImageArray, url]); 

// Check if Image URL fetching works
    // useEffect(() => {
    //     console.log(fetchStatus); 
    //     console.log(imageArray); 
    // }, [fetchStatus, imageArray]);
}