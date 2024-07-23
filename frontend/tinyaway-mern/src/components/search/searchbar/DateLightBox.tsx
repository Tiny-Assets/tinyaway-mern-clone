import { LightBoxHeader, LightBoxWrapper } from "./SubmenuStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
//import "react-datepicker/dist/react-datepicker.css";

export default function DateLightBox() {
    return(
        <LightBoxWrapper>
            <LightBoxHeader>
                <h3>Select Dates</h3>
                <FontAwesomeIcon icon={ faX } />
            </LightBoxHeader>
        </LightBoxWrapper>
    )
}