import { StoriesSection } from "./TinyHouseStoriesStyles"
import PillButton from "../sharedcomponents/genericpillbutton/PillButton"

export default function TinyStoriesSection() {
    return(
        <StoriesSection>
            <h1>TINY HOUSE STORIES</h1>
            <p>Discover destinations, curating experiences. These are stories on our tiny houses to help you find out what to do in each tiny house.</p>
            <PillButton buttonName='EXPLORE ALL OUR STORIES' className='noChange' path='/tiny-stories' />
        </StoriesSection>
    )
}