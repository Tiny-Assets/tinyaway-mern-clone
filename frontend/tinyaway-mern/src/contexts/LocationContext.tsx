import { createContext, useState } from "react";

interface LocationContextType {
    selectedLocation: string; 
    setSelectedLocation: (location: string) => void;
}

export const LocationContext = createContext<LocationContextType | undefined>(undefined);

export const LocationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => { 
    const [selectedLocation, setSelectedLocation] = useState<string>(''); 

    return(
        <LocationContext.Provider value={{ selectedLocation, setSelectedLocation }}>
            {children}
        </LocationContext.Provider>
    )
}
