import styled from "styled-components";
import Logo from '../../assets/talogo.png'; 
import FooterLink from "./FooterLinks";
import FooterContactCard from "./FooterContactCard";

export default function Footer() {
    return(
        <FooterBox>
            <FooterTop>
                <LogoContainer>
                    <LogoBox style={{backgroundImage:`url(${ Logo })`}} />
                    <LogoBox style={{backgroundImage:`url(${ Logo })`}} />
                </LogoContainer>
                <Description>
                    <p>Riding on the international trend in tiny houses, Tiny Away provides a tiny house getaway close to nature. Enjoy large open spaces and be outside. Discover Nature. Stay in Comfort. Unique tiny house staycation experience.</p>
                </Description>
            </FooterTop>
            <FooterBottom>
                <LinkSection>
                    <div>
                        <BottomTitle>EXPLORE</BottomTitle>
                        <FooterLink linkName="NEW SOUTH WALES, AUSTRALIA" path="/tiny-house-destinations" />
                        <FooterLink linkName="VICTORIA, AUSTRALIA" path="/tiny-house-destinations" />
                        <FooterLink linkName="TINY HOUSE" path="/" />
                        <FooterLink linkName="DESTINATIONS" path="/tiny-house-destinations" />
                        <FooterLink linkName="BECOME A HOST" path="/become-a-host" />
                        <FooterLink linkName="GIFT CARDS" path="/gift-cards" />
                        <FooterLink linkName="HELP CENTRE" path="/faq-n-policies" />
                    </div>
                    <div>
                        <BottomTitle>COMPANY</BottomTitle>
                        <FooterLink linkName="HOME" path="/" />
                        <FooterLink linkName="ABOUT US" path="/our-story" />
                        <FooterLink linkName="TERMS OF USE" path="/" />
                        <FooterLink linkName="PRIVACY" path="/" />
                        <FooterLink linkName="CANCELLATION POLICY" path="/faq-n-policies" />
                    </div>
                </LinkSection>
                <div>
                    <BottomTitle>CONTACT US</BottomTitle>
                    <FooterContactCard />
                </div>
            </FooterBottom>
        </FooterBox>
    )
}

const FooterBox = styled.div`
    background-color: black; 
    color: white; 
    height: 750px; 
    padding: 0px 130px; 
`

const FooterTop = styled.div`
    display: flex; 
    background-color: black; 
    border-bottom: 1px solid var(--corpDarkGrey1); 
`

const FooterBottom = styled.div`
    display: flex; 
    gap: 100px; 
    margin-top: 50px; 
`

const LinkSection = styled.div`
    width: 700px; 
    display: flex; 
    gap: 150px; 
`
const BottomTitle = styled.div`
    font-size: 28px;
    font-weight: 600; 
    margin-bottom: 50px; 
`

const LogoContainer = styled.div`
    display: flex; 
    gap: 100px; 
    padding-right: 100px; 
`

const LogoBox = styled.div`
    background-size: cover; 
    height: 180px; 
    width: 250px; 
    padding-bottom: 50px; 
    overflow: hidden; 
`

const Description = styled.div`
    width: 750px; 
    font-size: 21px; 
    font-weight: 300; 
    text-align: left; 
    align-content: center;
    margin: 50px 0px;  
    padding-left: 100px; 
    border-left: 1px solid var(--corpDarkGrey1); 
`