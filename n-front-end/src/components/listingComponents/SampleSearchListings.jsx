import styled from 'styled-components'; 
import { useState } from "react";

export default function SampleSearchListings() {
    const sampleURL = 'http://localhost:4000/api/test'; 
    const [test, setTest] = useState(); 
    const [loading, setLoading] = useState(true); 

    // Fetch listings from Backend Express Api 
    fetch(sampleURL)
    .then((res) => {
        if (!res.ok) {
            throw new Error('Network response was not ok');
        }
        return res.json();
    })
    .then((data) => {
        setTest(data); 
        setLoading(false); 
    })
    .catch((error) => {
        console.error('Error:', error);
        setLoading(false); 
     });

     return (
        <>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <Layout>
                    <CardGrid>
                    { test.map((singleHouse) => (
                        <SingleHouseCard key={singleHouse._id}>
                        <div key={singleHouse._id}>
                            <ListingPhoto style={{ backgroundImage: `url(${singleHouse.images.picture_url})` }} />
                        </div>
                        <Details>
                            <h2>{singleHouse.name.toUpperCase()}</h2>
                            <p>ID: {singleHouse._id}</p>
                        </Details>
                        <IconDrawer>Icon Drawer</IconDrawer>
                        </SingleHouseCard>
                    ))}
                    </CardGrid>
                    <GoogleMap>Google Map</GoogleMap>
                </Layout>
            )}
        </>
    );
}

const Layout = styled.div`
    display: flex; 
    justify-content: center; 
    margin: 51px; 
`

const GoogleMap = styled.div`
    background-color: orange; 
    position: sticky; 
    top: 140px; 
    height: 850px; 
    width: 710px; 
    z-index: -1;
    border-radius: 1rem; 
`

const CardGrid = styled.div`
    display: flex;
    flex-wrap: wrap; 
    gap: 26px; 
    width: 1200px; 
`

const SingleHouseCard = styled.div`
    background-color: white; 
    height: 731px; 
    width: 532px;  
    border: 2px solid var(--corpLightGrey1); 
    border-radius: 1rem; 
`

const ListingPhoto = styled.div`
    background-size: cover; 
    height: 503px; 
    width: 100%; 
    border-radius: 0.8rem 0.8rem 0rem 0rem; 
`

const Details = styled.div`
    height: 120px; 
    margin: 0px; 
    padding: 20px;
    border-bottom: 3px solid var(--corpLightGrey1);  
`

const IconDrawer = styled.div`
    height: 66px; 
    align-content: center;
    text-align: center; 
    border-radius: 0rem 0rem 1rem 1rem; 
`