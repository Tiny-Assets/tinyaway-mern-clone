import styles from '@/app/components/searchComponents/searchStyles.module.scss';
import SearchBar from './SearchBar';

export default function SearchArea() {
    return(
        <div className={ styles.areaSettings }>
            <h1 className={ styles.mainHeader }>
                Book & Experience Amazing <br/>
                Tiny Houses
            </h1>
            <SearchBar />
        </div>
    )
}