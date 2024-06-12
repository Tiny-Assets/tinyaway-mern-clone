import { useContext, useEffect } from 'react'; 
import styled from 'styled-components'; 
import { GuestContext } from '../contexts/SearchBarContext';

export default function GuestSelection() {
    // manage state for number of guests
    const { guestCount, setGuestCount, adults, setAdults, kids, setKids } = useContext(GuestContext);

    // adjust number of people 
    const addAdult = () => {
        setAdults(prev => prev + 1); 
    }

    const removeAdult = () => {
        if (adults > 0) {
        setAdults(prev => prev - 1); 
        }
    }

    const addKid = () => {
        setKids(prev => prev + 1); 
    }

    const removeKid = () => {
        if (kids > 0) {
        setKids(prev => prev - 1); 
        }
    }

    const updateGuestCount = () => {
        var total = adults + kids;
        setGuestCount(total);      
    }

    useEffect(() => {
        updateGuestCount();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [adults, kids]);

    useEffect(() => {
        console.log(`${guestCount} guests selected`); }
    ,[guestCount]);

    return(
        <GuestBox>
            <OneSection>
                <p style={{margin:'0'}}>{ guestCount } PEOPLE</p>
            </OneSection>
            <OneSection>
                <Category>
                    <div>Adults</div>
                    <p style={{color: 'grey', fontSize: '18px', margin: '0px'}}>Age 13 and above</p>
                </Category>
                <Numbers>
                    <QuantityBtn className='decrement' onClick={ removeAdult }>-</QuantityBtn>
                    <p>{adults}</p>
                    <QuantityBtn onClick={ addAdult }>+</QuantityBtn>
                </Numbers>
            </OneSection>
            <OneSection>
                <Category>
                    <div>Children</div>
                    <p style={{color: 'grey', fontSize: '18px', margin: '0px'}}>Ages 2 to 12</p>
                </Category>
                <Numbers>
                    <QuantityBtn className='decrement' onClick={ removeKid }>-</QuantityBtn>
                    <p>{kids}</p>
                    <QuantityBtn onClick={ addKid }>+</QuantityBtn>
                </Numbers>
            </OneSection>
        </GuestBox>
    ); 
}

// styled guest selection element
const GuestBox = styled.div`
    background-color: white;
    color: var(--corpDarkGrey1);  
    display: flex; 
    flex-direction: column; 
    align-items: flex-start; 
    border-radius: 1rem; 
    font-size: 21px; 
    padding: 20px;
    margin-top: 10px;  
`; 

const OneSection = styled.div`
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
    background-color: var(--corpDarkGrey2); 
    color: white; 
    height: 30px; 
    width: 30px; 
    display: flex; 
    justify-content: center; 
    align-items: center; 
    border-radius: 50%; 
    font-size: 21px; 

    &.decrement {
        background-color: var(--corpLightGrey2); 
    }
`