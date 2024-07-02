import styled from "styled-components"
import NewsletterImg from '../../assets/newsletterImg.jpg'; 

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
                    <EmailPill>ENTER YOUR EMAIL</EmailPill>
            </NewsletterForm>
        </NewsletterSection>
    )
}

const NewsletterSection = styled.div`
    background-color: var(--corpGreyBG); 
    height: 500px; 
    width: 100vw;
    display: flex;
    gap: 100px; 
    padding-bottom: 10px;
`

const NewsletterImage = styled.div`
    background-image: url(${NewsletterImg});
    background-size: cover;
    background-position: center;  
    width: 50%;  
`

const NewsletterForm = styled.div`
    color: var(--corpDarkGrey1); 
    width: 40%; 
    display: flex; 
    flex-direction: column; 
    justify-content: center; 
    gap: 40px;
    font-size: 18px; 

    h1 {
        font-size: 64px; 
        color: var(--corpDarkGrey1); 
        font-family: "Work Sans"; 
        font-weight: 600; 
    }
`

const EmailPill = styled.div`
    background-color: white; 
    color: var(--corpDarkGrey1); 
    font-size: 21px; 
    padding: 15px 30px; 
    width: 70%; 
    border-radius: 2rem; 
`