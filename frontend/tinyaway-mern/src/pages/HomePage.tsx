// import styled from "styled-components"
import SearchArea from "../components/search/SearchArea"
import PopularListings from "../components/listings/PopularListings.tsx"
import Footer from "../components/navigation/Footer.tsx"

export default function HomePage() {
    return(
        <>
            <SearchArea />
            <PopularListings />
            <Footer />
        </>
    )
}