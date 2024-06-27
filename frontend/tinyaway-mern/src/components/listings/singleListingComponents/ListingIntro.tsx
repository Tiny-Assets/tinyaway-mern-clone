import styled from "styled-components";
import PillTag from "../../PillTag";

interface ListingIntroProps {
    name: string; 
    street: string; 
    description: string; 
    tags: string[]; 
}

export default function ListingIntro({ name, street, description, tags }: ListingIntroProps) {
    const tagsToRender = tags.slice(2,4); 

    return(
        <IntroSection>
            <Street>{ street }</Street>
            <ListingTitle>{ name }</ListingTitle>
            <PillAndIcons>
                {tagsToRender.map((tag, index) => (
                    <PillTag key={index} tagName={tag} />
                ))}
            </PillAndIcons>
            <Description>{ description }</Description>
        </IntroSection>
    )
}

const IntroSection = styled.div`
    color: var(--corpDarkGrey1); 
    width: 1100px; 
    margin: 50px 100px; 
`

const Street = styled.div`
    font-size: 21px; 
    font-weight: 500; 
`

const ListingTitle = styled.div`
    font-family; 'Work Sans'; 
    font-size: 64px; 
    font-weight: 700; 
`

const PillAndIcons = styled.div`
    display: flex; 
    gap: 20px; 
`

const Description = styled.div`
    color: black; 
    font-size: 18px; 
    overflow-wrap: break-word;
    line-height: 1.7rem; 
    margin-top: 30px; 
`