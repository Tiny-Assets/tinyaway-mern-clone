import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import { GuestNumberContext } from "../../contexts/GuestNumberContext";

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

const Calculator = styled.div`
    // background-color: lightblue; 
    display: flex; 
    align-items: center; 
    color: black; 
    font-size: 21px; 
`

const Decrement = styled.div`
    background-color: var(--corpLightGrey2); 
    color: white; 
    height: 10px; 
    width: 10px;
    display: flex; 
    justify-content: center; 
    align-items: center;  
    margin-right: 30px;
    padding: 10px;  
    border-radius: 2rem; 
`

const Increment = styled.div`
    background-color: var(--corpDarkGrey2); 
    color: white; 
    height: 10px; 
    width: 10px;
    display: flex; 
    justify-content: center; 
    align-items: center;  
    margin-left: 30px;
    padding: 10px; 
    border-radius: 2rem;
`