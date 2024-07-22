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
                    <TypeFilterTitle>
                        <p>ACCOMMODATION TYPE</p>
                    </TypeFilterTitle>
                    <AccomOptions />
                </TypeFilterWrapper>
                <TypeFilterWrapper>
                    <TypeFilterTitle>
                        <p>ESCAPE TYPE</p>
                    </TypeFilterTitle>
                        <EscapeOptions />
                </TypeFilterWrapper>
                <TypeFilterWrapper>
                    <TypeFilterTitle>
                        <p>GUEST ACCESS</p>
                    </TypeFilterTitle>
                        <AccessOptions />
                </TypeFilterWrapper>
                <TypeFilterWrapper>
                    <TypeFilterTitle>
                        <p>Rooms and Beds</p>
                    </TypeFilterTitle>
                        <RoomBedOptions />
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