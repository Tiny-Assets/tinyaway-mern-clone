import { FaqHeaderWrapper } from "./faqPageStyles";
import PillButton from "../sharedcomponents/genericpillbutton/PillButton";

export default function FaqHeader() {
    const scrollToSection = (cat) => {
        console.log(cat)
        const section = document.getElementById(cat); 
        if (section) {
            section.scrollIntoView({
                behavior: 'smooth'
            });
        } else {
            console.log('no such section'); 
        }
    }

    return(
        <FaqHeaderWrapper>
            <h1>FAQ</h1>
            <PillButton buttonName="BOOKING PROCESS" className="white" toDo={ () => {scrollToSection('1')} }/>
            <PillButton buttonName="CHECK-IN AND STAY" className="white" toDo={ () => {scrollToSection('2')} }/>
            <PillButton buttonName="COMMUNICATION" className="white" toDo={ () => {scrollToSection('3')} }/>
            <PillButton buttonName="PAYMENTS & REFUNDS" className="white" toDo={ () => {scrollToSection('4')} }/>
        </FaqHeaderWrapper>
    )
}