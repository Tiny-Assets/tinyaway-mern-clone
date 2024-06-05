import styles from './styles.module.css'; 
import Navbar from '../../components/sharedComponents/navBar/Navbar'; 
import SearchArea from '../../components/searchArea/SearchArea';

function HomePage() {
    return(
        <>
            <div className={ styles.heroSection }>
                < Navbar />
                < SearchArea />
            </div>
        </>
    ); 
}

export default HomePage; 