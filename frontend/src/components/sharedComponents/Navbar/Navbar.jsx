import logoWhite from '../../../assets/logoWhite.png'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return(
        <>
            <div className="bannerBar">
                <p>Discover Nature. Stay In Comfort.</p>
            </div>
            <div className="navBar">
                <div className="taLogo">
                    <img src={ logoWhite } alt="logo"></img>
                </div>
                <div className="navLinks">
                    <div className="linkTo">GIFT CARDS</div>
                    <div className="linkTo">EN</div>
                    <div className="linkTo">MYR-RM</div>
                    <div className="bookStay">BOOK YOUR STAY</div>
                    <div className="loginIcon">Profile</div>
                    <div>Cart</div>

                    <div className="burgerMenu">
                        <FontAwesomeIcon icon={ faBars } />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar; 