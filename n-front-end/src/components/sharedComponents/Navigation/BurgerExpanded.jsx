import { useState } from 'react';
import styled from 'styled-components'; 
import EscapeSubMenu from './EscapeSubMenu';
import AboutSubMenu from './AboutSubMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faX } from '@fortawesome/free-solid-svg-icons'; 

// functional component
export default function BurgerExpanded({toggleBurger}) {
    const [escapeSub, setEscapeSub] = useState(false); 
    const [aboutSub, setAboutSub] = useState(false); 

    const clickSubMenu = (e) => {
        if (e.target.innerText.includes('ESCAPE')){
            setEscapeSub(!escapeSub);
        } else {
            setAboutSub(!aboutSub); 
        } 
    }

    return(
        <OpenBurger>
            <MenuItem className='topItem'>
                <FontAwesomeIcon icon={ faX } onClick={ toggleBurger } /> 
            </MenuItem>
            <MenuItem>HOME</MenuItem>
            <MenuItem>TINY HOUSE DESTINATION</MenuItem>
            <MenuItem onClick={ clickSubMenu }>
                TINY AWAY ESCAPE
                { escapeSub && 
                    <SubMenu>
                        <EscapeSubMenu />
                    </SubMenu>
                }
            </MenuItem>
            <MenuItem>TINY STORIES</MenuItem>
            <MenuItem onClick={ clickSubMenu }>
                ABOUT US
                { aboutSub &&
                    <SubMenu>
                        <AboutSubMenu />
                    </SubMenu>
                }
            </MenuItem>
            <MenuItem>GIFT CARDS</MenuItem>
            <MenuItem>BLOG</MenuItem>
            <MenuItem>LOGIN</MenuItem>
            <MenuItem>
                BOOK YOUR STAY
            </MenuItem>
            <MenuItem>
                SOCIAL STUFF
            </MenuItem>
        </OpenBurger>
    ); 
}

// component styles
const OpenBurger = styled.div`
    background-color: white; 
    position: absolute; 
    top: 0px; 
    right: 0px; 
    z-index: 1000; 
    width: 470px; 
    height: 100vh; 
`
const MenuItem = styled.div`
    font-size: 21px;  
    color: var(--corpLightGrey2); 
    display: flex; 
    flex-direction: column; 
    justify-content: center;
    align-items: flex-end; 
    padding-bottom: 23px; 
    margin-right: 45px; 

    &.topItem {
        padding-top: 83px; 
        padding-bottom: 23px; 
    }
`
const SubMenu = styled.div`
    display: flex; 
    flex-direction: column; 
    justify-content: center; 
    align-items: flex-end; 
    gap: 20px; 
    margin-top: 23px; 
    padding-right: 45px; 
    border-right: 2px solid var(--corpLightGrey1); 
`
