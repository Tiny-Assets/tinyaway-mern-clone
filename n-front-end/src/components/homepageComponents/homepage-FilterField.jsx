import styled from 'styled-components'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

// eslint-disable-next-line react/prop-types
export default function Field({ name, className, onClick }) {
    return(
        <StyledField className={ className } onClick={ onClick }>
            <div>{name}</div>
            <FontAwesomeIcon icon={ faArrowRight } />
        </StyledField>
    ); 
}

const StyledField = styled.div`
    background-color: white; 
    color: var(--corpDarkGrey1); 
    border-right: 1px solid var(--corpLightGrey1); 
    height: 64px; 
    font-size: 21px; 
    position: relative; 
    display: flex; 
    align-items: center; 
    gap: 75px; 
    padding: 0px 40px; 

    &.start {
        border-top-left-radius: 2rem;
        border-bottom-left-radius: 2rem; 
    }
`;