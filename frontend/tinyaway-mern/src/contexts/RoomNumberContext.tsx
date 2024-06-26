import { createContext, useState } from "react";

interface RoomContextType {
    roomCount: number;
    setRoomCount: (count: number) => void;
    famRoomCount: number;
    setFamRoomCount: (count: number) => void;
    grpRoomCount: number;
    setGrpRoomCount: (count: number) => void;
}

export const RoomNumberContext = createContext<RoomContextType | undefined>(undefined);

export const RoomNumberProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [roomCount, setRoomCount] = useState(0); 
    const [famRoomCount, setFamRoomCount] = useState(0); 
    const [grpRoomCount, setGrpRoomCount] = useState(0); 

    return(
        <RoomNumberContext.Provider value={{ roomCount, setRoomCount, famRoomCount, setFamRoomCount, grpRoomCount, setGrpRoomCount }}>
            {children}
        </RoomNumberContext.Provider>
    )
}
