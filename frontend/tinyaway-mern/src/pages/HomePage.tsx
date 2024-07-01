// import styled from "styled-components"
import SearchArea from "../components/search/SearchArea"
import PopularListings from "../components/listings/PopularListings.tsx"

export default function HomePage() {
    return(
        <>
            <SearchArea />
            <PopularListings />
        </>
    )
}