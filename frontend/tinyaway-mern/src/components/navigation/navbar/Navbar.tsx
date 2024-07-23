import { Link } from 'react-router-dom';
import { Navblock, Links, ChangeParams } from './NavbarBurgerStyles';
import { useState, useContext } from 'react';
import talogo from '../../../assets/talogo.png'; 
import PillButton from '../../sharedcomponents/genericpillbutton/PillButton';
import Burger from './Burger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
import { faBars, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { ShoppingCartContext } from '../../../contexts/ShoppingCartContext';

export default function Navbar() {
    const { shoppingCartBookings } = useContext(ShoppingCartContext); 
    const [seeBurger, setSeeBurger] = useState(false); 

    const toggleBurger = () => {
        setSeeBurger(!seeBurger); 
    }

    return(
        <>
            <Navblock>
                <Link to='/'>
                    <img src={ talogo } alt='tiny-away-logo' style={{ width: '187px', height: '200px', marginLeft:'45px' }}/>
                </Link>
                <Links>
                    <Link to='/'>HOME</Link>
                    <ChangeParams>EN</ChangeParams>
                    <ChangeParams>MYR(RM)</ChangeParams>
                    <PillButton className='whitePill' buttonName='BOOK YOUR STAY' path='/book-your-stay' />
                    <Link to='/login'>
                        <FontAwesomeIcon icon={ faCircleUser } style={{ backgroundColor:'var(--corpYellow', color: 'var(--corpDarkGrey2)', fontSize:'26px', padding: '10px', borderRadius:'2rem'}} />
                    </Link>
                    <Link to='/check-out'>
                        <FontAwesomeIcon icon={ faCartShopping } style={{ fontSize:'26px' }}/>
                    </Link>
                    <FontAwesomeIcon icon={ faBars } style={{ fontSize:'26px' }} onClick={ toggleBurger }/>
                </Links> 
            </Navblock>
            { seeBurger && 
                <Burger toggleBurger={ toggleBurger } />
            }
        </>    
    )
}