import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SingleCard, ListingImageArea, CardHeader, CardTitle, CardSubtitle, ListingSide, PriceSide, PriceAmount, RatingSection, DescriptionSection, ListingDescription, IconDrawer } from "./SingleListingCardStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

interface SingleListingCardProps {
    listingId: string;
    name: string; 
    featuredImage: string; 
    tags: string[]; 
}

export default function SingleListingCard({ listingId, name, featuredImage, tags }: SingleListingCardProps) {
    const [listingName, setListingName] = useState(''); 
    const [listingTags, setListingTags] = useState([]); 
    const [details, setDetails] = useState([]); 
    const [fetchStatus, setFetchStatus] = useState(false); 
    const url = `http://localhost:4000/api/houseDetails?listingId=${ listingId }`; 

    useEffect(() => {
        setListingName(name); 
        setListingTags(tags); 

        fetch(url)
            .then(response => response.json())
            .then(data => {
                setDetails(data); 
                setFetchStatus(true); 
            })
            .catch(error => console.error('Error fetching data:', error));
    },[url]); 

    useEffect(() => {
        console.log(details); 
    }, [details]); 

    const navigate = useNavigate(); 

    const clickCard = () => {
        console.log(`${name} card clicked`); 
        navigate(`/tiny-house-destinations/${ listingId }`,{ state:{ listingName:{ name }, listingTags:{ tags }}}); 
    }

    return(
        <>
            { fetchStatus ? (
                    <SingleCard onClick={ clickCard }>
                        <ListingImageArea style={{backgroundImage:`url(${ featuredImage })`}} />
                        <CardHeader>
                            <ListingSide>
                                <CardTitle>{ name.toUpperCase() }</CardTitle>
                                <CardSubtitle>{ details.street }</CardSubtitle>
                                <RatingSection>
                                    <FontAwesomeIcon icon={ faStar } style={{'color':'orange'}} />
                                    <h4>5.00</h4>
                                    <p>(99)</p>
                                </RatingSection>
                            </ListingSide>
                            <PriceSide>
                                <PriceAmount>AUD{parseInt(details.prices_basePrice)}</PriceAmount>
                                <h4>/night</h4>
                            </PriceSide>
                        </CardHeader>
                        <DescriptionSection>
                            <ListingDescription>{ details.publicDescription_summary }</ListingDescription>
                        </DescriptionSection>
                        <IconDrawer>
                            <p>ICON DRAWER</p>
                        </IconDrawer>
                    </SingleCard>
            ) : ( 
                <p> Loading... </p>
            )}
        </>
    )
}