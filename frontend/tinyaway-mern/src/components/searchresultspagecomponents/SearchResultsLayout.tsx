import { ListingContainer } from "../listings/grouplistingcomponents/GroupListingStyles"
import SearchResultsFilterBar from "./filtercomponents/SearchResultsFilterBar"
import SearchResultsCards from "./SearchResultsCards"

export default function SearchResultsLayout() {

    return(
        <>
            {/* top filter bar */}
            <SearchResultsFilterBar />
                {/* filter between listings & activities */}
                {/* update filtered cards based on new search params */}
            {/* filtered cards */}
            <ListingContainer>
                <SearchResultsCards />
            </ListingContainer>
        </>
    )
}