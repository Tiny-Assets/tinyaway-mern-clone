import { useContext, useEffect } from "react";
import { SearchFilterContext } from "../../../contexts/SearchFilterContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-regular-svg-icons";
import { CheckboxColor, SingleOption } from "../SearchResultsStyles";

interface EscapeOptionProps {
    name: string; 
}

export default function EscapeOptionSelector({ name }: EscapeOptionProps) {
    const { escapeType, setEscapeType } = useContext(SearchFilterContext); 

    const handleClick = (e) => {
        const typename = e.currentTarget.id; 
        setEscapeType(typename); 
    }

    useEffect(() => {
        console.log(escapeType); 
    },[escapeType]); 
    
    return(
        <>
            <SingleOption id={ name } onClick={ handleClick }>
                { escapeType === name ? (
                    <><CheckboxColor>
                        <FontAwesomeIcon icon={ faSquare } className='selected' />
                    </CheckboxColor>
                        <p>{ name }</p>
                    </>
                ) : (
                    <>
                        <FontAwesomeIcon icon={ faSquare } />
                        <p>{ name }</p>
                    </>
                )}
            </SingleOption>
        </>
    )
}