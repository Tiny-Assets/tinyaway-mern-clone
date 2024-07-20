import styled from "styled-components";
import FaqHeader from "../components/faqcomponents/FaqHeader";
import FaqSection from "../components/faqcomponents/FaqSection";
import ContactSection from "../components/sharedcomponents/contactform/ContactSection";
import { faqBookingProcess } from "../assets/faqBookingProcess";
import { faqCheckinStay } from "../assets/faqCheckinStay";
import { faqCommunication } from "../assets/faqCommunication";
import { faqPaymentRefunds } from "../assets/faqPaymentRefunds";

export default function FaqPoliciesPage() {
    return(
        <>
        <PageWrapper>
            <FaqHeader />
            <FaqSection id='1' title='BOOKING PROCESS' qna={ faqBookingProcess }/>
            <FaqSection id='2' title='CHECK-IN AND STAY' qna={ faqCheckinStay }/>
            <FaqSection id='3' title='COMMUNICATION' qna={ faqCommunication }/>
            <FaqSection id='4' title='PAYMENTS & REFUNDS' qna={ faqPaymentRefunds }/>
        </PageWrapper>
        <ContactSection />
        </>
    )
}

const PageWrapper = styled.div`
    background-color: var(--corpGreyBG); 
    padding-bottom: 50px; 
`