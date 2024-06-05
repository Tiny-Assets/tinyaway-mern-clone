import { useState } from 'react';

// importing assets and styles
import styles from './styles.module.css'; 
import logoWhite from '../../../assets/logoWhite.png'; 

// importing icons for navbar 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faBars } from '@fortawesome/free-solid-svg-icons'; 
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

// importing linked components
import BurgerExpanded from '../burgerExpanded/BurgerExpanded';

function Navbar() {
    // declare state for burger menu 
    const [showBurger, setShowBurger] = useState(false); 

    // simple click testing 
    const click = (e) => {
        const linkName = e.target.innerText; 
        console.log(`Clicked ${linkName}`); 
    }

    // icon click testing (console log seems buggy)
    const clickIcon = (e) => {
        const iconId = e.target.id; 
        console.log(`Clicked on ${iconId}`); 
    }

    // open burger menu 
    const toggleBurger = () => {
        setShowBurger(!showBurger); 
    }

    return(
        <>
            <div className={ styles.navLayout }>
                <img src={ logoWhite } alt='logo'></img>

                <div className={ styles.navLinks }>
                    <div className={ styles.singleLink } onClick={ click }>GIFT CARDS</div>
                    <div className={ styles.singleLink } onClick={ click }>EN</div>
                    <div className={ styles.singleLink } onClick={ click }>MYR(RM)</div>
                    <div className={ styles.bookStay } onClick={ click }>BOOK YOUR STAY</div>
                    <FontAwesomeIcon icon={ faUser } className={ styles.icons } id="user" onClick={ clickIcon } />
                    <FontAwesomeIcon icon={ faCartShopping } className={ styles.icons } id="shoppingcart" onClick={ clickIcon } />
                    <FontAwesomeIcon icon={ faBars } className={ styles.icons } id="burger" onClick={ toggleBurger } />
                </div>
            </div>
            { showBurger && 
                        < BurgerExpanded toggleBurger={ toggleBurger }/>
                }
        </>
    ); 
}

export default Navbar; 