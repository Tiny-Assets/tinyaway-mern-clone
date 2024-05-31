// import social media icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  
import { faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'; 

// render burger menu elements
const BurgerMenuExpanded = ({ showMenu }) => {
    return(
        <div className="burgerMenu">
            <div onClick={ showMenu }>X</div>
            <div>TINY HOUSE DESTINATIONS</div>
            <div>TINY AWAY ESCAPE</div>
                <div className="subMenu">
                    <div>GRAMPIANS EDGE @ AUSTRALIA</div>
                    <div>LAZARUS ISLAND @ SINGAPORE</div>
                </div>
            <div>TINY STORIES</div>
            <div>ABOUT US</div>
                <div className="subMenu">
                    <div>OUR STORY</div>
                    <div>BECOME A HOST</div>
                    <div>CONTACT US</div>
                    <div>FAQ & CANCELLATIONS POLICY</div>
                </div>
            <div>GIFT CARDS</div>
            <div>BLOG</div>
            <div>LOGIN</div>
            <div className="bookStayMenu">BOOK YOUR STAY</div>
            <div className="socialIcons">
                <FontAwesomeIcon className="burgerMenuIcon" icon={ faFacebookF }/>
                <FontAwesomeIcon className="burgerMenuIcon" icon={ faInstagram }/>
                <FontAwesomeIcon className="burgerMenuIcon" icon={ faYoutube }/>
            </div>
        </div>
    )
}

export default BurgerMenuExpanded;