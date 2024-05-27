import '../index.css'; 
import Navbar from '../components/Navbar';

const Home = () => {
    return(
        <div>
            {/* mini ribbon banner at top (not sticky) */}
            <div className="homeRibbon">
                <p>Discover Nature. Stay In Comfort</p>
            </div>

            {/* hero banner + 'navbar' (sticky) + search function */}
            <div className="homeHero">
                <Navbar />
                <div>
                    <h2>Search Area</h2>
                </div>
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