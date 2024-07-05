import { useEffect, useState } from "react";
import { FeaturedImageSmall, ListingSummary, SingleListingIntroWrapper, TagsAndIcons, ListingSummaryText, SummaryActions } from "./SingleListingStyles";
import ListingIntroTags from "./ListingIntroTags";
import ListingIntroIconCounter from "./ListingIntroIconCounter";
import PillButton from "../../sharedcomponents/genericpillbutton/PillButton";

interface SingleListingIntroProps {
    detailsInfo: () => void; 
    tags: string[]; 
    name: string; 
}

export default function SingleListingIntro({ name, tags, detailsInfo }: SingleListingIntroProps) {
    const [imageUrl, setImageUrl] = useState(''); 
    const listingId = detailsInfo.listing_id; 
    const featuredImageUrl = `http://localhost:4000/api/houseSummary?listingId=${ listingId }`; 

    useEffect(() => {
        fetch(featuredImageUrl)
        .then(res => {
            if (res.ok) {
                return res.json(); 
            } else {
                throw new Error('Network response was not ok.');
            }
        })
        .then(data => {
            setImageUrl(data.featuredImage); 
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    },[featuredImageUrl]);

    return(
        <SingleListingIntroWrapper>
            <FeaturedImageSmall style={{ backgroundImage:`url(${ imageUrl })`}}/>
            <ListingSummary>
                <div>
                    <h3>{ detailsInfo.street.toUpperCase() }</h3>
                    <h1>{ name.toUpperCase() }</h1>
                </div>
                <TagsAndIcons>
                    <ListingIntroTags tags={ tags }></ListingIntroTags>
                    <ListingIntroIconCounter 
                        guests={ detailsInfo.accommodates } 
                        beds={ detailsInfo.beds } 
                        bath={ detailsInfo.bathrooms } 
                        bedrooms={ detailsInfo.bedrooms }
                    />
                </TagsAndIcons>
                <ListingSummaryText>{ detailsInfo.publicDescription_summary }</ListingSummaryText>
                <SummaryActions>
                    <PillButton buttonName='WISH LIST' className='noChange' />
                    <PillButton buttonName='GIFT CARD' className='noChange' />
                    <PillButton buttonName='SHARE' className='noChange' />
                </SummaryActions>
            </ListingSummary>
        </SingleListingIntroWrapper>
    )
}