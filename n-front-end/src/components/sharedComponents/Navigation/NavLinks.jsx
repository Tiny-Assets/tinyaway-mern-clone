import styled from 'styled-components'; 
import BookYourStay from '../Buttons/BookYourStayPill';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faBars, faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons'; 

export default function NavLinks(props) {
    return(
        <>
            <LinksSide>
                <div>GIFT CARDS</div>
                <div>EN</div>
                <div>MYR(RM)</div>
                <BookYourStay className='homepg'/>
                <div><FontAwesomeIcon icon={ faUser } /></div>
                <div><FontAwesomeIcon icon={ faCartShopping } /></div>
                <div><FontAwesomeIcon icon={ faBars } onClick={ props.toggleBurger }/></div>
            </LinksSide>
        </>
    ); 
}

// declaring styled elements
const LinksSide = styled.div`
    display: flex; 
    column-gap: 21px; 
    font-size: 21px; 
    padding-right: 48px;
    align-items: center; 
`; 