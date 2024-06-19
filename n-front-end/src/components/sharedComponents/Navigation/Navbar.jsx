import { useState, useEffect } from 'react';
import styled from 'styled-components'; 
import logoWhite from '../../../assets/logoWhite.png'; 
import NavLinks from './NavLinks';
import BurgerExpanded from './BurgerExpanded';

export default function Navbar({className}) {
    const [showBurger, setShowBurger] = useState(false);     
    
    // toggle burger open/close
    const toggleBurger = () => {
        setShowBurger(!showBurger); 
    } 

    // disable scroll&click when burger menu is open 
    useEffect(() => {
        const view = document.documentElement; 
        if (showBurger) {
            view.style.overflow = 'hidden';
        } else {
            view.style.overflow = 'auto'; 
        }
    },[showBurger]);

    // component to render
    return(
        <>
            <NavigationTop className={ className }>
                <img src={ logoWhite } alt='logo' id='taLogo' />
                <NavLinks toggleBurger={ toggleBurger }/> 
            </NavigationTop>
            { showBurger && 
                        < BurgerExpanded toggleBurger={ toggleBurger }/>
                }
        </>
    ); 
}

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

    &.homepg {
        background-color: transparent; 
        position: relative; 
    }
`;