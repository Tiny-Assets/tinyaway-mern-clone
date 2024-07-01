import styled from "styled-components";
import DropdownSection from "./DropdownSection";
import BookingBar from "./BookingBar";

interface ListingDetailsProps {
    listingDetails: () => void; 
}

export default function ListingDetails({ listingDetails }: ListingDetailsProps){

    console.log(listingDetails);

    return(
    <>
        <MainContainer>
            <div>
               <SubSection>
                    <h1>DETAILS</h1>
                    <DropdownSection title='THE SPACE' paragraph={ listingDetails.description }/>
                    <DropdownSection title='CHECK IN & CHECK OUT' leftSideInfo="CHECK IN TIME" rightSideInfo="12:00"/>
                    <DropdownSection title='RATE' leftSideInfo="PRICE" rightSideInfo={ listingDetails.price.$numberDecimal }/>
                    <DropdownSection title='LOCATIONS' paragraph="Google Map API"/>
                    <DropdownSection title='PROPERTY DETAILS' paragraph={ listingDetails.transit }/>
                    <DropdownSection title='GUEST ACCESS' paragraph={ listingDetails.access }/>
                    <DropdownSection title='OTHER THINGS TO NOTE' paragraph={ listingDetails.space }/>
                    <DropdownSection title='NEIGHBOURHOOD' paragraph={ listingDetails.neighborhood_overview }/>
                    </SubSection>
                <SubSection>
                    <h1>COMMON QUESTIONS</h1>
                    <DropdownSection title='ABOUT THE PROPERTY`S COMMON QUESTIONS' paragraph={ listingDetails.description}/>
                    <DropdownSection title='HOW ISOLATED IS THE TINY HOUSE?' paragraph={ listingDetails.transit }/>
                </SubSection>
                <SubSection>
                    <h1>TERMS & RULES</h1>
                    <DropdownSection title='CANCELLATION POLICY' paragraph="Just don't cancel"/>
                </SubSection>
            </div>
            <div>
                <SubSection>
                    <h1>FEATURES AND AMENITIES</h1>
                    <DropdownSection title='AMENITIES' paragraph="testing" />
                </SubSection>
                <SubSection>
                    <h1>TINY HOUSE STORIES</h1>
                </SubSection>
                <SubSection>
                    <h1>REVIEWS</h1>
                </SubSection>
            </div>
        </MainContainer>
        <BookingBar />
    </>
    )
}

const MainContainer = styled.div`
    color: var(--corpDarkGrey1); 
    display: flex; 
    justify-content: space-between;
    margin: 50px 120px; 

    h1 {
        font-size: 34px; 
    }
`

const SubSection = styled.div`
    margin-bottom: 60px; 
`