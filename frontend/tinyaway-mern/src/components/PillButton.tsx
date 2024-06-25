import styled from "styled-components"
import { Link } from "react-router-dom";

interface ButtonProps {
    className?: string; 
    buttonName: string; 
    path?: string; 
    toDo?: () => void; 
    }

export default function PillButton({ className, buttonName, path, toDo }: ButtonProps) {
    return(
        <Link to={ path }>
            <Pill className={ className } onClick={ toDo }>
                { buttonName }
            </Pill>
        </Link>
    )
}

const Pill = styled.div`
    background-color: var(--corpYellow); 
    color: var(--corpDarkGrey2); 
    border-radius: 2rem; 
    padding: 10px 20px; 

    &:hover {
        background-color: var(--corpYellowHover); 
        color: black; 
    }

    &.whitePill {
        background-color: white; 
        color: var(--corpDarkGrey2); 

        &:hover {
            background-color: var(--corpYellow); 
            color: black; 
        }
    }
`