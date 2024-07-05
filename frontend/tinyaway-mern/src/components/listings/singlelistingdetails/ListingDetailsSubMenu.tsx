import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { SubMenu, SubMenuTitle } from "./SingleListingStyles";

interface SubMenuProps {
    title: string; 
}

export default function ListingDetailsSubMenu({ title }: SubMenuProps) {
    return(
        <>
            <SubMenu>
                <SubMenuTitle>{ title }</SubMenuTitle>
                <FontAwesomeIcon icon={ faCaretDown } />
            </SubMenu>
        </>
    )
}