import { Calculator, Increment, Decrement } from "./CalculatorStyles";
import { useEffect, useContext } from "react";
import { RoomNumberContext } from "../../../../contexts/RoomNumberContext";

interface FieldCalculatorProps {
    subField: string; 
}

export default function RoomCalculator({ subField }: FieldCalculatorProps) {
    const { roomCount, setRoomCount, famRoomCount, setFamRoomCount, grpRoomCount, setGrpRoomCount } = useContext(RoomNumberContext); 

    useEffect(() => {
        setRoomCount(famRoomCount + grpRoomCount); 
    }, [famRoomCount, grpRoomCount, setRoomCount]); 

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
