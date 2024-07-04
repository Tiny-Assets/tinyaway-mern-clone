import { SearchGrid, SubmenuGrid, Sub1, Sub2, Sub3 } from "./SearchBarStyles";
import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import SearchField from "./SearchField"
import LocationsSubMenu from "../searchbar/LocationsSubMenu";
import GuestSubMenu from "../searchbar/GuestsSubMenu";
import RoomSubMenu from "../searchbar/RoomSubMenu";
import { GuestNumberContext } from "../../../contexts/GuestNumberContext";
import { RoomNumberContext } from "../../../contexts/RoomNumberContext";
import { LocationContext } from "../../../contexts/LocationContext";
import { useConstructQuery } from "../../../sharedutilities/constructQuery";

export default function SearchBar() {
    const { selectedLocation } = useContext(LocationContext); 
    const { guestCount } = useContext(GuestNumberContext); 
    const { roomCount } = useContext(RoomNumberContext); 
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
    
    const queryString = useConstructQuery(); 

    return(
        <>      
            <SearchGrid>
                <SearchField className='start' fieldName={ selectedLocation || 'LOCATION' } toDo={ toggleLocationMenu } arrow />
                <SearchField fieldName='DATE' arrow/>
                <SearchField fieldName={ guestCount > 0 ? `${guestCount} GUESTS` : 'GUESTS' } toDo={ toggleGuestsMenu } arrow/>
                <SearchField fieldName={ roomCount > 0 ? `${roomCount} ROOMS` : 'ROOM' } toDo={ toggleRoomMenu }arrow/>
                <Link to={`/search-results${queryString}`}>
                    <SearchField className='end' fieldName='SEARCH' />
                </Link>
            </SearchGrid>
            <SubmenuGrid>
                { showLocations && 
                    <Sub1>
                        <LocationsSubMenu />
                    </Sub1>
                }
                { showGuests &&
                    <Sub2>
                        <GuestSubMenu toggleMenu={ toggleGuestsMenu }/>
                    </Sub2>
                }
                { showRooms &&
                    <Sub3>
                        <RoomSubMenu toggleMenu={ toggleRoomMenu } />
                    </Sub3>
                }
            </SubmenuGrid>
        </>
    )
}

