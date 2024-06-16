import { useState } from 'react';
import styled from 'styled-components'; 
import logoWhite from '../../../assets/logoWhite.png'; 
import NavLinks from './NavLinks';
import BurgerExpanded from './BurgerExpanded';

// functional stateful component
function Navbar() {
    // functional burger menu 
    const [showBurger, setShowBurger] = useState(false);     
    const toggleBurger = () => {
        setShowBurger(!showBurger); 
    } 

    // component to render
    return(
        <>
            <NavigationTop>
                <img src={ logoWhite } alt='logo' id='taLogo' />
                <NavLinks toggleBurger={ toggleBurger }/> 
            </NavigationTop>
            { showBurger && 
                        < BurgerExpanded toggleBurger={ toggleBurger }/>
                }
        </>
    ); 
}

export default Navbar; 

// declaring styled elements for navbar
const NavigationTop = styled.div`
    background-color: var(--corpBlack);
    color: white; 
    width: 100vw; 
    position: sticky; 
    top: 0px; 
    height: 120px; 
    display: flex; 
    align-items: center; 
    justify-content: space-between; 

    & > img {
        width: 187px; 
    }
`;