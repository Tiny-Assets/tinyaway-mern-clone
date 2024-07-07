import { useState, useEffect } from "react";

export default function AllListings() {
    const [listings, setListings] = useState([]); 
    const [fetchStatus, setFetchStatus] = useState(false); 
    const url = 'http://localhost:4000/api/tinyawayall'; 

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
                setListings(data); 
                setFetchStatus(true); 
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    },[]); 
    
    useEffect(() => {
        console.log(listings); 
    }, [listings]); 

    return(
        <>
            All Listings
        </>
    )
}