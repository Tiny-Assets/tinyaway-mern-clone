import { SingleField } from "./SearchBarStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

interface SearchFieldProps {
    fieldName: string; 
    className?: string; 
    toDo?: () => void; 
    arrow?: boolean; 
    id?: string; 
}
export default function SearchField({ className, fieldName, toDo, arrow, id }: SearchFieldProps) {
    return(
        <SingleField className={ className } onClick={ toDo } id={ id } >
            <p>{ fieldName }</p>
            { arrow &&
                <FontAwesomeIcon icon={ faArrowRight } />
            }
        </SingleField>
    )
}
