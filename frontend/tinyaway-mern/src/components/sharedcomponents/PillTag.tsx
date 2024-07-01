import styled from "styled-components"

interface PillTagProps {
    tagName: string; 
    className?: string; 
}

export default function PillTag({ tagName, className }: PillTagProps) {
    return(
        <PillDisplay className={ className }>
            { tagName }
        </PillDisplay>
    )
}

const PillDisplay = styled.div`
    font-size: 18px; 
    background-color: var(--corpYellow); 
    padding: 5px 25px; 
    border-radius: 2rem; 

    &.plainTag {
        background-color: white; 
        font-size: 21px; 
        border: 1px solid var(--corpLightGrey2); 
    }
`