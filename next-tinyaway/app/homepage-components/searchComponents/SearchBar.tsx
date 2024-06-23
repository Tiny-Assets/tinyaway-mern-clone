'use client'

import Link from 'next/link';
import search from '@/app/homepage-components/searchComponents/searchStyles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function SearchBar() {
    return(
        <div className={ search.searchBar }>
            <div className={ search.searchField } id={ search.start }>
                <p>LOCATION</p>
                <FontAwesomeIcon icon={ faArrowRight } />
            </div>
            <div className={ search.searchField }>
                <p>DATE</p>
                <FontAwesomeIcon icon={ faArrowRight } />
            </div>
            <div className={ search.searchField }>
                <p>GUESTS</p>
                <FontAwesomeIcon icon={ faArrowRight } />
            </div>
            <div className={ search.searchField }>
                <p>ROOM</p>
                <FontAwesomeIcon icon={ faArrowRight } />
            </div>
            <div className={ search.searchField } id={ search.end }>
                <Link href='/'>
                    SEARCH
                </Link>
            </div>
        </div>
    )
}