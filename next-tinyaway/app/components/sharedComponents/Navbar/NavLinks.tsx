'use client'

import styles from '@/app/components/sharedComponents/sharedStyles.module.scss';

export default function NavLinks() {
    return(
        <div className={ styles.navLinks }>
            <div>GIFT CARDS</div>
            <div>EN</div>
            <div>MYR(RM)</div>
            <div>BOOK YOUR STAY</div>
        </div>
    )
}