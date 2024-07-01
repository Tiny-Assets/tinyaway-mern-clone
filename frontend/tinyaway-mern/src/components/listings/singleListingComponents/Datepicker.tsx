import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"; 

export default function DatePicker() {
    return(
            <PickerBox>
                <PickDate>ARRIVAL</PickDate>
                <FontAwesomeIcon icon={ faArrowRight } />
                <PickDate>DEPARTURE</PickDate>
            </PickerBox>
    )
}

const PickerBox = styled.div`
    background-color: white; 
    color: var(--corpLightGrey2);
    font-size: 21px; 
    height: 60px; 
    width: 300px; 
    display: flex;  
    align-items: center; 
    justify-content: space-around; 
    padding: 0px 20px; 
    border-radius: 2rem; 
`

const PickDate = styled.div`
    align-items: center; 
`