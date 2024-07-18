import { OpenBurger, BurgerContent, CloseMenu, SubMenu } from "./NavbarBurgerStyles";
import { useState } from "react"
import { Link } from "react-router-dom";
import PillButton from "../../sharedcomponents/genericpillbutton/PillButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";


interface BurgerProps {
    toggleBurger: () => void; 
}
export default function Burger({toggleBurger}: BurgerProps) {
    const [openEscape, setOpenEscape] = useState(false); 
    const [openAbout, setOpenAbout] = useState(false); 

    const openEscapeMenu = () => {
        setOpenEscape(true); 
    }

    const closeEscapeMenu = () => {
        setOpenEscape(false); 
    }

    const openAboutMenu = () => {
        setOpenAbout(true); 
    }

    const closeAboutMenu = () => {
        setOpenAbout(false); 
    }

    return(
        <OpenBurger>
            <BurgerContent>
                <CloseMenu onClick={ toggleBurger }>
                    <FontAwesomeIcon icon={ faX } />
                </CloseMenu>
                <Link to='/' onClick={ toggleBurger }>HOME</Link>
                <Link to='/tiny-house-destinations' onClick={ toggleBurger }>TINY HOUSE DESTINATIONS</Link>
                <div onMouseEnter={ openEscapeMenu }>TINY AWAY ESCAPE</div>
                { openEscape && 
                    <SubMenu onMouseLeave={ closeEscapeMenu }>
                        <Link to='/tiny-away-escape-grampians' onClick={ toggleBurger }>GRAMPIANS EDGE @ AUSTRALIA</Link>
                        <Link to='/tiny-away-escape-lazarus' onClick={ toggleBurger }>LAZARUS ISLAND @ SINGAPORE</Link>
                    </SubMenu>
                }
                <Link to='/tiny-stories' onClick={ toggleBurger }>TINY STORIES</Link>
                <div onMouseEnter={ openAboutMenu }>ABOUT US</div>
                { openAbout &&     
                    <SubMenu onMouseLeave={ closeAboutMenu }>
                        <Link to='/our-story' onClick={ toggleBurger }>OUR STORY</Link>
                        <Link to='/become-a-host' onClick={ toggleBurger }>BECOME A HOST</Link>
                        <Link to='/contact-us' onClick={ toggleBurger }>CONTACT US</Link>
                        <Link to='/faq-n-policies' onClick={ toggleBurger }>FAQ & CANCELLATION POLICY</Link>
                    </SubMenu>
                }
                <Link to='/gift-cards' onClick={ toggleBurger }>GIFT CARDS</Link>
                <Link to='/blog' onClick={ toggleBurger }>BLOG</Link>
                <Link to='/login' onClick={ toggleBurger }>LOGIN</Link>
                <PillButton buttonName='BOOK YOUR STAY' path='/book-your-stay' toDo={ toggleBurger }/>
            </BurgerContent>
        </OpenBurger>
    )
}