import { FilterDropdownOptions } from "../SearchResultsStyles";
import AccomOptionSelector from "./AccomOptionSelector";

export default function AccomOptions() {

    return(
        <FilterDropdownOptions>
            <AccomOptionSelector name='TINY HOUSE' />
            <AccomOptionSelector name='GLAMPING' />
            <AccomOptionSelector name='GROUPS' />
        </FilterDropdownOptions>
    )
}
