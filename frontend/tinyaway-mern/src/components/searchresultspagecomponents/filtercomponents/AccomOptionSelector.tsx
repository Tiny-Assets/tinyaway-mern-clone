import { useContext, useEffect } from "react";
import { SearchFilterContext } from "../../../contexts/SearchFilterContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-regular-svg-icons";
import { CheckboxColor, SingleOption } from "../SearchResultsStyles";

interface AccomOptionProps {
    name: string; 
}

export default function AccomOptionSelector({ name }: AccomOptionProps) {
    const { accomType, setAccomType } = useContext(SearchFilterContext); 

    const handleClick = (e) => {
        const typename = e.currentTarget.id; 
        setAccomType(typename); 
    }

    useEffect(() => {
        console.log(accomType); 
    },[accomType]); 
    
    return(
        <>
            <SingleOption id={ name } onClick={ handleClick }>
                { accomType === name ? (
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