'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import shared from './sharedStyles.module.css'; 
import BurgerList from './BurgerList';
import BookStayPill from './BookStayPill';
import Logo from '@/public/logoWhite.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartShopping, faCircleUser } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
    const [expandBurger, setExpandBurger] = useState(false); 

    const toggleBurger = () => {
        setExpandBurger(!expandBurger); 
    }

    return(
        <>
            <div className={ shared.navbarBlock }>
                <Link href='/'>
                    <Image 
                        src={ Logo }
                        alt='tiny away logo'
                        width={ 186 }
                        height={ 170 }
                    />
                </Link>
                <div className={ shared.links }>
                    <Link href='/gift-cards'>GIFT CARDS</Link>
                    <Link href='/'>EN</Link>
                    <Link href='/'>MYR(RM)</Link>
                    <BookStayPill id={ shared.navBookPill } />
                    <Link href='/login'>
                        <FontAwesomeIcon icon={ faCircleUser } style={{ fontSize: '30px' }}/>
                    </Link>
                    <Link href='/'>
                        <FontAwesomeIcon icon={ faCartShopping } style={{ fontSize: '24px' }}/>
                    </Link>
                    <div onClick={ toggleBurger }>
                        <FontAwesomeIcon icon={ faBars } style={{ fontSize: '24px' }}/>
                    </div>
                </div>
            </div>
            { expandBurger && 
            <BurgerList toggleBurger={ toggleBurger } />
            }
        </>
    )
}