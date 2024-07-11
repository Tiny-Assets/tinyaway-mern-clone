import SearchArea from "../components/search/SearchArea"
import PopularListings from "../components/listings/grouplistingcomponents/PopularListings.tsx"
import TinyStoriesSection from "../components/tinystories/homesection/TinyHouseStoriesSection.tsx"
import TravelInspoSection from "../components/travelinspirations/TravelInspoSection.tsx"
import ReviewSection from "../components/reviewsection/ReviewSection.tsx"
import FeaturedInSection from "../components/featuredinsection/featuredInSection.tsx"

export default function HomePage() {
    return(
        <>
            <SearchArea />
            <PopularListings />
            <TinyStoriesSection />
            <TravelInspoSection />
            <ReviewSection />
            <FeaturedInSection />
        </>
    )
}