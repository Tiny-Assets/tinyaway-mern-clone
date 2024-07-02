import { useState } from "react"
import { ReviewSectionStyles, ReviewImage, ReviewContent, Signature } from "./ReviewSectionStyles"
import demoImg1 from '../../assets/demoImg1.jpg'
import demoImg2 from '../../assets/demoImg2.jpg'

export default function ReviewSection() {
    const [reviewSlider, setReviewSlider] = useState(1); 

    const toggleReview = () => {
        if (reviewSlider === 1) {
            setReviewSlider(2); 
        } else {
            setReviewSlider(1); 
        }
    }

    return(
            <div onClick={ toggleReview }>
                { reviewSlider === 1 ? (
                    <>
                        <ReviewSectionStyles>
                            <ReviewImage>
                                <img src={ demoImg1 } alt='review-image' />
                            </ReviewImage>
                            <ReviewContent>
                                <h2>WHAT OUR GUESTS SAY...</h2>
                                <p className='review'>⭐⭐⭐⭐⭐</p>
                                <p className='review'>Great stay! Short but very sweet. Also appreciated the very last minute booking.</p>
                                <Signature>John Green</Signature>
                            </ReviewContent>
                        </ReviewSectionStyles>
                    </>) : (
                    <>
                        <ReviewSectionStyles>
                            <ReviewImage>
                                <img src={ demoImg2 } alt='review-image' />
                            </ReviewImage>
                            <ReviewContent>
                                <h2>WHAT OUR GUESTS SAY...</h2>
                                <p className='review'>⭐⭐⭐⭐⭐</p>
                                <p className='review'>Romantic and peaceful with a gorgeous view over the vineyards. Fantastic night away . Romantic atmosphere</p>
                                <Signature>Jane West</Signature>
                            </ReviewContent>
                        </ReviewSectionStyles>
                    </>)
                }
            </div>
    )
}