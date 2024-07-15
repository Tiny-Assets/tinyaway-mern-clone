import { FormField, FormLogoTop, FormWrapper } from "../ourstorycomponents/OurStoryStyles";
import PillButton from "./genericpillbutton/PillButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMountain } from "@fortawesome/free-solid-svg-icons";

export default function ContactForm() {
    return(
        <FormWrapper>
            <FormLogoTop>
                <FontAwesomeIcon icon={ faMountain } />
            </FormLogoTop>
            <h2>To Discover Nature and Stay In Comfort.</h2>
            <FormField>
                <p>NAME</p>
            </FormField>
            <FormField>
                <p>EMAIL</p>
            </FormField>
            <FormField>
                <p>CONTACT NUMBER</p>
            </FormField>
            <FormField>
                <p>SUBJECT</p>
            </FormField>
            <FormField className='message'>
                <p>MESSAGE</p>
            </FormField>
            <PillButton buttonName='SUBMIT' path='/' />
        </FormWrapper>
    )
}