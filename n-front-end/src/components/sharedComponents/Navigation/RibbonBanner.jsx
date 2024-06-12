import styled from 'styled-components'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function RibbonBanner() {
    return(
        <RibbonStyle>
            <p id='ribbonfont'>Discover Nature. Stay In Comfort.</p>
            <FontAwesomeIcon icon={ faArrowRight } id='ribbonIcon' />
        </RibbonStyle>
    ); 
}

const RibbonStyle = styled.div`
    background-color: var(--corpYellow); 
    display: flex; 
    align-items: center; 
    justify-content: center; 
    column-gap: 10px; 
    font-size: 18px; 
    margin: 0px; 
`