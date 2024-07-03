import { Calculator, Increment, Decrement } from "./CalculatorStyles";
import { useEffect, useContext } from "react";
import { GuestNumberContext } from "../../../../contexts/GuestNumberContext";

interface GuestCalculatorProps {
    subField: "adults" | "kids"; 
}

export default function GuestCalculator({ subField }: GuestCalculatorProps) {
    const { guestCount, setGuestCount, adultCount, setAdultCount, kidsCount, setKidsCount } = useContext(GuestNumberContext); 

    useEffect(() => {
      setGuestCount(adultCount + kidsCount); 
    }, [adultCount, kidsCount]); 

    const RemoveItem = () => {
        if (subField == "adults" && adultCount > 0) {
            setAdultCount(adultCount - 1); 
        } else {
           if (subField == "kids" && kidsCount > 0) {
                setKidsCount(kidsCount - 1); 
            }
        }
    }
    

    const AddItem = () => {
        if (subField === "kids") {
            setKidsCount(kidsCount + 1)
        } else {
           setAdultCount(adultCount + 1); 
        }
    }


    return(
        <Calculator>
            <Decrement onClick={ RemoveItem }>-</Decrement>
            <p>{ subField === "adults" ? adultCount : kidsCount }</p>
            <Increment onClick={ AddItem }>+</Increment>
        </Calculator>
    )
}