import { createContext, useState } from "react";

interface BookingDisplay {
    checkInDate: Date; 
    checkOutDate: Date; 
    listingId: number; 
}

interface ShoppingCartContextProps {
    shoppingCartBookings: BookingDisplay[]; 
    setShoppingCartBookings: React.Dispatch<React.SetStateAction<BookingDisplay[]>>; 
}

export const ShoppingCartContext = createContext<ShoppingCartContextProps>({
    shoppingCartBookings: [],
    setShoppingCartBookings: () => {}
}); 

export const ShoppingCartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [shoppingCartBookings, setShoppingCartBookings] = useState<BookingDisplay[]>([]); 

    return(
        <ShoppingCartContext.Provider value={{ shoppingCartBookings, setShoppingCartBookings }}>
            { children }
        </ShoppingCartContext.Provider>
    )
}