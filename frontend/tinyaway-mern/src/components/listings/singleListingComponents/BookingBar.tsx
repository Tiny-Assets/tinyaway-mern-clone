import styled from "styled-components"

export default function BookingBar() {
    return(
        <>
            <BookThisHouse>
                TESTING
            </BookThisHouse>
        </>
    )
}

const BookThisHouse = styled.div`
    background-color: var(--corpDarkGrey1); 
    color: white; 
    width: 100vw; 
    height: 100px;
    position: sticky; 
    bottom: 0px;  
    z-index: 2; 
`