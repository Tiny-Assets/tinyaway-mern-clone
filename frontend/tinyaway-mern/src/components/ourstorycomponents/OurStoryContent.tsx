import { BrandsPart, DoubleColumnWrapper, FirstPara, ImageFeature, OurStoryWrapper, SecondPara } from "./OurStoryStyles";
import ContactSection from "./ContactSection";
import DemoImg from '../../assets/demoImg2.jpg'; 

export default function OurStoryContent() {
    return(
        <>
            <OurStoryWrapper>
                <h2>
                    “Those of us who live in the city lead a hectic, digital lifestyle. 
                    <br/>Most of the time, all we want is a getaway”
                </h2>
                <DoubleColumnWrapper>
                    <FirstPara>
                        The young man partnered with two friends, Dave and Jeff to build tiny houses and place them on land with beautiful scenery. Thus Tiny Away was born. It was born out of a desire to offer city dwellers a place to escape from the city and recharge in nature.
                    </FirstPara>
                    <SecondPara>
                        The tiny house movement started off in America and became an international trend. It is an architectural and social philosophy that advocates living simply in small, affordable and eco-friendly homes. In order to live in a smaller space, one would have to downsize and simplify their lives by reducing the amount of material possessions they have. As such, tiny houses help to reduce resource consumption and are a cost-effective and sustainable way of living.
                    </SecondPara>
                </DoubleColumnWrapper>
                <ImageFeature style={{ backgroundImage:`url(${ DemoImg })`}} />
            </OurStoryWrapper>
            <ContactSection />
            <BrandsPart />
        </>
    )
}