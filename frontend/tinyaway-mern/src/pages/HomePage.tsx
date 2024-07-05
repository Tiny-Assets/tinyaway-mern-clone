import SearchArea from "../components/search/SearchArea"
import TinyAwayListings from "../components/listings/grouplistingcomponents/TinyAwayListings.tsx"
import TinyStoriesSection from "../components/tinystories/TinyHouseStoriesSection.tsx"
import TravelInspoSection from "../components/travelinspirations/TravelInspoSection.tsx"
import ReviewSection from "../components/reviewsection/ReviewSection.tsx"

export default function HomePage() {
    return(
        <>
            <SearchArea />
            <TinyAwayListings />
            <TinyStoriesSection />
            <TravelInspoSection />
            <ReviewSection />
        </>
    )
}