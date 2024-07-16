import styled from "styled-components";
import sevenNews from "../../assets/7newsLogo.png"; 
import bizInsider from "../../assets/bizinsiderLogo.png"; 
import stuffLogo from "../../assets/stuffLogo.png"; 
import sundayHerald from "../../assets/sundayHeraldLogo.png"; 
import sundayTele from "../../assets/sundayTelegraphLogo.png"; 
import timeOutLogo from "../../assets/timeoutLogo.png"; 
import wamLogo from "../../assets/wamLogo.png"; 

export default function FeaturedInSection() {
    return(
        <Section>
            <h3>FEATURED IN</h3>
            <LogoSection>
                <SingleLogo style={{ backgroundImage: `url(${ wamLogo })`}} />
                <SingleLogo style={{ backgroundImage: `url(${ timeOutLogo })`}} />
                <SingleLogo style={{ backgroundImage: `url(${ stuffLogo })`}} />
                <SingleLogo style={{ backgroundImage: `url(${ sundayTele })`}} />
                <SingleLogo style={{ backgroundImage: `url(${ bizInsider })`}} />
                <SingleLogo style={{ backgroundImage: `url(${ sundayHerald })`}} />
                <SingleLogo className='overlay' style={{ backgroundImage: `url(${ sevenNews })`}} />
            </LogoSection>
        </Section>
    )
}

const Section = styled.div`
    text-align: center; 
    margin: 60px 40px; 
`

const LogoSection = styled.div`
    display: flex; 
    justify-content: center;
    gap: 5%;  
    align-items: center; 
    margin: 40px 30px; 

    img {
        object-fit: fit; 
    }
`

const SingleLogo = styled.div`
    background-size: contain;
    background-repeat: no-repeat;  
    background-position: center; 
    height: 50px; 
    width: 200px; 

    &.overlay {
        filter: grayscale(100%) opacity(65%); 
    }
`