import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import PillButton from "../PillButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function PopularListings() {
    const url = "http://localhost:4000/api/list12"; 
    const [demoListings, setDemoListings] = useState([]); 

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
                setDemoListings(data); 
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    useEffect(() => {
        console.log(demoListings);
    }, [demoListings]); 

    return(
        <TopListings>
            <SectionTitle>POPULAR TINY HOUSE DESTINATIONS</SectionTitle>
            <SubTitle>Hear it from our guests. This is the list of tiny houses that we have specially curated for you, based on reviews from our guests who have stayed in them.</SubTitle>
            <CardSection>
                {demoListings.map((listing, index) => (
                        <Link to='/tiny-house-destinations/listing' key={ index }>
                            <Card>
                                <ListingImg style={{backgroundImage:`url(${ listing.images.picture_url })`}}/>
                                <CardHead>
                                    <div>
                                        <CardTitle>{ listing.name.toUpperCase() }</CardTitle>
                                        <CardSub>{ listing.address.street }</CardSub>
                                        <ReviewPart>
                                            <FontAwesomeIcon icon={ faStar } style={{ color:'orange' }}/>
                                            <p>{ listing.review_scores.review_scores_rating / 20 }</p>
                                            <p style={{ color:'var(--corpLightGrey2' }}>({ listing.reviews.length })</p>
                                        </ReviewPart>
                                    </div>
                                    <div>
                                        <Price>RM{ listing.price.$numberDecimal }<br/>/night</Price>
                                    </div>
                                </CardHead>
                                <Description>{ listing.description }</Description>
                                <IconDrawer> ICON DRAWER </IconDrawer>
                            </Card>
                        </Link>
                ))
                }
            </CardSection>
            <PillButton className="noChange" buttonName="EXPLORE ALL OUR PROPERTIES" path="/tiny-house-destinations" />
        </TopListings>
    )
}

const TopListings = styled.div`
    text-align: center; 
    margin: 50px; 
`

const SectionTitle = styled.div`
    font-family: "Work Sans";
    font-weight: 600; 
    font-size: 64px; 
    color: var(--corpDarkGrey1); 
`

const SubTitle = styled.div`
    font-size: 21px; 
`

const CardSection = styled.div`
    display: flex; 
    flex-wrap: wrap; 
    justify-content: center; 
    gap: 30px 20px; 
    margin: 50px; 
`

const Card = styled.div`
    background-color: white; 
    height: 850px;
    width: 500px;  
    display: flex; 
    flex-direction: column; 
    border: 1px solid var(--corpLightGrey1); 
    border-radius: 1rem; 
    overflow: hidden; 
`

const ListingImg = styled.div`
    height: 501px; 
    width: 530px; 
    background-size: cover; 
`

const CardHead = styled.div`
    display: flex; 
    justify-content: space-between; 
    align-items: flex-start; 
    font-family: "Work Sans"; 
    font-weight: 500;
    padding: 5px 20px; 
    border-bottom: 1px solid var(--corpLightGrey1); 
`

const CardTitle = styled.div`
    font-size: 23px;  
    text-align: left; 
    height: 24px; 
    overflow: hidden;
`

const CardSub = styled.div`
    font-size: 16px;  
    text-align: left; 
    margin-top: 2px; 
`

const Price = styled.div`
    font-family: "Work Sans";
    font-size: 16px; 
    text-align: right; 
    margin-top: 3px; 
`

const ReviewPart = styled.div`
    display: flex;
    gap: 5px; 
    margin-top: 5px;  
    margin-bottom: 5px; 
`
const Description = styled.div`
    color: var(--corpLightGrey2);  
    height: 150px; 
    font-size: 21px; 
    text-align: left; 
    padding: 15px; 
    overflow: hidden; 
`

const IconDrawer = styled.div`
    height: 66px; 
    align-content: center; 
    border-top: 1px solid var(--corpLightGrey1); 
    border-bottom-left-radius: 1rem; 
    border-bottom-right-radius: 1rem; 
    margin-top: auto; 
`