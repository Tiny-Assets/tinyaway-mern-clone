import { useState } from "react";
import { CountryIcon, CountryIconsWrapper, IntlOfficesWrapper, OfficeAddressBlock, OfficeAddressWrapper } from "./contactPageStyles";
import ozFlag from '../../assets/ozFlag.png';
import sgFlag from '../../assets/sgFlag.png'; 
import myFlag from '../../assets/msiaFlag.svg'; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding } from "@fortawesome/free-regular-svg-icons";

export default function InternationalOffices() {
    const [ausOffice, setAusOffice] = useState(true); 
    const [sgOffice, setSgOffice] = useState(false); 
    const [myOffice, setMyOffice] = useState(false); 

    const showAus = () => {
        setAusOffice(true); 
        setSgOffice(false); 
        setMyOffice(false); 
    }; 

    const showSg = () => {
        setAusOffice(false); 
        setSgOffice(true); 
        setMyOffice(false); 
    }

    const showMy = () => {
        setAusOffice(false); 
        setSgOffice(false); 
        setMyOffice(true); 
    }

    return(
        <IntlOfficesWrapper>
            <h2>INTERNATIONAL OFFICES</h2>
            <CountryIconsWrapper>
                <CountryIcon onClick={ showAus }>
                    <img src={ ozFlag } alt='ozFlag' />
                    <p>AUSTRALIA OFFICES</p>
                </CountryIcon>
                <CountryIcon onClick={ showSg }>
                    <img src={ sgFlag } alt='ozFlag' />
                    <p>SINGAPORE OFFICES</p>
                </CountryIcon>
                <CountryIcon onClick={ showMy }>
                    <img src={ myFlag } alt='ozFlag' />
                    <p>MALAYSIA OFFICES</p>
                </CountryIcon>
            </CountryIconsWrapper>
            <OfficeAddressWrapper>
                { ausOffice &&
                <>
                    <OfficeAddressBlock>
                        <FontAwesomeIcon icon={ faBuilding } />
                        <h3>AUSTRALIA OFFICES</h3>
                        <p>3/ 23-25 Lara Way, Campbellfield, VIC 3061, Australia</p>
                        <p>ask@tinyaway.com</p>
                    </OfficeAddressBlock>
                    <OfficeAddressBlock>
                    <FontAwesomeIcon icon={ faBuilding } />
                        <h3>AUSTRALIA OFFICES</h3>
                        <p>294 Palmyra Avenue, Shanes Park, NSW 2747, Australia</p>
                        <p>ask@tinyaway.com</p>
                    </OfficeAddressBlock>
                </>
                }
                { sgOffice &&
                <>
                    <OfficeAddressBlock>
                        <FontAwesomeIcon icon={ faBuilding } />
                        <h3>SINGAPORE OFFICES</h3>
                        <p>1 Pemimpin Drive, #04-06 One Pemimpin, Singapore 576151</p>
                        <p>ask@bigtiny.com.sg</p>
                        <p>+65 6525 5282</p>
                    </OfficeAddressBlock>
                    <OfficeAddressBlock>
                    <FontAwesomeIcon icon={ faBuilding } />
                        <h3>SINGAPORE OFFICES</h3>
                        <p>1 Tuas South Ave 6, #03-06 The Westcom, Singapore 637021</p>
                        <p>ask@bigtiny.com.sg</p>
                        <p>+65 6525 5282</p>
                    </OfficeAddressBlock>
                </>
                }
                { myOffice &&
                <>
                    <OfficeAddressBlock>
                        <FontAwesomeIcon icon={ faBuilding } />
                        <h3>MALAYSIA OFFICES</h3>
                        <p>No 43 Jalan SME 3, Kawansan Perindustian SME, Bandar Indahpura, 81000, Kulai, Johor, Malaysia</p>
                        <p>ask@bigtiny.com.sg</p>
                        <p>+65 6525 5282</p>
                    </OfficeAddressBlock>
                </>
                }
            </OfficeAddressWrapper>
        </IntlOfficesWrapper>
    )
}