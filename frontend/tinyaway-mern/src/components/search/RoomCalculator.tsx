import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import { RoomNumberContext } from "../../contexts/RoomNumberContext";

interface FieldCalculatorProps {
    subField: string; 
}

export default function RoomCalculator({ subField }: FieldCalculatorProps) {
    const { roomCount, setRoomCount, famRoomCount, setFamRoomCount, grpRoomCount, setGrpRoomCount } = useContext(RoomNumberContext); 

    useEffect(() => {
        setRoomCount(famRoomCount + grpRoomCount); 
    }, [famRoomCount, grpRoomCount]); 

    const RemoveItem = () => {
        if (subField == "family" && famRoomCount > 0) {
            setFamRoomCount(famRoomCount - 1); 
        } else {
            if (subField == "group" && grpRoomCount > 0) {
                setGrpRoomCount(grpRoomCount - 1); 
            }
        }
        setRoomCount(famRoomCount + grpRoomCount); 
    }

    const AddItem = () => {
        if (subField == "family") {
            setFamRoomCount(famRoomCount + 1); 
        } else {
            setGrpRoomCount(grpRoomCount + 1); 
        }
        setRoomCount(famRoomCount + grpRoomCount); 
    }

    return(
        <Calculator>
            <Decrement onClick={ RemoveItem }>-</Decrement>
            <p>
                { subField === "family" ? famRoomCount : grpRoomCount }
            </p>
            <Increment onClick={ AddItem }>+</Increment>
        </Calculator>
    )
}

const Calculator = styled.div`
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