import { IconFlexBox, SingleColumn, SplitHeroContent, SplitHeroImage, SplitHeroWrapper } from "./contactPageStyles";
import DemoHero from '../../assets/demoHero.jpg'; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export default function SplitHero() {

    return(
        <SplitHeroWrapper>
            <SplitHeroImage>
                <img src={ DemoHero } alt='demohero' />
            </SplitHeroImage>
            <SplitHeroContent>
                <h1>CONTACT US</h1>
                <p>
                    Looking for help? 
                    <br/> Let us know - We're here for you. 
                </p>
                <IconFlexBox>
                    <SingleColumn>
                    <FontAwesomeIcon icon={ faComment } style={{ backgroundColor: 'white', padding:'20px', borderRadius:'3rem' }} />
                    <p>
                        The fastest and easiest way to get in touch with us 
                        about anything and everything.
                    </p>
                    </SingleColumn>
                    <SingleColumn>
                    <FontAwesomeIcon icon={ faEnvelope } style={{ backgroundColor: 'white', padding:'20px', borderRadius:'3rem' }} />
                    <p>
                        Our team will get back to you within 24 hours.
                    </p>
                    </SingleColumn>
                </IconFlexBox>
            </SplitHeroContent>
        </SplitHeroWrapper>
    )
}