import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import LocationList from './homepage-LocationList';
import GuestSelection from './homepage-GuestSelection';

// functional component
export default function SearchBar() {
    // manage state for field sub-menus
    // const [showDates, setShowDates] = useState(false); 
    // const [showRooms, setShowRooms] = useState(false); 
    const filterBarRef = useRef(null); 

    // manage location field
    const [showLocations, setShowLocations] = useState(false); 
    const showLocationsRef = useRef(null); 
    const seeLocations = () => {
        setShowLocations(!showLocations); 
    }
    const [selectedLocation, setSelectedLocation] = useState(''); 
    const selectCountry = (e) => {
        setSelectedLocation(e); 
    }

    useEffect(() => {
        if (filterBarRef.current && showLocationsRef.current) {
            const rect = filterBarRef.current.getBoundingClientRect();
            const newPosition = {
                top: rect.bottom,
                left: rect.left,
            };
            showLocationsRef.current.style.position = 'absolute';
            showLocationsRef.current.style.top = `${newPosition.top}px`;
            showLocationsRef.current.style.left = `${newPosition.left}px`;
        }
    }, [showLocations]);

    // manage guests field
    const [showGuests, setShowGuests] = useState(false); 
    const showGuestsRef = useRef(null); 
    const [guestCount, setGuestCount] = useState(null); 

    const seeGuestNumber = () => {
        setShowGuests(!showGuests); 
    }

    function updateGuestCount(count) {
        setGuestCount(count); 
        console.log(guestCount); 
    }

    useEffect(() => {
        if (filterBarRef.current && showGuestsRef.current) {
            const rect = filterBarRef.current.getBoundingClientRect();
            const newPosition = {
                top: rect.bottom,
                left: rect.left,
            };
            showGuestsRef.current.style.position = 'absolute';
            showGuestsRef.current.style.top = `${newPosition.top}px`;
            showGuestsRef.current.style.left = `${newPosition.left}px`;
        }
    }, [showGuests]);

    // render view
    return(
        <FilterBar ref={ filterBarRef }>
                <Field className='start' onClick={ seeLocations }>
                    { selectedLocation ||
                        <>
                            LOCATION
                            <FontAwesomeIcon icon={ faArrowRight } /> 
                        </> }
                    { showLocations &&
                        <LocationList ref={ showLocationsRef } selectCountry={ selectCountry }/> }
                </Field>
                <Field>
                    DATE
                    <FontAwesomeIcon icon={ faArrowRight } />
                </Field>
                <Field onClick={ seeGuestNumber }>
                    GUESTS
                    <FontAwesomeIcon icon={ faArrowRight } /> 
                </Field>
                { showGuests && 
                        <GuestSelection ref={ showGuestsRef } updateGuestCount={ updateGuestCount } guestCount={ guestCount }/> }
                <Field>
                    ROOM
                    <FontAwesomeIcon icon={ faArrowRight } />
                </Field>
                <Field className='end'>
                    SEARCH
                </Field>
        </FilterBar>
    );
}

// search filter styles
const FilterBar = styled.div`
    position: relative; 
    display: flex; 
    flex-wrap: wrap; 
    align-items: start; 
    margin-top: 50px; 
    z-index: 20; 
`
const Field = styled.div`
    background-color: white; 
    color: var(--corpDarkGrey1); 
    height: 64px; 
    font-size: 21px;  
    position: relative;  
    display: flex;
    align-items: center;  
    gap: 75px; 
    padding: 0 40px;
    border-right: 1px solid var(--corpLightGrey1);
    z-index: 10; 

    &.start {
        border-top-left-radius: 2rem; 
        border-bottom-left-radius: 2rem; 
    }

    &.end {
        width: 125px; 
        background-color: var(--corpYellow); 
        color: var(--corpBlack); 
        justify-content: center; 
        border-top-right-radius: 2rem; 
        border-bottom-right-radius: 2rem; 
    }
`