import { useState, useContext, useEffect } from "react";
import { toggleState } from "../../../sharedutilities/toggleState";
import { TypeFilterWrapper, CloseMenuClicker, FiltersLayout, FiltersWrapper, TypeFilterTitle } from "../SearchResultsStyles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import AccomOptions from "./AccomOptions";
import EscapeOptions from "./EscapeOptions";
import AccessOptions from "./AccessOptions";
import RoomBedOptions from "./RoomBedOptions";
import { LocationContext } from "../../../contexts/LocationContext";
import { SearchFilterContext } from "../../../contexts/SearchFilterContext";

interface FiltersMenuProps {
    closeMenu: () => void; 
}

export default function FiltersMenu({ closeMenu }: FiltersMenuProps) { 
    const [accomOpen, setAccomOpen] = useState(false); 
    const [escapeOpen, setEscapeOpen] = useState(false); 
    const [accessOpen, setAccessOpen] = useState(false); 
    const [roomBedOpen, setRoomBedOpen] = useState(false); 

    const { selectedLocation } = useContext(LocationContext); 
    const { accomType, escapeType, accessType } = useContext(SearchFilterContext); 

    let queryArray = []; 
    let query = ''; 

    useEffect(() => {
        if (accomType) {
            queryArray.push(``)
        }
    })

    return(
        <FiltersWrapper>
            <FiltersLayout>
                <TypeFilterWrapper>
                    <TypeFilterTitle  onClick={ toggleState(setAccomOpen) }>
                        <p>ACCOMMODATION TYPE</p>
                        <FontAwesomeIcon icon={ faCaretDown } />
                    </TypeFilterTitle>
                        {   accomOpen &&
                                <AccomOptions />
                        }
                </TypeFilterWrapper>
                <TypeFilterWrapper>
                    <TypeFilterTitle onClick={ toggleState(setEscapeOpen) }>
                        <p>ESCAPE TYPE</p>
                        <FontAwesomeIcon icon={ faCaretDown } />
                    </TypeFilterTitle>
                        {   escapeOpen &&
                                <EscapeOptions />
                        }
                </TypeFilterWrapper>
                <TypeFilterWrapper>
                    <TypeFilterTitle onClick={ toggleState(setAccessOpen) }>
                        <p>GUEST ACCESS</p>
                        <FontAwesomeIcon icon={ faCaretDown } />
                    </TypeFilterTitle>
                        {   accessOpen &&
                                <AccessOptions />
                        }
                </TypeFilterWrapper>
                <TypeFilterWrapper>
                    <TypeFilterTitle onClick={ toggleState(setRoomBedOpen) }>
                        <p>Rooms and Beds</p>
                        <FontAwesomeIcon icon={ faCaretDown } />
                    </TypeFilterTitle>
                        {   roomBedOpen &&
                                <RoomBedOptions />
                        }
                </TypeFilterWrapper>
                <TypeFilterWrapper>
                    <p>Bringing pets?</p>
                </TypeFilterWrapper>

                <CloseMenuClicker onClick={ closeMenu }>
                    <p>CLOSE</p>
                </CloseMenuClicker>
            </FiltersLayout>
        </FiltersWrapper>
    )
}