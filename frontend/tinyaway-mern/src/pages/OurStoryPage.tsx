import { HeroArea } from "../components/sharedcomponents/GenericHeroStyles"; 
import OurStoryContent from "../components/ourstorycomponents/OurStoryContent";
import DemoHero from '../assets/demoHero.jpg'; 

export default function OurStoryPage() {
    return(
        <>
            <HeroArea style={{ backgroundImage:`url(${ DemoHero })`}}>
                <h1>OUR TINY STORY</h1>
                <p>
                It all started in 2017 when a young man named Adrian was on vacation at the picturesque
                <br/>
                Great Ocean Road. He loved the beautiful coastal scenery and felt that this was exactly what 
                <br/>
                city dwellers would need in order to re-energise ourselves.
                </p>
            </HeroArea>
            <OurStoryContent />
        </>
    )
}