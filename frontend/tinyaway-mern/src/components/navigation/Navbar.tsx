import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from 'react';
import talogo from '../../assets/talogo.png'; 
import PillButton from '../PillButton';
import Burger from './Burger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
import { faBars, faCartShopping } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
    const [seeBurger, setSeeBurger] = useState(false); 

    const toggleBurger = () => {
        setSeeBurger(!seeBurger); 
    }

    return(
        <>
            <Navblock>
                <img src={ talogo } alt='tiny-away-logo' style={{ width: '187px', height: '200px' }}/>
                <Links>
                    <Link to='/'>HOME</Link>
                    <ChangeParams>EN</ChangeParams>
                    <ChangeParams>MYR(RM)</ChangeParams>
                    <PillButton className='whitePill' buttonName='BOOK YOUR STAY' path='/book-your-stay' />
                    <Link to='/login'>
                        <FontAwesomeIcon icon={ faCircleUser } style={{ backgroundColor:'var(--corpYellow', color: 'var(--corpDarkGrey2)', fontSize:'26px', padding: '10px', borderRadius:'2rem'}} />
                    </Link>
                    <FontAwesomeIcon icon={ faCartShopping } style={{ fontSize:'26px' }}/>
                    <FontAwesomeIcon icon={ faBars } style={{ fontSize:'26px' }} onClick={ toggleBurger }/>
                </Links> 
            </Navblock>
            { seeBurger && 
                <Burger toggleBurger={ toggleBurger } />
            }
        </>    
    )
}

const Navblock = styled.div`
    background-color: black; 
    display: flex; 
    height: 120px; 
    align-items: center; 
    justify-content: space-between; 
    padding: 0px 45px; 
`

const Links = styled.div`
    color: white; 
    display: flex; 
    gap: 30px; 
    align-items: center; 
    font-size: 21px; 
`

const ChangeParams = styled.div`
    background-color: black; 
    color: white; 
`