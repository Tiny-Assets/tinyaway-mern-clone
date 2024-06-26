import styled from "styled-components"
import { useContext, useState, useEffect } from "react"
import { GuestNumberContext, GuestNumberProvider } from "../../contexts/GuestNumberContext";
import GuestCalculator from "./GuestCalculator";

export default function GuestSubMenu() {
    const { guestCount, setGuestCount, adultCount, setAdultCount, kidsCount, setKidsCount } = useContext(GuestNumberContext); 
    
    return(
        <>
            <GuestsBox>
                <Section>
                    <p>{ guestCount } PEOPLE</p>
                </Section>
                <Section>
                    <div>
                        <p>Adults</p>
                        <Subtitle>Age 13 and above</Subtitle>
                    </div>
                    <div>
                        <GuestCalculator subField="adults" />
                    </div>
                </Section>
                <Section>
                    <div>
                        <p>Children</p>
                        <Subtitle>Between 2 & 12 years old</Subtitle>
                    </div>
                    <div>
                        <GuestCalculator subField="kids"/>
                    </div>
                </Section>
                <p className='close'>CLOSE</p>
            </GuestsBox>
        </>
    )
}

const GuestsBox = styled.div`
    background-color: white;
    color: var(--corpDarkGrey2); 
    font-size: 21px; 
    border-radius: 1rem;
    
    .close {
        color: var(--corpLightGrey2); 
        text-align: end; 
        padding: 15px 20px; 
    }
`

const Section = styled.div`
    display: flex; 
    justify-content: space-between; 
    align-items: center; 
    padding: 10px 20px; 
`

const Subtitle = styled.div`
    color: var(--corpLightGrey2); 
    font-size: 18px; 
`