import { useContext } from "react";
import { SingleListingImagesContext } from "../../../contexts/SingleListingImagesContext"; 
import useGetImages from "../../../hooks/useGetImages";
import { GalleryScroller, ImageThumbnail } from "./SingleListingStyles";

interface GalleryImagesProps {
    listingId: string; 
}

export default function GalleryImages({ listingId }: GalleryImagesProps) {
    const { imageArray } = useContext(SingleListingImagesContext); 

    useGetImages({ listingId }); 


    return(
        <>
            <GalleryScroller>                
                { imageArray.length > 0 ? (
                    imageArray.map((url, index) => (
                        <ImageThumbnail key={ index } src={ url }></ImageThumbnail>
                    ))

                ) : (
                    <></>
                )}
            </GalleryScroller>
        </>
    )
}