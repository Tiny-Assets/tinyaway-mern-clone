import { useContext, useEffect } from "react";
import { SearchFilterContext } from "../../../contexts/SearchFilterContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-regular-svg-icons";
import { CheckboxColor, SingleOption } from "../SearchResultsStyles";

interface AccessOptionProps {
    name: string; 
}

export default function AccessOptionSelector({ name }: AccessOptionProps) {
    const { accessType, setAccessType } = useContext(SearchFilterContext); 

    const handleClick = (e) => {
        const typename = e.currentTarget.id; 
        setAccessType(typename); 
    }

    useEffect(() => {
        console.log(accessType); 
    },[accessType]); 
    
    return(
        <>
            <SingleOption id={ name } onClick={ handleClick }>
                { accessType === name ? (
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