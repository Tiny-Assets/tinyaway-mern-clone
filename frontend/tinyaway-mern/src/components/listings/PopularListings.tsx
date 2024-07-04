import { TopListings, SectionTitle, SubTitle, CardSection } from "./ListingStyles";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import PillButton from "../sharedcomponents/genericpillbutton/PillButton";
import SingleListingCard from "./SingleListingCard";

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
                        <Link to={`/tiny-house-destinations/${listing._id}`} key={ index }>
                            <SingleListingCard
                                imageUrl={ listing.images.picture_url }
                                name={ listing.name.toUpperCase() }
                                street={ listing.address.street }
                                rating={ listing.review_scores.review_scores_rating }
                                reviewCount={ listing.reviews.length }
                                price={ listing.price.$numberDecimal }
                                houseDescription={ listing.description }
                            />                                
                        </Link> 
                    ))
                }
            </CardSection>
            <PillButton className="noChange" buttonName="EXPLORE ALL OUR PROPERTIES" path="/tiny-house-destinations" />
        </TopListings>
    )
}

