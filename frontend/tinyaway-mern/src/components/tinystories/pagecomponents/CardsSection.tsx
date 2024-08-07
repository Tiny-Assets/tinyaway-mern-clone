import { useState, useEffect } from "react"
import RenderPagination from "../../../sharedutilities/renderPagination";
import TinyStoryCard from "../TinyStoryCard";
import { ContentArea, ContentWrapper, StoryCardsArea } from "../TinyStoriesMainStyles";

export default function CardsSection() {
    const [allStories, setAllStories] = useState([]); 
    const [fetchStatus, setFetchStatus] = useState(false); 
    const [pageSelected, setPageSelected] = useState(1); 
    const [displayedStories, setDisplayedStories] = useState([]); 

    useEffect(() => {
        const url = 'http://localhost:4000/api/allstories'; 

        fetch(url)
            .then((res) => {
                return res.json(); 
            })
            .then((data) => {
                setAllStories(data);
                setFetchStatus(true); 
            }); 
    },[]); 
    
    const selectPage = (e) => {
        const pageNumber = e.target.innerText; 
        setPageSelected(pageNumber); 
    }

    useEffect(() => {
        console.log(pageSelected); 
    }, [pageSelected]); 

    useEffect(() => {
        const firstStory = (pageSelected - 1) * 12; 
        const lastStory = firstStory + 12; 
        setDisplayedStories(allStories.slice(firstStory, lastStory)); 
    },[pageSelected, allStories]); 

    return(
        <>
            { fetchStatus && 
                <ContentWrapper>
                    <ContentArea>
                        <p>{ allStories.length } Tiny Away Stories</p>
                        <StoryCardsArea>
                            {   displayedStories.map((story, index) => (
                                    <TinyStoryCard key={ index } storyInfo={ story } />
                            ))

                            }
                        </StoryCardsArea>
                    </ContentArea>
                    <RenderPagination dataQuantity={ allStories.length } btnClick={ selectPage } pageSelected={ pageSelected } />
                </ContentWrapper>
            }           
        </>
    )
}