import styles from './styles.module.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function SearchArea() {
    return(
        <div className={ styles.searchArea }>
            <h1 className={ styles.mainTitle }>
                Book & Experience Amazing <br/>
                Tiny Houses
            </h1>
            <div className={ styles.searchBar }>
                <div className={ styles.filterBox } id={ styles.start }>
                    <p>LOCATION</p>
                    <FontAwesomeIcon icon={ faArrowRight } className={ styles.arrow } />
                </div>
                <div className={ styles.filterBox }>
                    <p>DATE</p>
                    <FontAwesomeIcon icon={ faArrowRight } className={ styles.arrow } />
                </div>
                <div className={ styles.filterBox }>
                    <p>GUESTS</p>
                    <FontAwesomeIcon icon={ faArrowRight } className={ styles.arrow } />
                </div>
                <div className={ styles.filterBox }>
                    <p>ROOM</p>
                    <FontAwesomeIcon icon={ faArrowRight } className={ styles.arrow } />
                </div>
                <div id={ styles.end }>
                    SEARCH
                </div>
            </div>
        </div>
    )
}

export default SearchArea; 