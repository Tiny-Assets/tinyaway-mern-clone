// import assets and styles 
import styles from './styles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faX } from '@fortawesome/free-solid-svg-icons'; 

function BurgerExpanded({toggleBurger}) {

    return(
        <div className={ styles.menuOverlay }>
            <div>
                <FontAwesomeIcon icon={ faX } onClick={ toggleBurger } className={ styles.menuItem } id={ styles.closeBurger } /> 
            </div>
            <div className={ styles.menuItem } id={ styles.firstItem }>
                HOME
            </div>
            <div className={ styles.menuItem }>
                TINY HOUSE DESTINATION
            </div>
            <div className={ styles.menuItem } id={ styles.moreOptions }>
                TINY AWAY ESCAPE
                <div className={ styles.subMenu }>
                    <div>GRAMPIANS EDGE @ AUSTRALIA</div>
                    <div>LAZARUS ISLAND @ SINGAPORE</div>
                </div>
            </div>
            <div className={ styles.menuItem }>
                TINY STORIES 
            </div>
            <div className={ styles.menuItem }>
                ABOUT US
            </div>
            <div className={ styles.menuItem }>
                GIFT CARDS
            </div>
            <div className={ styles.menuItem }>
                BLOG
            </div>
            <div className={ styles.menuItem }>
                LOGIN
            </div>
            <div className={ styles.menuItem }>
                BOOK YOUR STAY
            </div>
            <div className={ styles.menuItem }>
                SOCIAL STUFF
            </div>
        </div>
    ); 
}

export default BurgerExpanded; 