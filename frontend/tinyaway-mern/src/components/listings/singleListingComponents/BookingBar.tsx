import styled from "styled-components"
import DatePicker from "./Datepicker";
import ConfirmGuestCount from "./ConfirmGuestCount";
import AddToCartPill from "../../sharedcomponents/addtocartpill/AddToCartPill";

interface BookingBarProps {
    title: string; 
    price: string; 
}

export default function BookingBar({ title, price }: BookingBarProps) {
    return(
        <>
            <BookThisHouse>
                <TitleAndPrice>
                    <h2>{ title }</h2>
                    <p>From { price } /night</p>
                </TitleAndPrice>
                <DatePicker />
                <ConfirmGuestCount />
                <AddToCartPill />
            </BookThisHouse>
        </>
    )
}

const BookThisHouse = styled.div`
    background-color: var(--corpDarkGrey1); 
    color: white; 
    display: flex; 
    justify-content: center;
    gap: 50px;  
    width: 100vw; 
    height: 100px;
    position: sticky; 
    bottom: 0px;  
    align-items: center; 
    z-index: 2; 
`

const TitleAndPrice = styled.div`
    h2 {
        font-size: 30px; 
    }
`