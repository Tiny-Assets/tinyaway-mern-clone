import { useState } from 'react'; 
import styled from 'styled-components'; 


export default function GuestSelection(props) {
    // manage state for number of guests
    const [adults, setAdults] = useState(0); 
    const [kids, setKids] = useState(0); 

    // adjust number of people 
    const addAdult = () => {
        setAdults(prev => prev + 1); 
        props.updateGuestCount(adults + kids + 1); 
    }

    const removeAdult = () => {
        if (adults > 0) {
        setAdults(prev => prev - 1); 
        props.updateGuestCount(adults + kids - 1); 
        }
    }

    const addKid = () => {
        setKids(prev => prev + 1); 
        props.updateGuestCount(kids + adults + 1); 
    }

    const removeKid = () => {
        if (kids > 0) {
        setKids(prev => prev - 1); 
        props.updateGuestCount(kids + adults - 1); 
        }
    }

    return(
        <GuestBox>
            <p style={{margin:'0'}}>{props.guestCount} PEOPLE</p>
            <CategoryRow>
                <Category>
                    <div>Adults</div>
                    <p style={{color: 'grey', fontSize: '18px', margin: '0px'}}>Age 13 and above</p>
                </Category>
                <Numbers>
                    <QuantityBtn onClick={ removeAdult }>-</QuantityBtn>
                    <p>{adults}</p>
                    <QuantityBtn onClick={ addAdult }>+</QuantityBtn>
                </Numbers>
            </CategoryRow>
            <CategoryRow>
                <Category>
                    <div>Children</div>
                    <p style={{color: 'grey', fontSize: '18px', margin: '0px'}}>Ages 2 to 12</p>
                </Category>
                <Numbers>
                    <QuantityBtn onClick={ removeKid }>-</QuantityBtn>
                    <p>{kids}</p>
                    <QuantityBtn onClick={ addKid }>+</QuantityBtn>
                </Numbers>
            </CategoryRow>
        </GuestBox>
    ); 
}

// styled guest selection element
const GuestBox = styled.div`
    background-color: white;
    color: var(--corpDarkGrey1);  
    width: 350px; 
    position: absolute; 
    top: 120%; 
    left: 42%; 
    display: flex; 
    flex-direction: column; 
    align-items: flex-start; 
    border-radius: 1rem; 
    font-size: 21px; 
    padding: 20px; 
`; 

const CategoryRow = styled.div`
    width: 350px; 
    margin-top: 15px; 
    display: flex; 
    justify-content: space-between; 
    align-items: center; 
    font-size: 21px; 
`

const Category = styled.div`
    text-align: left; 
`

const Numbers = styled.div`
    display: flex; 
    align-items: center;
    gap: 30px; 
`

const QuantityBtn = styled.div`
    background-color: var(--corpLightGrey2); 
    color: white; 
    height: 30px; 
    width: 30px; 
    display: flex; 
    justify-content: center; 
    align-items: center; 
    border-radius: 50%; 
    font-size: 21px; 
`