import { useContext } from "react";
import { LocationContext } from "../contexts/LocationContext";
import { GuestNumberContext } from "../contexts/GuestNumberContext";
import { RoomNumberContext } from "../contexts/RoomNumberContext";

export const useConstructQuery = () => {
    const { selectedLocation } = useContext(LocationContext); 
    const { roomCount } = useContext(RoomNumberContext); 
    const { guestCount } = useContext(GuestNumberContext); 

    const queryStringParts = []; 
    
    if ( selectedLocation !== '') {
        queryStringParts.push(`country=${ selectedLocation }`); 
    }

    if ( roomCount > 0 ) {
        queryStringParts.push(`bedrooms=${ roomCount }`); 
    }

    if ( guestCount > 0 ) {
        queryStringParts.push(`accommodates=${ guestCount }`); 
    }

    const queryString = queryStringParts.length > 0 ?
        `?${queryStringParts.join('&')}`
        :
        ''
        
    return queryString; 
}