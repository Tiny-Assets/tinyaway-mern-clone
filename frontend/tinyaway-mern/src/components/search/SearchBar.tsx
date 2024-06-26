import styled from "styled-components"
import { useState } from "react"
import SearchField from "./SearchField"
import LocationsSubMenu from "./LocationsSubMenu";

export default function SearchBar() {
    const [showLocations, setShowLocations] = useState(false); 
    const [showDates, setShowDates] = useState(false); 
    const [showGuests, setShowGuests] = useState(false); 
    const [showRooms, setShowRooms] = useState(false); 

    const toggleLocationMenu = () => {
        setShowLocations(!showLocations); 
    }
    
    return(
        <>      
            <SearchGrid>
                <SearchField className='start' fieldName='LOCATION' toDo={ toggleLocationMenu } arrow />
                <SearchField fieldName='DATE' arrow/>
                <SearchField fieldName='GUESTS' arrow/>
                <SearchField fieldName='ROOM' arrow/>
                <SearchField className='end' fieldName='SEARCH' />
            </SearchGrid>
            <SubmenuGrid>
                { showLocations && 
                    <Sub1>
                        <LocationsSubMenu/>
                    </Sub1>
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
    grid-template-rows: repeat(5, 50px); 
    justify-content: center; 
    position: relative; 
    top: -30px;
    z-index: 0;  
`

const Sub1 = styled.div`
    grid-column-start: 1; 
    grid-column-end: 10; 
`