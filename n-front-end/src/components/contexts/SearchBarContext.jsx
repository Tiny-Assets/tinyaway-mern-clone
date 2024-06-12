import { createContext, useState } from "react";

// this component holds the contexts for all fields in the search bar on the home page 

// set up context for guest number field for search bar 
export const GuestContext = createContext(); 
export const GuestProvider = ({ children }) => {
    const [guestCount, setGuestCount] = useState(0);
    const [adults, setAdults] = useState(0);
    const [kids, setKids] = useState(0);

    return (
        <GuestContext.Provider value={{ guestCount, setGuestCount, adults, setAdults, kids, setKids }}>
            {children}
        </GuestContext.Provider>
    );
};

//set up context for room type / number field for search bar 
export const RoomFieldContext = createContext(); 
export const RoomFieldProvider = ({ children }) => {
    const [roomCount, setRoomCount] = useState(0);
    const [familyRooms, setFamilyRooms] = useState(0);
    const [groupRooms, setGroupRooms] = useState(0);

    return (
        <RoomFieldContext.Provider value={{ roomCount, setRoomCount, familyRooms, setFamilyRooms, groupRooms, setGroupRooms }}>
            {children}
        </RoomFieldContext.Provider>
    );
};