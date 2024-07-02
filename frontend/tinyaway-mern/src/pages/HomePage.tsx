import SearchArea from "../components/search/SearchArea"
import PopularListings from "../components/listings/PopularListings.tsx"
import TinyStoriesSection from "../components/tinystories/TinyHouseStoriesSection.tsx"
import TravelInspoSection from "../components/travelinspirations/TravelInspoSection.tsx"
import ReviewSection from "../components/reviewsection/ReviewSection.tsx"

export default function HomePage() {
    return(
        <>
            <SearchArea />
            <PopularListings />
            <TinyStoriesSection />
            <TravelInspoSection />
            <ReviewSection />
        </>
    )
}