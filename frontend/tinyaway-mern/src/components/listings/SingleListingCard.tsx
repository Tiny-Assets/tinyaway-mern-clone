import { Card, ListingImg, CardHead, CardTitle, CardSub, ReviewPart, Price, Description, IconDrawer } from "./SingleCardStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

interface SingleCardProps {
    imageUrl: string; 
    name: string; 
    street: string; 
    rating: number; 
    reviewCount: number; 
    price: number; 
    houseDescription: string; 
}

export default function SingleListingCard({ imageUrl, name, street, rating, reviewCount, price, houseDescription }: SingleCardProps) {
    return(
        <Card>
            <ListingImg style={{backgroundImage:`url(${ imageUrl })`}}/>
                <CardHead>
                    <div>
                        <CardTitle>{ name }</CardTitle>
                        <CardSub>{ street }</CardSub>
                        <ReviewPart>
                            <FontAwesomeIcon icon={ faStar } style={{ color:'orange' }}/>
                            <p>{ rating / 20 }</p>
                            <p style={{ color:'var(--corpLightGrey2' }}>({ reviewCount })</p>
                        </ReviewPart>
                    </div>
                    <div>
                        <Price>RM{ price }<br/>/night</Price>
                    </div>
                </CardHead>
                <Description>{ houseDescription }</Description>
                <IconDrawer> ICON DRAWER </IconDrawer>
            </Card>
    )
}