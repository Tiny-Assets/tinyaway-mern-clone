import { AuthorName, FakeImage, FakeProfilePic, SingleStoryCard, StoryCardTitle, StoryHeader, StoryInfo } from "./TinyStoriesMainStyles";
import DemoImage1 from '../../assets/demoImg1.jpg'; 

interface TinyStoryCardProps {
    storyInfo: () => void 
}

export default function TinyStoryCard({ storyInfo }: TinyStoryCardProps) {
    return(
        <>
            <SingleStoryCard>
                <StoryCardTitle>
                    <FakeProfilePic />
                    <StoryInfo>
                        <AuthorName>Story by <strong>{ storyInfo.influencer_name }</strong></AuthorName>
                        <StoryHeader>{ storyInfo.title.toUpperCase() }</StoryHeader>
                    </StoryInfo>
                </StoryCardTitle>
                <FakeImage src={ DemoImage1 } alt='img'/>
                <div>
                    <br/>
                    Need access to call from live database
                </div>
            </SingleStoryCard>
        </>
    )
}