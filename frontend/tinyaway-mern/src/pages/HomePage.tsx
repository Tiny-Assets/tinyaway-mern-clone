import SearchArea from "../components/search/SearchArea"
import PopularListings from "../components/listings/PopularListings.tsx"
import TinyHouseStoriesSection from "../components/tinyhousestories/TinyHouseStoriesSection.tsx"

export default function HomePage() {
    return(
        <>
            <SearchArea />
            <PopularListings />
            <TinyHouseStoriesSection />
        </>
    )
}