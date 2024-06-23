'use client'

import Link from 'next/link';
import { useState } from 'react';
import shared from '@/app/shared-components/sharedStyles.module.css'; 
import BookStayPill from './BookStayPill';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

interface BurgerListProps {
    toggleBurger: () => void;  
}

export default function BurgerList({ toggleBurger }: BurgerListProps) {
    const [escapeSub, setEscapeSub] = useState(false); 
    const [aboutSub, setAboutSub] = useState(false); 

    const toggleEscape = () => {
        setEscapeSub(!escapeSub); 
    }

    const toggleAbout = () => {
        setAboutSub(!aboutSub); 
    }

    return(
        <div className={ shared.burgerBg }>
            <div className={ shared.openBurger }>
                <div onClick={ toggleBurger }>
                    <FontAwesomeIcon icon={ faX } /> 
                </div>
                <Link href='/' onClick={ toggleBurger }>HOME</Link>
                <Link href='/' onClick={ toggleBurger }>TINY HOUSE DESTINATIONS</Link>
                <div onClick={ toggleEscape }>TINY AWAY ESCAPE</div>
                    { escapeSub &&
                        <div className={ shared.subMenu }>
                            <Link href='/' onClick={ toggleBurger }>GRAMPIANS EDGE @ AUSTRALIA</Link>
                            <Link href='/' onClick={ toggleBurger }>LAZARUS ISLAND @ SINGAPORE</Link>
                        </div>
                    }
                <Link href='/' onClick={ toggleBurger }>TINY STORIES</Link>
                <div onClick={ toggleAbout }>ABOUT US</div>
                    { aboutSub &&    
                        <div className={ shared.subMenu }>
                            <Link href='/' onClick={ toggleBurger }>OUR STORY</Link>
                            <Link href='/' onClick={ toggleBurger }>BECOME A HOST</Link>
                            <Link href='/' onClick={ toggleBurger }>CONTACT US</Link>
                            <Link href='/' onClick={ toggleBurger }>FAQ & CANCELLATION POLICY</Link>
                        </div>
                    }
                <Link href='/gift-cards' onClick={ toggleBurger }>GIFT CARDS</Link>
                <Link href='/' onClick={ toggleBurger }>BLOG</Link>
                <Link href='/login' onClick={ toggleBurger }>LOGIN</Link>
                <BookStayPill className={ shared.bookStayPill } onClick={ toggleBurger }/>
            </div>
        </div>
    )
}