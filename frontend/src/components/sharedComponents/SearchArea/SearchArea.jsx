import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const SearchArea = () => {
    return(
        <div className="searchArea">
            <h1>
                Book & Experience Amazing <br/>
                Tiny Houses
            </h1>
            
            <div className="searchBar">
                <div className="filterField" id="start">
                    <div className="fieldName">
                        LOCATION
                    </div>
                    <FontAwesomeIcon className="fieldArrow" icon= { faArrowRight }/>
                </div>
                <div className="filterField">
                    <div className="fieldName">
                        DATE
                    </div>
                    <FontAwesomeIcon className="fieldArrow" icon= { faArrowRight }/>
                </div>
                <div className="filterField">
                    <div className="fieldName">
                        GUESTS
                    </div>
                    <FontAwesomeIcon className="fieldArrow" icon= { faArrowRight }/>
                </div>
                <div className="filterField">
                    <div className="fieldName">
                        ROOMS
                    </div>
                    <FontAwesomeIcon className="fieldArrow" icon= { faArrowRight }/>
                </div>
                <div className="searchField" id="end">
                    <div className="fieldName">SEARCH</div>
                </div>
            </div>
        </div>
    )
}

export default SearchArea; 