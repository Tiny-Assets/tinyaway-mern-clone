import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

export default function SearchBar() {
    return(
        <Bar>
            <SearchField className='start'>
                <p>LOCATION</p>
                <FontAwesomeIcon icon={ faArrowRight } />
            </SearchField>
            <SearchField>
                <p>DATE</p>
                <FontAwesomeIcon icon={ faArrowRight } />
            </SearchField>
            <SearchField>
                <p>GUESTS</p>
                <FontAwesomeIcon icon={ faArrowRight } />
            </SearchField>
            <SearchField>
                <p>ROOMS</p>
                <FontAwesomeIcon icon={ faArrowRight } />
            </SearchField>
            <SearchField className='end'>
                <p>SEARCH</p>
            </SearchField>
        </Bar>
    )
}

const Bar = styled.div`
    display: flex; 
    justify-content: center; 
    margin-top: 50px; 
`
const SearchField = styled.div`
    background-color: white; 
    color: var(--corpDarkGrey1); 
    width: 150px; 
    font-size: 21px; 
    display: flex; 
    justify-content: space-between; 
    align-items: center; 
    border-right: 1px solid var(--corpLightGrey2); 
    padding: 18px 52px; 

    &.start{
        border-top-left-radius: 2rem; 
        border-bottom-left-radius: 2rem; 
    }

    &.end{
        background-color: var(--corpYellow); 
        color: black; 
        justify-content: center; 
        border-top-right-radius: 2rem; 
        border-bottom-right-radius: 2rem; 
    }
`