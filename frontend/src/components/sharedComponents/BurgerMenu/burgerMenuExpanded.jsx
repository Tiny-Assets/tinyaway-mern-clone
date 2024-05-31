const BurgerMenuExpanded = ({ showMenu }) => {
    return(
        <div className="burgerMenu">
            <div onClick={ showMenu }>close</div>
            <div>TINY HOUSE DESTINATIONS</div>
            <div>TINY AWAY ESCAPE</div>
                <div className="subMenu">GRAMPIANS EDGE @ AUSTRALIA</div>
                <div className="subMenu">LAZARUS ISLAND @ SINGAPORE</div>
            <div>TINY STORIES</div>
            <div>ABOUT US</div>
                <div className="subMenu">OUR STORY</div>
                <div className="subMenu">BECOME A HOST</div>
                <div className="subMenu">CONTACT US</div>
                <div className="subMenu">FAQ & CANCELLATIONS POLICY</div>
            <div>GIFT CARDS</div>
            <div>BLOG</div>
            <div>LOGIN</div>
            
        </div>
    )
}

export default BurgerMenuExpanded;