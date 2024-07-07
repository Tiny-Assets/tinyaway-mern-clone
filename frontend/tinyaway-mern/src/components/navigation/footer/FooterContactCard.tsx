import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faSquareInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { ContactCard, Socials, Copyright } from "./FooterStyles";

export default function FooterContactCard() {
    return(
        <ContactCard>
            <p>3/ 23-25 Lara Way, Campbellfield, VIC 3061, Australia 294 Palmyra Avenue, Shanes Park, NSW 2747, Australia.</p>
            <br/>
            <p>ask@tinyaway.com</p>
            <br/>
            <Socials>
                <FontAwesomeIcon icon={ faFacebook } />
                <FontAwesomeIcon icon={ faSquareInstagram } />
                <FontAwesomeIcon icon={ faYoutube } />
            </Socials>
            <Copyright>
                <p>Tiny Away ©2024 All Rights Reserved</p>
            </Copyright>
        </ContactCard>
    )
}
