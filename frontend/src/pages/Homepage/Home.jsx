// import css 
import '../Homepage/home.css'; 

// import components & pages 
import Navbar from '../../components/sharedComponents/Navbar/Navbar';
import SearchArea from '../../components/sharedComponents/SearchArea/SearchArea';

const Home = () => {
    return(
        <div>
            {/* mini ribbon banner at top (not sticky) */}
            {/* needs to be clickable */}
            {/* hero banner + 'navbar' (sticky) + search function */}
            <div className="homeHero">
                <Navbar />
                <SearchArea />
            </div>
            
            {/* popular tiny house listings */}
            {/* tiny house stories cards */}
            {/* travel inspirations */}
            {/* hero banner for reviews */}
            {/* featured in section */}
            {/* small gallery of embedded videos */}
            {/* newsletter sign-up section */}
            {/* footer section */}
        </div>
    )
}

export default Home; 