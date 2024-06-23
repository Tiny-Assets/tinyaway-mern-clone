import styles from '@/app/homepage-components/searchComponents/searchStyles.module.css';
import SearchBar from '@/app/homepage-components/searchComponents/SearchBar';

export default function SearchArea() {
    return(
        <div className={ styles.areaBackground }>
            <h1 className={ styles.mainHeader }>
                Book & Experience Amazing <br/>
                Tiny Houses
            </h1>
            <SearchBar />
        </div>
    )
}