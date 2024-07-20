import { FaqSectionWrapper } from "./faqPageStyles";
import SingleQuestion from "./SingleQuestion";

interface FaqSectionProps {
    id: string;
    title: string; 
    qna: []; 
}

export default function FaqSection({ title, qna, id }: FaqSectionProps) {

    return(
        <FaqSectionWrapper>
            <h1 id={id}>{ title }</h1>
            {   qna.map((set, index) => (
                <div key={ index }>
                    <SingleQuestion question={ set.question } answer={ set.answer } />
                </div>
            ))
            }
        </FaqSectionWrapper>
    )
}