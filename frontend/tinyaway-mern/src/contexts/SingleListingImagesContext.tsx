import { createContext, useState } from "react";

interface SingleListingImageContextProps {
    imageArray: string[]; 
    setImageArray: React.Dispatch<React.SetStateAction<string[]>>;
} 

export const SingleListingImagesContext = createContext<SingleListingImageContextProps>({
    imageArray: [],
    setImageArray: () => {}
}); 

export const SingleListingImageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [imageArray, setImageArray] = useState<string[]>([]); 

    return(
        <SingleListingImagesContext.Provider value={{ imageArray, setImageArray }}>
            {children}
        </SingleListingImagesContext.Provider>
    )
}
