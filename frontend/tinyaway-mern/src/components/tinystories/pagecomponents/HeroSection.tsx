import { HeroArea } from '../TinyStoriesMainStyles';
import DemoHero from '../../../assets/demoHero.jpg'; 

export default function HeroSection() {
    return(
        <HeroArea style={{ backgroundImage: `url(${ DemoHero })`}}>
            <h1>TINY AWAY STORIES</h1>
            <p>
                Discover destinations, curating experiences. 
                <br/>    
                These are stories on our tiny houses to help you find out what to do in each tiny house.
            </p>
        </HeroArea>
    )
}