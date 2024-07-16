import HeroBg from '../assets/demoHero.jpg'; 
import { HeroArea } from '../components/sharedcomponents/GenericHeroStyles';
import WhyHostSection from '../components/becomehostcomponents/WhyHostSection';
import SpareLand from '../components/becomehostcomponents/SpareLand';
import ContactSection from '../components/sharedcomponents/contactform/ContactSection';
import PillButton from '../components/sharedcomponents/genericpillbutton/PillButton';

export default function BecomeAHostPage() {
    const scrollToForm = () => {
        const form = document.getElementById('form'); 
        form?.scrollIntoView({
            behavior: "smooth"
        }); 
    }; 

    return(
        <>
            <HeroArea style={{ backgroundImage: `url(${ HeroBg })`}}>
                <h1>BECOME A HOST</h1>
                <p>
                    Bring your property to life and help people 
                    <br/> find soul-fulfilling moments in nature.
                </p>
                <PillButton buttonName='GET STARTED' toDo={ scrollToForm }/>
            </HeroArea>
            <SpareLand />
            <WhyHostSection />
            <ContactSection id='form'/>
        </>
    )
}