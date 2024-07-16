import { CardImg, ReasonCard, WhyHostCardSection, WhyHostReason, WhyHostSticky, WhyHostWrapper } from "./BecomeHostStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSackDollar } from "@fortawesome/free-solid-svg-icons";
import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import demoImg from '../../assets/demoImg2.jpg'; 


export default function WhyHostSection() {
    return(
        <WhyHostWrapper>
            <WhyHostSticky>
                <h2>WHY BECOME A HOST?</h2>
                <WhyHostReason>
                    <FontAwesomeIcon icon={ faSackDollar } />
                    <p>No Capital Required</p>
                </WhyHostReason>
                <WhyHostReason>
                    <FontAwesomeIcon icon={ faScrewdriverWrench } />
                    <p>Flexibility</p>
                </WhyHostReason>
                <WhyHostReason>
                    <FontAwesomeIcon icon={ faPeopleGroup } />
                    <p>Make New Friends</p>
                </WhyHostReason>
                <WhyHostReason>
                    <FontAwesomeIcon icon={ faPeopleGroup } />
                    <p>Be Your Best Host</p>
                </WhyHostReason>
                <WhyHostReason>
                    <FontAwesomeIcon icon={ faSackDollar } />
                    <p>Make Rental Income</p>
                </WhyHostReason>
            </WhyHostSticky>
            <WhyHostCardSection>
                <ReasonCard>
                    <CardImg style={{ backgroundImage:`url(${ demoImg })`}}/>
                    <div className='reasonTitle'>
                        <FontAwesomeIcon icon={ faSackDollar } />
                        <h2>No Capital Required</h2>
                    </div>
                    <div className='reasonDescription'>
                        <p>
                            You do not need to put in any upfront capital to start this. 
                            To reinforce a sense of escapism, we will provide you with a fully furnished tiny house,
                            with each one blending seamlessly into its natural surroundings and offering a local connection 
                            to the guest.
                        </p>
                    </div>
                </ReasonCard>
                <ReasonCard>
                    <CardImg style={{ backgroundImage:`url(${ demoImg })`}}/>
                    <div className='reasonTitle'>
                        <FontAwesomeIcon icon={ faSackDollar } />
                        <h2>Flexibility</h2>
                    </div>
                    <div className='reasonDescription'>
                        <p>
                        As our tiny house host, you have the option to receive a higher income by providing utilities (water, gas and electricity), and help to keep the house clean. You also have the flexibility to simply provide the land and we will do the rest.
                        </p>
                    </div>
                </ReasonCard>
                <ReasonCard>
                    <CardImg style={{ backgroundImage:`url(${ demoImg })`}}/>
                    <div className='reasonTitle'>
                        <FontAwesomeIcon icon={ faSackDollar } />
                        <h2>Make New Friends</h2>
                    </div>
                    <div className='reasonDescription'>
                        <p>
                        If you like meeting new friends from all over the world, this is perfect for you. As our tiny house hosts, you will be our key point of contact with guests and help ensure that they have an awesome stay.
                        </p>
                    </div>
                </ReasonCard>
                <ReasonCard>
                    <CardImg style={{ backgroundImage:`url(${ demoImg })`}}/>
                    <div className='reasonTitle'>
                        <FontAwesomeIcon icon={ faSackDollar } />
                        <h2>Be Your Best Host</h2>
                    </div>
                    <div className='reasonDescription'>
                        <p>
                        You’ve got the property and we’ve got the tools to help you host with confidence. We handle all the marketing, bookings and customer service. Together we curate a memorable experience at all stages of the guest journey.
                        </p>
                    </div>
                </ReasonCard>
                <ReasonCard>
                    <CardImg style={{ backgroundImage:`url(${ demoImg })`}}/>
                    <div className='reasonTitle'>
                        <FontAwesomeIcon icon={ faSackDollar } />
                        <h2>Make Rental Income</h2>
                    </div>
                    <div className='reasonDescription'>
                        <p>
                        Best of all, you will get to earn from the rental of the tiny house while inspiring people to get out of the city and reconnect with nature. If you are running a business on the property, it complements and bring you more customers.
                        </p>
                    </div>
                </ReasonCard>
            </WhyHostCardSection>
        </WhyHostWrapper>
    )
}