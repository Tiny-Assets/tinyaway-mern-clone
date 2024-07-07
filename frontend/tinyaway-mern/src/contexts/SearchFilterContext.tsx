import { useState, createContext } from "react";

interface SearchFilterContextProps {
    accomType: string; 
    escapeType: string; 
    accessType: string; 
    petType: boolean; 
    setAccomType: React.Dispatch<React.SetStateAction<string>>;
    setEscapeType: React.Dispatch<React.SetStateAction<string>>;
    setAccessType: React.Dispatch<React.SetStateAction<string>>;
    setPetType: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SearchFilterContext = createContext< SearchFilterContextProps >({
    accomType: '',
    escapeType:'',
    accessType:'',
    petType: false,
    setAccomType: () => {},
    setEscapeType: () => {},
    setAccessType: () => {},
    setPetType: () => {}
}); 

export const SearchFilterContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [accomType, setAccomType] = useState<string>(''); 
    const [escapeType, setEscapeType] = useState<string>(''); 
    const [accessType, setAccessType] = useState<string>(''); 
    const [petType, setPetType] = useState(false); 

    return(
        <SearchFilterContext.Provider value={{ accomType, setAccomType, escapeType, setEscapeType, accessType, setAccessType, petType, setPetType }}>
            {children}
        </SearchFilterContext.Provider>
    )
}
