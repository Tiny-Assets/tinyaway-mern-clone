import { useState, useEffect, useContext } from "react";
import { useSearchParams } from "react-router-dom";
import { TogglePlacesAndActivities, PlacesAndActivitiesIcon, FiltersGrid, LocationItem } from "../SearchResultsStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import SearchField from "../../search/searchbar/SearchField";
import { toggleState } from "../../../sharedutilities/toggleState";
// import { GuestNumberContext } from "../../contexts/GuestNumberContext";
// import { RoomNumberContext } from "../../contexts/RoomNumberContext";
import { LocationContext } from "../../../contexts/LocationContext";
import LocationsSubMenu from "../../search/searchbar/LocationsSubMenu";
import FiltersMenu from "./FiltersMenu";

interface SearchResultsFilterProps {
    query?: string; 
}

export default function SearchResultsFilterBar({ query }: SearchResultsFilterProps) {
    const [openLocations, setOpenLocations] = useState(false); 
    const [openDates, setOpenDates] = useState(false); 
    const [openGuests, setOpenGuests] = useState(false); 
    const [openFilters, setOpenFilters] = useState(false); 
    // const { guestCount } = useContext(GuestNumberContext); 
    // const { roomCount } = useContext(RoomNumberContext);
    const { selectedLocation } = useContext(LocationContext); 

    return(
        <>
            <FiltersGrid>
                <TogglePlacesAndActivities>
                    <PlacesAndActivitiesIcon><FontAwesomeIcon icon={ faHouse } /></PlacesAndActivitiesIcon>
                    <h3>PLACES TO STAY</h3>
                </TogglePlacesAndActivities>
                <SearchField fieldName='LOCATION' className='pill' toDo={ toggleState(setOpenLocations) } arrow /> 
                <SearchField fieldName='DATES' className='pill' toDo={ toggleState(setOpenDates) }arrow />
                <SearchField fieldName='GUESTS' className='pill' toDo={ toggleState(setOpenGuests) }arrow />
                <SearchField fieldName='FILTERS' className='pill' id='yellow' toDo={ toggleState(setOpenFilters) } />

                <LocationItem>
                { openLocations &&
                        <LocationsSubMenu />
                        } 
                </LocationItem> 
                
                {   openFilters && 
                    <FiltersMenu closeMenu={ toggleState(setOpenFilters) }/>
                }
            </FiltersGrid>
        </>
    )
}

