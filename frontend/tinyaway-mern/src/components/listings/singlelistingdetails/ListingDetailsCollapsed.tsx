import { useState, useEffect } from "react";
import { toggleState } from "../../../sharedutilities/toggleState";
import ListingDetailsSubMenu from "./ListingDetailsSubMenu";
import { ColumnWrapper, DetailsTitle, DetailsWrapper, SubMenuWrapper } from "./SingleListingStyles";
import SubMenuContent from "./SubMenuContent";
import AmenitiesSubMenu from "./amenities/AmenitiesSubMenu";

interface ListingDetailsCollapsedProps {
    content: () => void; 
}

export default function ListingDetailsCollapsed({ content }: ListingDetailsCollapsedProps) {
    const [theSpace, setTheSpace] = useState(false); 
    const [checkInOut, setCheckInOut] = useState(false); 
    const [rate, setRate] = useState(false); 
    const [locationOpen, setLocationOpen] = useState(false);
    const [propDetails, setPropDetails] = useState(false);
    const [guestAccess, setGuestAccess] = useState(false);
    const [notes, setNotes] = useState(false);
    const [neighbourhood, setNeighbourhood] = useState(false);
    const [commonQns, setCommonQns] = useState(false);
    const [isolation, setIsolation] = useState(false);
    const [cancellation, setCancellation] = useState(false);
    const [amenities, setAmenities] = useState(false); 

    console.log(content); 

    return(
        <>
            <DetailsWrapper>
                <ColumnWrapper>
                    <DetailsTitle>DETAILS</DetailsTitle>
                        <SubMenuWrapper onClick={ toggleState(setTheSpace) }>
                            <ListingDetailsSubMenu title='THE SPACE' />
                            { theSpace &&
                                <SubMenuContent paragraph={ content.publicDescription_space } />
                            }
                        </SubMenuWrapper>
                        <SubMenuWrapper onClick={ toggleState(setCheckInOut) }>
                            <ListingDetailsSubMenu title='CHECK IN & CHECK OUT' />
                            { checkInOut &&
                                <SubMenuContent splitLeft={['Check In', 'Check Out']} splitRight={[`${content.defaultCheckInTime}`, `${content.defaultCheckOutTime}`]} />
                            }
                        </SubMenuWrapper>
                        <SubMenuWrapper onClick={ toggleState(setRate) }>
                            <ListingDetailsSubMenu title='RATE' />
                            { rate &&
                                <SubMenuContent splitLeft={['Base Price', 'Cleaning Fee']} splitRight={[`AUD ${content.prices_basePrice}`, `AUD ${content.prices_cleaningFee}`]} />
                            }
                        </SubMenuWrapper>
                        <SubMenuWrapper onClick={ toggleState(setLocationOpen) }>
                            <ListingDetailsSubMenu title='LOCATION' />
                            { locationOpen &&
                                <p>Google Map API</p>
                            }
                        </SubMenuWrapper>
                        <SubMenuWrapper onClick={ toggleState(setPropDetails) }>
                            <ListingDetailsSubMenu title='PROPERTY DETAILS' />
                            { propDetails &&
                                <p>chiky chiky haha</p>
                            }
                        </SubMenuWrapper>
                        <SubMenuWrapper onClick={ toggleState(setGuestAccess) }>
                            <ListingDetailsSubMenu title='GUEST ACCESS' />
                            { guestAccess &&
                                <p>hello there</p>
                            }
                        </SubMenuWrapper>
                        <SubMenuWrapper onClick={ toggleState(setNotes) }>
                            <ListingDetailsSubMenu title='OTHER THINGS TO NOTE' />
                            { notes &&
                                <SubMenuContent paragraph={ content.publicDescription_notes } />
                            }
                        </SubMenuWrapper>
                        <SubMenuWrapper onClick={ toggleState(setNeighbourhood) }>
                            <ListingDetailsSubMenu title='NEIGHBOURHOOD' />
                            { neighbourhood &&
                                <SubMenuContent paragraph={ content.publicDescription_neighborhood } />
                            }
                        </SubMenuWrapper>
                    <DetailsTitle>COMMON QUESTIONS</DetailsTitle>
                        <SubMenuWrapper onClick={ toggleState(setCommonQns) }>
                            <ListingDetailsSubMenu title='ABOUT THE PROPERTY`S COMMON QUESTIONS' />
                            { commonQns &&
                                <p>Don't ask so much can alr</p>
                            }
                        </SubMenuWrapper>
                        <SubMenuWrapper onClick={ toggleState(setIsolation) }>
                            <ListingDetailsSubMenu title='HOW ISOLATED IS THE TINY HOUSE?' />
                            { isolation &&
                                <SubMenuContent paragraph={ content.how_isolated_is_the_tiny_house } />
                            }
                        </SubMenuWrapper>                
                    <DetailsTitle>TERMS & RULES</DetailsTitle>
                        <SubMenuWrapper onClick={ toggleState(setCancellation) }>
                            <ListingDetailsSubMenu title='CANCELLATION POLICY' />
                            { cancellation &&
                                <SubMenuContent paragraph={ content.cancellation_policy } />
                            }
                        </SubMenuWrapper>
                </ColumnWrapper>
                <ColumnWrapper>
                    <DetailsTitle>FEATURES & AMENITIES</DetailsTitle>
                        <SubMenuWrapper onClick={ toggleState(setAmenities) }>
                            <ListingDetailsSubMenu title='AMENITIES' />
                            { amenities &&
                                <AmenitiesSubMenu amenities={ content.amenities } />
                            }
                        </SubMenuWrapper>
                    <DetailsTitle>TINY HOUSE STORIES</DetailsTitle>
                    <DetailsTitle>REVIEWS</DetailsTitle>
                </ColumnWrapper>
            </DetailsWrapper>
        </>
    )
}