import styled from "styled-components"
import { useContext, useState, useEffect } from "react"
import { RoomNumberContext, RoomNumberProvider } from "../../contexts/RoomNumberContext";
import RoomCalculator from "./RoomCalculator";

export default function RoomSubMenu() {
    const { roomCount, famRoomCount, grpRoomCount } = useContext(RoomNumberContext); 

    return(
        <>
            <RoomBox>
                <Section>
                    <p>{ roomCount } ROOMS</p>
                </Section>
                <Section>
                    <div>
                        <p>Room</p>
                        <Subtitle>Family Travelers</Subtitle>
                    </div>
                    <div>
                        <RoomCalculator subField="family" />
                    </div>
                </Section>
                <Section>
                    <div>
                        <p>Room</p>
                        <Subtitle>Group Travelers</Subtitle>
                    </div>
                    <div>
                        <RoomCalculator subField="group"/>
                    </div>
                </Section>
                <p className='close'>CLOSE</p>
            </RoomBox>
        </>
    )
}

const RoomBox = styled.div`
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
    // border: 1px solid red; 
`

const Subtitle = styled.div`
    color: var(--corpLightGrey2); 
    font-size: 18px; 
`