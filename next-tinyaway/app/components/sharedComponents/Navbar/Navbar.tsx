import Image from 'next/image';
import styles from '@/app/components/sharedComponents/sharedStyles.module.scss';
import Logo from '@/public/logoWhite.png';
import NavLinks from './NavLinks';

export default function Navbar() {
    return(
        <div className={ styles.navBar }>
            <div>
                <Image
                    src={ Logo }
                    width={ 187 }
                    alt='Tinyaway Logo'
                />
            </div>
            <div>
                <NavLinks />
            </div>
        </div>
    )
}