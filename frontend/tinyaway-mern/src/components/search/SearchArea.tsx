import { HeroSection, HeroTitle } from "./SearchAreaStyles"
import SearchBar from "./searchbar/SearchBar"
import { GuestNumberProvider } from "../../contexts/GuestNumberContext"
import { RoomNumberProvider } from "../../contexts/RoomNumberContext"
import { LocationProvider } from "../../contexts/LocationContext"

export default function SearchArea() {
    return(
        <LocationProvider><GuestNumberProvider><RoomNumberProvider>
            <HeroSection>
                <HeroTitle>Book & Experience Amazing <br/> Tiny Houses</HeroTitle>
                <SearchBar />
            </HeroSection>
        </RoomNumberProvider></GuestNumberProvider></LocationProvider>
    )
}
