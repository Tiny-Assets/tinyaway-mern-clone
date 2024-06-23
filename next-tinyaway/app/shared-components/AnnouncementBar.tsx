import shared from './sharedStyles.module.css'; 
import Link from 'next/link';

export default function AnnouncementBar() {
    return(
        <div className={ shared.announcement }>
            <Link href='/'>Discover Nature. Stay In Comfort.</Link>
        </div>
    )
}