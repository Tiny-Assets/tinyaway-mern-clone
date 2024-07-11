import { useState, useEffect } from "react"
import { StoriesSection, TinyStoriesWrapper } from "./TinyHouseStoriesSectionStyles"
import PillButton from "../../sharedcomponents/genericpillbutton/PillButton"
import TinyStoryCard from "../TinyStoryCard"

export default function TinyStoriesSection() {
    const [storiesArray, setStoriesArray] = useState([]); 
    const [fetchStatus, setFetchStatus] = useState(false); 
    const url = 'http://localhost:4000/api/storiessection'

    useEffect(() => {
        fetch(url)
            .then(res => {
                if (res.ok) {
                    return res.json(); 
                } else {
                    throw new Error('Network response was not ok.');
                }
            })
            .then(data => {
                setStoriesArray(data); 
                setFetchStatus(true); 
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
        },[]); 

    return(
        <StoriesSection>
            <h1>TINY HOUSE STORIES</h1>
            <p>Discover destinations, curating experiences. These are stories on our tiny houses to help you find out what to do in each tiny house.</p>
            <TinyStoriesWrapper>
                { fetchStatus &&
                    storiesArray.map((story, index) => (
                        <TinyStoryCard key={ index } storyInfo={ story }/>
                    ))
                }
            </TinyStoriesWrapper>
            <PillButton buttonName='EXPLORE ALL OUR STORIES' className='white' path='/tiny-stories' />
        </StoriesSection>
    )
}