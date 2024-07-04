import { useState, useEffect, useContext } from "react";
import { useSearchParams } from "react-router-dom";
import { FilterBar, ToggleDisplayCards, ToggleIcon } from "./SearchResultsStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import SearchField from "../search/searchbar/SearchField";
import { toggleState } from "../../sharedutilities/toggleState";
import { GuestNumberContext } from "../../contexts/GuestNumberContext";
import { RoomNumberContext } from "../../contexts/RoomNumberContext";
import { LocationContext } from "../../contexts/LocationContext";
import LocationsSubMenu from "../search/searchbar/LocationsSubMenu";

interface SearchResultsFilterProps {
    query?: string; 
}

export default function SearchResultsFilterBar({ query }: SearchResultsFilterProps) {
    const [openLocations, setOpenLocations] = useState(false); 
    const [openDates, setOpenDates] = useState(false); 
    const [openGuests, setOpenGuests] = useState(false); 
    const { guestCount } = useContext(GuestNumberContext); 
    const { roomCount } = useContext(RoomNumberContext);
    const { selectedLocation } = useContext(LocationContext); 

    return(
        <>
            <FilterBar>
                <ToggleDisplayCards>
                    <ToggleIcon><FontAwesomeIcon icon={ faHouse } /></ToggleIcon>
                    <h3>PLACES TO STAY</h3>
                </ToggleDisplayCards>
                <SearchField fieldName='LOCATION' className='pill' toDo={ toggleState(setOpenLocations) } arrow /> 
                <SearchField fieldName='DATES' className='pill' toDo={ toggleState(setOpenDates) }arrow />
                <SearchField fieldName='GUESTS' className='pill' toDo={ toggleState(setOpenGuests) }arrow />
            </FilterBar>
            { openLocations &&
                    <LocationsSubMenu className='resultspage'/>
                    }  
        </>
    )
}

