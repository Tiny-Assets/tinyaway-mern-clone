import styled from "styled-components";
import PillTag from "../../sharedcomponents/PillTag";

interface ListingIntroProps {
    name: string; 
    street: string; 
    description: string; 
}

export default function ListingIntro({ name, street, description }: ListingIntroProps ) {
    

    return(
        <>
        <IntroSection>
            <div>
                <ImageBox />
            </div>
            <div>
                <Street>{ street }</Street>
                <ListingTitle>{ name }</ListingTitle>
                <ContentBox>
                    <Pills>
                        <PillTag tagName='FEATURED' />
                        <PillTag tagName='PET-FRIENDLY' />
                    </Pills>
                    <Description>{ description }</Description>
                    <Pills className='plainPills'>
                        <PillTag className='plainTag' tagName='BUCKET LIST' />
                        <PillTag className='plainTag' tagName='GIFT CARD' />
                        <PillTag className='plainTag' tagName='SHARE' />
                    </Pills>
            </ContentBox>
            </div>
        </IntroSection>
        <ImageBanner />
        </>
    )
}

const IntroSection = styled.div`
    color: var(--corpDarkGrey1); 
    width: 1670px; 
    display: flex; 
    justify-content: center; 
    margin: 50px 100px; 
`

const Street = styled.div`
    font-size: 21px; 
    font-weight: 600; 
`

const ListingTitle = styled.div`
    font-family; 'Work Sans'; 
    font-size: 64px; 
    font-weight: 800; 
`

const Description = styled.div`
    width: 700px;
    color: black; 
    font-size: 18px; 
    overflow-wrap: break-word;
    line-height: 1.7rem; 
     
`

const ImageBox = styled.div`
    background-color: lightgreen; 
    height: 550px; 
    width: 800px; 
    margin-right: 20px; 
`

const ContentBox = styled.div`
    display: flex; 
    flex-direction: column; 
    gap: 15px; 
`

const Pills = styled.div`
    display: flex; 
    gap: 20px; 
`

const ImageBanner = styled.div`
    width: 100vw; 
    height: 700px; 
    background-color: lightgreen; 
`