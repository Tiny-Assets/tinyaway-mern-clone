import { HostBanner, HostSide, HostImage, HostDetails, LogoColor, HostDetailsWrapper, Title, HostName, Stars } from "./SingleListingStyles";
import HostPicture from '../../../assets/demoImg1.jpg';
import Logo from '../../../assets/talogo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";


export default function ListingHost() {

    const numberOfStars = 5; 

    const starsArray = Array.from({ length: numberOfStars }, (_, index) => (
        <FontAwesomeIcon key={index} icon={faStar} />
    ));

    return(
        <HostBanner>
            <HostSide>
                <Title>HOST</Title>
                <HostDetailsWrapper>
                    <LogoColor src={ Logo } alt='TA Logo' />
                    <HostDetails>
                        <HostName>Tiny Away</HostName>
                        <Stars>
                            { starsArray }
                        </Stars>
                        <p>
                            Riding on the international trend in tiny houses, Tiny Away provides a tiny house 
                            getaway close to nature. Enjoy large open spaces and be outside. Discover Nature. 
                            Stay in Comfort. Unique tiny house staycation experience
                        </p>
                    </HostDetails>
                </HostDetailsWrapper>
            </HostSide>
            <HostImage>
                <img src={ HostPicture } alt='Host Image' />
            </HostImage>
        </HostBanner>
    )
}