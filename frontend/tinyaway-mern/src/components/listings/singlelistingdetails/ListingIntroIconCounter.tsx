import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faBed, faBath, faDoorOpen } from "@fortawesome/free-solid-svg-icons"
import { CounterBox, IconCounterWrapper } from "./SingleListingStyles";

interface IconCounterProps {
    guests: number; 
    beds: number; 
    bath: number; 
    bedrooms: number; 
}
export default function ListingIntroIconCounter({ guests, beds, bath, bedrooms }: IconCounterProps) {
    return(
        <IconCounterWrapper>
            <CounterBox>
                <FontAwesomeIcon icon={ faUser } />
                <p>{ guests } Guests</p>
            </CounterBox>
            <CounterBox>
                <FontAwesomeIcon icon={ faBed } />
                <p>{ beds } Bed</p>
            </CounterBox>
            <CounterBox>
                <FontAwesomeIcon icon={ faBath } />
                <p>{ bath } Bath</p>
            </CounterBox>
            <CounterBox>
                <FontAwesomeIcon icon={ faDoorOpen } />
                <p>{ bedrooms } Bedroom</p>
            </CounterBox>
        </IconCounterWrapper>
    )
}