import styled from 'styled-components'; 
import { useState, useEffect } from 'react'; 
import PillButton from '../sharedComponents/Buttons/PillButton';

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
        <Layout>
            <SectionHeader>
                <h2>POPULAR TINY HOUSE DESTINATIONS</h2>
                <p>Hear it from our guests. A list of tiny houses specially curated for you, based on reviews from previous guests.</p>
            </SectionHeader>
            { isLoading ? (
                <div>Loading...</div>
            ):(
                <CardGrid>
                    { sample12Data.map((singleHouse) => {
                    return (
                        <SingleHouse key={singleHouse._id}>
                            <div key={singleHouse._id}>
                                <HousePicture style={{ backgroundImage : `url(${singleHouse.images.picture_url})` }} />
                            </div>
                            <FullDetails>
                                <HouseDetails>
                                    <h3>{ singleHouse.name.toUpperCase() }</h3>
                                    <p>{ singleHouse.address.street.toUpperCase() }</p>
                                </HouseDetails>
                                <PriceDetails>
                                    <h4>RM{ singleHouse.price.$numberDecimal }</h4>
                                    <p>/night</p>
                                </PriceDetails>
                            </FullDetails>
                            <Description>
                                <p>{ singleHouse.space }</p>
                            </Description>
                        </SingleHouse> 
                    )})
                    }
                </CardGrid>
            )}
            <PillButton name='EXPLORE ALL OUR PROPERTIES' path='/'/>
        </Layout>
    )
}

const Layout = styled.div`
    display: flex; 
    flex-direction: column; 
    align-items: center; 
`;

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
`;

const CardGrid = styled.div`
    width: 1800px; 
    display: flex; 
    justify-content: center; 
    flex-wrap: wrap; 
    gap: 45px; 
    margin-bottom: 100px; 
`;

const SingleHouse = styled.div` 
    background-color: white; 
    height: 860px; 
    width: 531px; 
    border: 2px solid var(--corpLightGrey1);
    border-radius: 1rem;  
`;

const HousePicture = styled.div`
    background-size: cover; 
    height: 501px; 
    background-repeat: no-repeat;
    border-radius: 1rem 1rem 0rem 0rem; 
`;

const FullDetails = styled.div`
    display: flex; 
    align-items: center; 
    justify-content: space-between; 
    border-bottom: 2px solid var(--corpLightGrey1); 
`;

const PriceDetails = styled.div`
    height: 100px; 
    display: flex; 
    flex-direction: column; 
    align-items: flex-end;  
    justify-content: flex-start; 
    padding: 10px; 

    & h4 {
        font-size: 24px; 
        margin: 0px; 
    }
`; 

const HouseDetails = styled.div`
    width: 511px; 
    height: 100px; 
    display: flex; 
    flex-direction: column; 
    font-size: 25px;
    padding: 10px;  

    & p {
        font-size: 18px; 
        margin-top: 5px; 
    }
`;

const Description = styled.div`
    height: 160px; 
    padding: 10px; 
    font-size: 18px; 
    color: var(--corpLightGrey2); 
    overflow: hidden; 
    border-bottom: 2px solid var(--corpLightGrey1); 
`;