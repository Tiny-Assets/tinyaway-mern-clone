import styled from "styled-components"
import { useContext, useState } from "react"
import SearchField from "./SearchField"
import LocationsSubMenu from "./LocationsSubMenu";
import GuestSubMenu from "./GuestsSubMenu";
import RoomSubMenu from "./RoomSubMenu";

export default function SearchBar() {
    const [showLocations, setShowLocations] = useState(false); 
    const [showDates, setShowDates] = useState(false); 
    const [showGuests, setShowGuests] = useState(false); 
    const [showRooms, setShowRooms] = useState(false); 

    const toggleLocationMenu = () => {
        setShowLocations(!showLocations); 
        setShowDates(false); 
        setShowGuests(false); 
        setShowRooms(false); 
    }

    const toggleGuestsMenu = () => {
        setShowGuests(!showGuests); 
        setShowRooms(false); 
        setShowLocations(false); 
        setShowDates(false); 
    }

    const toggleRoomMenu = () => {
        setShowRooms(!showRooms); 
        setShowGuests(false); 
        setShowLocations(false); 
        setShowDates(false); 
    }
    
    return(
        <>      
            <SearchGrid>
                <SearchField className='start' fieldName='LOCATION' toDo={ toggleLocationMenu } arrow />
                <SearchField fieldName='DATE' arrow/>
                <SearchField fieldName='GUESTS' toDo={ toggleGuestsMenu } arrow/>
                <SearchField fieldName='ROOM' toDo={ toggleRoomMenu }arrow/>
                <SearchField className='end' fieldName='SEARCH' />
            </SearchGrid>
            <SubmenuGrid>
                { showLocations && 
                    <Sub1>
                        <LocationsSubMenu />
                    </Sub1>
                }
                { showGuests &&
                    <Sub2>
                        <GuestSubMenu />
                    </Sub2>
                }
                { showRooms &&
                    <Sub3>
                        <RoomSubMenu />
                    </Sub3>
                }
            </SubmenuGrid>
        </>
    )
}

const SearchGrid = styled.div`
    display: grid; 
    grid-template-columns: repeat(5, 225px); 
    justify-content: center; 
    align-items: start; 
    margin-top: 30px; 
`

const SubmenuGrid = styled.div`
    display: grid; 
    grid-template-columns: repeat(45, 25px); 
    grid-template-rows: repeat(10, 50px); 
    justify-content: center; 
    position: relative; 
    top: -30px;
    z-index: 0;  
`

const Sub1 = styled.div`
    display: grid; 
    grid-column-start: 1; 
    grid-column-end: 10; 
`

const Sub2 = styled.div`
    display: grid; 
    grid-column-start: 19; 
    grid-column-end: 36; 
    grid-row-start: 2;
    grid-row-end: 7; 
`

const Sub3 = styled.div`
    display: grid; 
    grid-column-start: 28; 
    grid-column-end: 45; 
    grid-row-start: 2;
    grid-row-end: 7; 
`