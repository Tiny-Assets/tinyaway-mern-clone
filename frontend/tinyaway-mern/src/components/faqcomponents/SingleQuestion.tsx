import { useState } from "react";
import { AnswerPart, QuestionPart, SingleQuestionWrapper } from "./faqPageStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { toggleState } from "../../sharedutilities/toggleState";

interface SingleQuestionProps {
    question: string; 
    answer: string; 
}

export default function SingleQuestion({ question, answer }: SingleQuestionProps) {
    const [seeAnswer, setSeeAnswer] = useState(false); 


    return(
        <SingleQuestionWrapper onClick={ toggleState(setSeeAnswer) }>
            <QuestionPart>
                <p>{ question }</p>
                <FontAwesomeIcon icon={ faCaretDown } />
            </QuestionPart>
            { seeAnswer &&
                <AnswerPart>
                    <p>{ answer }</p>
                </AnswerPart>
            }
        </SingleQuestionWrapper>
    )
}