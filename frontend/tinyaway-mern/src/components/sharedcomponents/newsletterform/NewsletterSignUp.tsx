import { NewsletterSection, NewsletterImage, NewsletterForm, EmailPill } from './NewsletterStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function NewsletterSignUp() {
    return(
        <NewsletterSection>
            <NewsletterImage />
            <NewsletterForm>
                    <h1>Join Our Newsletter</h1>
                    <p>
                        We know it is hard to book your preferred weekend dates due to overwhelming demand. Be on our mailing list and be informed on our newest tiny houses and what’s coming up soon! 
                        <br/><br/>
                        More importantly, we always have exclusive offers and information for our Tiny Away family. Be the first to be informed.
                    </p>
                    <EmailPill>
                        <p>ENTER YOUR EMAIL</p>
                        <FontAwesomeIcon icon={ faArrowRight } className='icon' />
                    </EmailPill>
            </NewsletterForm>
        </NewsletterSection>
    )
}