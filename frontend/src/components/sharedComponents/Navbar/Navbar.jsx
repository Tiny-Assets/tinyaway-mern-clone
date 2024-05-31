// import assets & icons 
import logoWhite from '../../../assets/logoWhite.png'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faBars, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons'; 

const Navbar = () => {

    const click = () => {
        console.log('target clicked'); 
    }

    return(
        <>
            {/* yellow banner bar */}
            <div className="bannerBar" onClick={ click }>
                <p>Discover Nature. Stay In Comfort.</p>
                <FontAwesomeIcon icon={ faArrowRight }/>
            </div>

            {/* navigation bar */}
            <div className="navBar">

                {/* logo side */}
                <div className="taLogo">
                    <img src={ logoWhite } alt="logo"></img>
                </div>

                {/* links side */}
                <div className="navLinks">
                    <div className="link" onClick={ click }>
                        GIFT CARDS
                    </div>
                    <div className="link" onClick={ click }>
                        EN
                    </div>
                    <div className="link" onClick={ click }>
                        MYR-RM
                    </div>
                    <div className="bookStay" onClick={ click }>
                        BOOK YOUR STAY
                    </div>
                    <div className="loginIcon" onClick={ click }>
                        <FontAwesomeIcon icon={ faCircleUser } />
                    </div>
                    <div className="cartIcon" onClick={ click }>
                        <FontAwesomeIcon icon={faCartShopping}/>
                    </div>

                    {/* burger menu within links side */}
                    <div className="burgerMenu" onClick={ click }>
                        <FontAwesomeIcon icon={ faBars } />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar; 