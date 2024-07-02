import styled from "styled-components"

interface AddToCartProps {
    houseName?: string;
    guestCount?: string; 
    checkIn?: string; 
    checkOut?: string;
}
export default function AddToCartPill({ houseName, guestCount, checkIn, checkOut }: AddToCartProps) {
    return(
        <PillBox>
            <p>ADD TO CART</p>
        </PillBox>
    )
}

const PillBox = styled.div`
    background-color: var(--corpYellow);
    color: var(--corpDarkGrey2); 
    height: 60px; 
    width: 300px; 
    display: flex; 
    align-items: center; 
    justify-content: center;
    font-size: 21px; 
    border-radius: 2rem; 
`