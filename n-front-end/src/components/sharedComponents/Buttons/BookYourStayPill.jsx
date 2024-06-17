import styled from 'styled-components'; 
import { Link } from 'react-router-dom'; 

export default function BookYourStay({ className }) {
    return(
        <PillBackground className={ className }>
            <Link to="/">BOOK YOUR STAY</Link>
        </PillBackground>
    )
}

const PillBackground = styled.div`
    background-color: var(--corpYellow); 
    color: var(--corpDarkGrey1); 
    height: 51px;
    font-size: 21px; 
    align-content: center; 
    justify-content: center; 
    padding: 0px 30px; 
    border-radius: 2rem; 

    &:hover {
        background-color: var(--corpYellowHover); 
        color: var(--corpBlack); 
    }

    &.homepg {
        background-color: white; 

        &:hover {
            background-color: var(--corpYellow); 
        }
    }
`