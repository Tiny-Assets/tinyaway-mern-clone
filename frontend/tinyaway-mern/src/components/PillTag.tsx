import styled from "styled-components"

interface PillTagProps {
    tagName: string; 
}

export default function PillTag({ tagName }: PillTagProps) {
    return(
        <PillDisplay>{ tagName }</PillDisplay>
    )
}

const PillDisplay = styled.div`
    font-size: 18px; 
    background-color: var(--corpYellow); 
    padding: 5px 25px; 
    border-radius: 2rem; 
`