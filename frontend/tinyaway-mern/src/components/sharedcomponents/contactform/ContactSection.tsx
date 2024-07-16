import { BrandsPart, ContactWrapper, DisplayedLogo } from "./contactFormStyles";
import DemoImg from '../../../assets/demoHero.jpg';
import ContactForm from "./ContactForm";
import wamLogo from '../../../assets/wamLogo.png'; 
import timeOutLogo from '../../../assets/timeoutLogo.png';
import stuffLogo from '../../../assets/stuffLogo.png'; 

interface ContactSectionProps {
    id?: string
}

export default function ContactSection({ id }: ContactSectionProps) {

    return(
        <div id={ id }>
            <ContactWrapper style={{ backgroundImage: `url(${ DemoImg })`}}>
                <div>
                    <h1>WE LOVE HEARING FROM YOU</h1>
                    <p>If you have any questions or feedback, 
                        <br/>
                        we're here to help.
                    </p>
                </div>
                <ContactForm />
            </ContactWrapper>
            <BrandsPart>
                <DisplayedLogo style={{ backgroundImage: `url(${ wamLogo })`}} />
                <DisplayedLogo style={{ backgroundImage: `url(${ timeOutLogo })`}} />
                <DisplayedLogo style={{ backgroundImage: `url(${ stuffLogo })`}} />
            </BrandsPart>
        </div>
    )
}