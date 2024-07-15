import { ContactWrapper } from "./OurStoryStyles";
import DemoImg from '../../assets/demoHero.jpg';
import ContactForm from "../sharedcomponents/ContactForm";

export default function ContactSection() {

    return(
        <>
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
        </>
    )
}