import GalleryImages from "./SingleListingGalleryImages"
import { GalleryTitle, GalleryWrapper } from "./SingleListingStyles"


interface GallerySectionProps {
    listingId: string; 
}

export default function SingleListingGallerySection({ listingId }: GallerySectionProps) {

    return(
        <GalleryWrapper>
            <GalleryTitle>GALLERY</GalleryTitle>
            <GalleryImages listingId={ listingId } />
        </GalleryWrapper>
    )
}