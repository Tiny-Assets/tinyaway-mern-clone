import styled from 'styled-components'; 
import { useState, useEffect } from 'react'; 

export default function SampleTopListings() {
    const [sample12Data, setSampleData] = useState(); 
    const [isLoading, setIsLoading] = useState(true); 

    const url = "http://localhost:4000/api/list12"; 

    useEffect(() => {
    fetch(url)
        .then((res) => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json();
        })
        .then((data) => {
            setSampleData(data); 
            setIsLoading(false); 
            console.log(data); 
        }); 
    }, []); 
    
    return (
        <>
            <SectionHeader>
                <h2>POPULAR TINY HOUSE DESTINATIONS</h2>
                <p>Hear it from our guests. A list of tiny houses specially curated for you, based on reviews from previous guests.</p>
            </SectionHeader>
            { isLoading ? (
                <div>Loading...</div>
            ):(
                <div>
                    { sample12Data.map((singleHouse) => {
                    return (
                        <div key={singleHouse._id}>
                            <p>{singleHouse.name}</p>
                        </div>
                    )})
                    }
                </div>
            )}
        </>
    )
}

const SectionHeader = styled.div`
    display: flex; 
    flex-direction: column; 
    align-items: center; 
    font-family: 'Source Sans 3'; 
    color: var(--corpDarkGrey2); 
    margin: 30px; 

    & h2 {
    font-size: 64px; 
    font-weight: bold; 
    }
`