import RibbonBanner from '../components/sharedComponents/Navigation/RibbonBanner';
import SearchArea from '../components/homepageComponents/homepage-SearchArea';
import SampleTopListings from '../components/listingComponents/SampleTopListings';

function HomePage() {
    return(
        <>
            < RibbonBanner />     
            < SearchArea /> 
            < SampleTopListings />
        </>
    ); 
}

export default HomePage; 