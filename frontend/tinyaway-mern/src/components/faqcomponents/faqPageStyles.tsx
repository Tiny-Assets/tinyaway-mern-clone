import styled from "styled-components";

export const FaqHeaderWrapper = styled.div`
    display: flex; 
    align-items: center; 
    gap: 2%; 
    padding: 20px 100px; 
`

export const FaqSectionWrapper = styled.div`
    padding: 0px 100px;  

    h1 {
        font-size: 32px;
        margin-top: 50px;  
        margin-bottom: 20px; 
    }
`

export const SingleQuestionWrapper = styled.div`
    // border: 1px solid blue; 
`

export const QuestionPart = styled.div`
    background-color: white; 
    display: flex; 
    align-items: center; 
    justify-content: space-between;
    padding: 15px 50px; 
    margin: 10px 0px; 
    border-radius: 2rem; 

    p {
        color: var(--corpDarkGrey2); 
        font-size: 24px; 
        font-weight: 500; 
    }
`

export const AnswerPart = styled.div`
    padding: 10px 50px; 
    white-space: pre;
`