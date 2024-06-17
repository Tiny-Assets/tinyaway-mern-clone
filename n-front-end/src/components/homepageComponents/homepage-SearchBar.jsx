import { Link, useSearchParams } from 'react-router-dom';
import { useState, useContext } from 'react';
import styled from 'styled-components'; 
import { GuestContext, RoomFieldContext } from '../contexts/SearchBarContext';
import LocationList from './homepage-LocationList'; 
import GuestSelection from './homepage-GuestSelection';
import RoomSelection from './homepage-RoomSelection';
import Field from './homepage-FilterField';

// functional component
export default function SearchBar() {
    // URL state management 
    const { roomCount, familyRooms, groupRooms } = useContext(RoomFieldContext);
    const { guestCount, adults, kids } = useContext(GuestContext); 
    const [searchParams, setSearchParams] = useSearchParams(); 

    const createQueryString = (roomCount, familyRooms, groupRooms, guestCount, adults, kids) => {
        let queryString = '?';
            if (roomCount > 0) queryString += `roomCount=${roomCount}&`;
            if (familyRooms > 0) queryString += `familyRooms=${familyRooms}&`;
            if (groupRooms > 0) queryString += `groupRooms=${groupRooms}&`;
            if (guestCount > 0) queryString += `guestCount=${guestCount}&`;
            if (adults > 0) queryString += `adults=${adults}&`;
            if (kids > 0) queryString += `kids=${kids}&`;
            return queryString.slice(0, -1);
    };

    const clickSearch = () => {
        const queryString = createQueryString(roomCount, familyRooms, groupRooms, guestCount, adults, kids);
        setSearchParams(queryString);
        for (let [key, value] of searchParams.entries()) {
            console.log(`${key}: ${value}`);
        console.log(searchParams); 
    }}

    // manage state for searchbar sub-fields
    const [showLocations, setShowLocations] = useState(false); 
    const [showGuestCount, setShowGuestCount] = useState(false); 
    const [showRoomCount, setShowRoomCount] = useState(false); 

    const openLocationMenu = () => {
        setShowLocations(!showLocations); 
        setShowGuestCount(false); 
        setShowRoomCount(false); 
    }
    
    const openGuestMenu = () => {
        setShowGuestCount(!showGuestCount); 
        setShowLocations(false); 
        setShowRoomCount(false); 
    }

    const openRoomMenu = () => {
        setShowRoomCount(!showRoomCount); 
        setShowLocations(false); 
        setShowGuestCount(false); 
    }

    // render view
    return(
        <FilterBar>
            <FieldWithSubmenu>
                <Field className='start' name='LOCATION' onClick={ openLocationMenu } />
                    { showLocations && 
                        <LocationList /> 
                    }
            </FieldWithSubmenu>
            <Field name='DATE' />
                <FieldWithSubWindow>
                <Field name='GUESTS' onClick={ openGuestMenu } />
                    { showGuestCount &&
                        <GuestSelection />
                    }
                </FieldWithSubWindow>
                <FieldWithSubWindow>
                    <Field name='ROOM' onClick={ openRoomMenu } />
                        { showRoomCount &&
                            < RoomSelection />
                        }
                </FieldWithSubWindow>
                <SearchFunction>
                    <Link to='showListings'>SEARCH</Link>
                </SearchFunction>
        </FilterBar>
    );
}

// search filter styles
const FilterBar = styled.div`
    display: flex; 
    align-items: start; 
    margin-top: 50px; 
    z-index: 20; 
`;

const FieldWithSubmenu = styled.div`
    background-color: white; 
    display: flex; 
    flex-direction: column; 
    border-radius: 2rem; 
`;

const FieldWithSubWindow = styled.div`
    display: flex; 
    flex-direction: column; 
    border-radius: 2rem; 
`;

const SearchFunction = styled.div`
    background-color: var(--corpYellow);
    color: var(--corpBlack); 
    font-size: 21px; 
    height: 64px; 
    padding: 0px 70px; 
    border-top-right-radius: 2rem; 
    border-bottom-right-radius: 2rem;  
    align-content: center; 
`;