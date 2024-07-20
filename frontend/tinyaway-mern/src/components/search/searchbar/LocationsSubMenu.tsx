import { useContext } from "react";
import { LocationContext } from "../../../contexts/LocationContext";
import { Location, LocationsSub } from "./SubmenuStyles"; 

export default function LocationsSubMenu() {
    const { setSelectedLocation } = useContext(LocationContext); 

    const selectLocation = (e) => {
        const country = e.target.innerText;
        setSelectedLocation(country); 
    }

    return(
        <LocationsSub>
            <Location onClick={ selectLocation }>AUSTRALIA</Location>
            <Location onClick={ selectLocation }>MALAYSIA</Location>
            <Location onClick={ selectLocation }>NEW ZEALAND</Location>
            <Location onClick={ selectLocation }>TAIWAN</Location>
            <Location onClick={ selectLocation }>EUROPE</Location>
        </LocationsSub>
    )
}

// Original country numbers: 
// Australia - 21
// Malaysia - 5
// New Zealand - 615
// Taiwan - 7 
// Europe (In database: United Kingdom) - 9 