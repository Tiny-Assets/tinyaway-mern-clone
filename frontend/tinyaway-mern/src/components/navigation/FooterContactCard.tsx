import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faSquareInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";

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

const ContactCard = styled.div`
    // background-color: maroon; 
    width: 520px; 
    height: 330px; 
    display: flex; 
    flex-direction: column; 
    font-size: 21px; 
    font-weight: 300; 
`

const Socials = styled.div`
    display: flex; 
    gap: 30px; 
    font-size: 35px; 
`

const Copyright = styled.div`
    font-size: 18px; 
    margin-top: auto;
`