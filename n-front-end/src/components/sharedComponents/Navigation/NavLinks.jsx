import styled from 'styled-components'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faBars, faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons'; 

// declaring styled elements
const LinksSide = styled.div`
    display: flex; 
    column-gap: 21px; 
    font-size: 21px; 
    padding-right: 48px;
    align-items: center; 
`; 

// functional component
function NavLinks(props) {
    return(
        <>
            <LinksSide>
                <div>GIFT CARDS</div>
                <div>EN</div>
                <div>MYR(RM)</div>
                    
                <div><FontAwesomeIcon icon={ faUser } /></div>
                <div><FontAwesomeIcon icon={ faCartShopping } /></div>
                <div><FontAwesomeIcon icon={ faBars } onClick={ props.toggleBurger }/></div>
            </LinksSide>
        </>
    ); 
}

export default NavLinks; 