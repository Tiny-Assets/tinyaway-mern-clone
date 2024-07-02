import { Add2CartPill } from "./AddToCartStyles";

interface AddToCartProps {
    houseName?: string;
    guestCount?: string; 
    checkIn?: string; 
    checkOut?: string;
}
export default function AddToCartPill({ houseName, guestCount, checkIn, checkOut }: AddToCartProps) {
    return(
        <Add2CartPill>
            <p>ADD TO CART</p>
        </Add2CartPill>
    )
}