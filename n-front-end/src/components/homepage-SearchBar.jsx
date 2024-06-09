import styled from 'styled-components'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

// functional component
export default function SearchBar() {

    return(
        <FilterBar>
                <Field className='start'>
                    <p>LOCATION</p>
                    <FontAwesomeIcon icon={ faArrowRight } />
                </Field>
                <Field>
                    <p>DATE</p>
                    <FontAwesomeIcon icon={ faArrowRight } />
                </Field>
                <Field>
                    <p>GUESTS</p>
                    <FontAwesomeIcon icon={ faArrowRight } />
                </Field>
                <Field>
                    <p>ROOM</p>
                    <FontAwesomeIcon icon={ faArrowRight } />
                </Field>
                <Field className='end'>
                    SEARCH
                </Field>
        </FilterBar>
    )
}

// search filter styles
const FilterBar = styled.div`
    display: flex; 
    margin-top: 50px; 
`

const Field = styled.div`
    background-color: white; 
    color: var(--corpDarkGrey1); 
    height: 64px; 
    font-size: 21px; 
    display: flex;
    align-items: center;  
    gap: 75px; 
    padding: 0 40px;
    border-right: 1px solid var(--corpLightGrey1);
    
    &.start {
        border-top-left-radius: 2rem; 
        border-bottom-left-radius: 2rem; 
    }

    &.end {
        width: 125px; 
        background-color: var(--corpYellow); 
        color: var(--corpBlack); 
        justify-content: center; 
        border-top-right-radius: 2rem; 
        border-bottom-right-radius: 2rem; 
    }
`