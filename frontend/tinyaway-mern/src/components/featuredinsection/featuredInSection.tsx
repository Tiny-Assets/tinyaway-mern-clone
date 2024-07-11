import styled from "styled-components"

export default function FeaturedInSection() {
    return(
        <Section>
            <h3>FEATURED IN</h3>
            <LogoSection>
                <p>Logo</p>
                <p>Logo</p>
                <p>Logo</p>
                <p>Logo</p>
                <p>Logo</p>
            </LogoSection>
        </Section>
    )
}

const Section = styled.div`
    text-align: center; 
    margin: 30px; 
`

const LogoSection = styled.div`
    display: flex; 
    justify-content: space-between; 
    align-items: center; 
    margin: 20px 30px; 

    p {
        background-color: lightblue;
        opacity: 0.7;  
        padding: 20px 40px;
        border-radius: 3rem;  
    }
`