import { useContext } from "react";
import { LocationContext } from "../contexts/LocationContext";
import { GuestNumberContext } from "../contexts/GuestNumberContext";
import { RoomNumberContext } from "../contexts/RoomNumberContext";

export const useConstructQuery = () => {
    const { selectedLocation } = useContext(LocationContext); 
    const { roomCount } = useContext(RoomNumberContext); 
    const { guestCount } = useContext(GuestNumberContext); 

    const countryNumber = {
        AUSTRALIA: 21, 
        MALAYSIA: 5,
        NEW_ZEALAND: 615, 
        TAIWAN: 7, 
        EUROPE: 9
    }

    const queryStringParts = []; 
    
    if ( selectedLocation !== '') {
        if ( selectedLocation === 'NEW ZEALAND') {
            queryStringParts.push(`country=615`); 
        } else {
            queryStringParts.push(`country=${ countryNumber[selectedLocation] }`); 
        }
    }

    // if ( roomCount > 0 ) {
    //     queryStringParts.push(`bedrooms=${ roomCount }`); 
    // }

    if ( guestCount > 0 ) {
        queryStringParts.push(`accommodates=${ guestCount }`); 
    }

    const queryString = queryStringParts.length > 0 ?
        `?${queryStringParts.join('&')}`
        :
        ''    
    return queryString; 
}

// Original country numbers: 
// Australia - 21
// Malaysia - 5
// New Zealand - 615
// Taiwan - 7 
// Europe (In database: United Kingdom) - 9 