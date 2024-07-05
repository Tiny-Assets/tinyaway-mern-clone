import { useState, useEffect } from "react";

interface AmenitiesSubMenuProps {
    amenities: string; 
}

export default function AmenitiesSubMenu({ amenities }: AmenitiesSubMenuProps) {
    const [splitAmenities, setSplitAmenities] = useState<string[]>([]); 
    const [amenitiesArray, setAmenitiesArray] = useState<string[]>([]); 

    // const url = `http://localhost:4000/api/findamenities?amenityId=${ amenityId }`; 
    return(
        <>
            <p>Clean up database first</p>
        </>
    )
}