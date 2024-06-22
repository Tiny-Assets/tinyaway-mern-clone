'use client'

import styles from '@/app/components/searchComponents/searchStyles.module.scss';

export default function SearchBar() {
    return(
        <div className={ styles.searchBar }>
            <div className={ styles.searchField } id={ styles.start }>
                <p>LOCATION</p>
            </div>
            <div className={ styles.searchField }>
                <p>DATE</p>
            </div>
            <div className={ styles.searchField }>
                <p>GUESTS</p>
            </div>
            <div className={ styles.searchField }>
                <p>ROOM</p>
            </div>
            <div className={ styles.searchField } id={ styles.end }>
                <p>SEARCH</p>
            </div>
        </div>
    )
}