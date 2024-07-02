import { DisplayPillStyles } from "./DisplayPillStyles";

interface PillProps {
    tagName: string; 
    className?: string; 
}

export default function DisplayPill({ tagName, className }: PillProps) {
    return(
        <DisplayPillStyles className={ className }>
            { tagName }
        </DisplayPillStyles>
    )
}

