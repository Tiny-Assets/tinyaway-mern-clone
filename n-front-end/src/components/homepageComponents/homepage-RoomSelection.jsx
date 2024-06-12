import { useContext, useEffect } from 'react'; 
import styled from 'styled-components'; 
import { RoomFieldContext } from '../contexts/SearchBarContext';

export default function RoomSelection() {
    // manage state for number of guests
    const { roomCount, setRoomCount, familyRooms, setFamilyRooms, groupRooms, setGroupRooms } = useContext(RoomFieldContext);

    // adjust number of people 
    const addFamRoom = () => {
        setFamilyRooms(prev => prev + 1); 
    }

    const removeFamRoom = () => {
        if (familyRooms > 0) {
        setFamilyRooms(prev => prev - 1); 
        }
    }

    const addGrpRoom = () => {
        setGroupRooms(prev => prev + 1); 
    }

    const removeGrpRoom = () => {
        if (groupRooms > 0) {
        setGroupRooms(prev => prev - 1); 
        }
    }

    const updateRoomCount = () => {
        var total = familyRooms + groupRooms;
        setRoomCount(total);      
    }

    useEffect(() => {
        updateRoomCount();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [familyRooms, groupRooms]);

    useEffect(() => {
        console.log(`${roomCount} rooms selected`); }
    ,[roomCount]);

    return(
        <GuestBox>
            <OneSection>
                <p style={{margin:'0'}}>{ roomCount } ROOMS</p>
            </OneSection>
            <OneSection>
                <Category>
                    <div>Room</div>
                    <p style={{color: 'grey', fontSize: '18px', margin: '0px'}}>For Family Travellers</p>
                </Category>
                <Numbers>
                    <QuantityBtn className='decrement' onClick={ removeFamRoom }>-</QuantityBtn>
                    <p>{familyRooms}</p>
                    <QuantityBtn onClick={ addFamRoom }>+</QuantityBtn>
                </Numbers>
            </OneSection>
            <OneSection>
                <Category>
                    <div>Room</div>
                    <p style={{color: 'grey', fontSize: '18px', margin: '0px'}}>For Group Travellers</p>
                </Category>
                <Numbers>
                    <QuantityBtn className='decrement' onClick={ removeGrpRoom }>-</QuantityBtn>
                    <p>{groupRooms}</p>
                    <QuantityBtn onClick={ addGrpRoom }>+</QuantityBtn>
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