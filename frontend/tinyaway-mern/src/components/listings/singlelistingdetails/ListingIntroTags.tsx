import { useState, useEffect } from "react";
import DisplayPill from "../../sharedcomponents/displaypill/DisplayPill";
import { TagsBox } from "./SingleListingStyles";

interface ListingIntroTagsProps {
    tags: string[]; 
}

export default function ListingIntroTags({ tags }: ListingIntroTagsProps) {
    const [petFriendly, setPetFriendly] = useState(false); 
    const [childFriendly, setChildFriendly] = useState(false); 

    useEffect(() => {
        if (tags.includes('Pet friendly')) {
            setPetFriendly(true); 
        }
    
        if (tags.includes('Family-friendly')) {
            setChildFriendly(true); 
        }
    
    },[tags]);

    return(
        <TagsBox>
            { petFriendly && 
                <DisplayPill tagName='PET FRIENDLY' />
            }
            { childFriendly &&
                <DisplayPill tagName='KID FRIENDLY' />
            }
        </TagsBox>
    )
}