import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

interface SearchFieldProps {
    className?: string; 
    fieldName: string; 
    toDo?: () => void; 
    arrow?: boolean; 
}
export default function SearchField({ className, fieldName, toDo, arrow }: SearchFieldProps) {
    return(
        <SingleField className={ className } onClick={ toDo }>
            <p>{ fieldName }</p>
            { arrow &&
                <FontAwesomeIcon icon={ faArrowRight } />
            }
        </SingleField>
    )
}

const SingleField = styled.div`
    background-color: white; 
    color: var(--corpDarkGrey1); 
    width: 135px; 
    font-size: 21px; 
    display: flex; 
    justify-content: space-between; 
    align-items: center; 
    border-left: 1px solid var(--corpLightGrey1); 
    padding: 15px 45px; 
    z-index: 1; 

    &.start{
        border-top-left-radius: 2rem; 
        border-bottom-left-radius: 2rem; 
        border: none; 
    }

    &.end{
        background-color: var(--corpYellow); 
        color: black; 
        justify-content: center; 
        border-top-right-radius: 2rem; 
        border-bottom-right-radius: 2rem; 
    }
`