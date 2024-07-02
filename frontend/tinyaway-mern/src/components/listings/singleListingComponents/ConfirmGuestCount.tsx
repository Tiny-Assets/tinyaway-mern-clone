import styled from "styled-components"; 
import { useState } from "react";
import { toggleState } from "../../utilitycomponents/toggleState";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

export default function ConfirmGuestCount() {
    const [adjustGuests, setAdjustGuests] = useState(false); 
    
    return(
    <>
        <ConfirmGuestBar onClick={ toggleState(setAdjustGuests) }>
            <p>GUESTS</p>
            <FontAwesomeIcon icon={ faCaretDown } />
        </ConfirmGuestBar>
        { adjustGuests && 
            <p>BOO HOO</p>
        }
    </>
    )
}

const ConfirmGuestBar = styled.div`
    background-color: white; 
    color: var(--corpLightGrey2); 
    height: 60px; 
    width: 300px; 
    font-size: 21px; 
    display: flex; 
    justify-content: space-between; 
    align-items: center; 
    padding: 0px 20px;
    border-radius: 2rem;  
`