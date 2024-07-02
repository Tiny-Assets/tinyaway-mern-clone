import { FooterBox, FooterBottom, FooterTop, LogoContainer, LogoBox, Description, LinkSection, BottomTitle } from './footer/FooterStyles';
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