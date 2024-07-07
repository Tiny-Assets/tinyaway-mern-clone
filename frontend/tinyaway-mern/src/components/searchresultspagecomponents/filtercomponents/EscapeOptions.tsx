import { FilterDropdownOptions } from "../SearchResultsStyles";
import EscapeOptionSelector from "./EscapeOptionSelector";

export default function EscapeOptions() {

    return(
        <FilterDropdownOptions>
            <EscapeOptionSelector name='ADVENTUROUS ESCAPE' />
            <EscapeOptionSelector name='ROMANTIC GETAWAY' />
            <EscapeOptionSelector name='FAMILY GET TOGETHER' />
            <EscapeOptionSelector name='DISCOVER NATURE' />
        </FilterDropdownOptions>
    )
}
