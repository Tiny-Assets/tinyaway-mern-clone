import { createContext, useState } from "react";
  
interface GuestContextType {
    guestCount: number;
    setGuestCount: (count: number) => void;
    adultCount: number;
    setAdultCount: (count: number) => void;
    kidsCount: number;
    setKidsCount: (count: number) => void;
}

export const GuestNumberContext = createContext<GuestContextType | undefined>(undefined); 

export const GuestNumberProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [guestCount, setGuestCount] = useState(0); 
    const [adultCount, setAdultCount] = useState(0); 
    const [kidsCount, setKidsCount] = useState(0); 

    return(
        <GuestNumberContext.Provider value={{ guestCount, setGuestCount, adultCount, setAdultCount, kidsCount, setKidsCount }}>
            {children}
        </GuestNumberContext.Provider>
    )
}
