import { FilterDropdownOptions } from "../SearchResultsStyles";
import AccessOptionSelector from "./AccessOptionSelector";

export default function AccessOptions() {

    return(
        <FilterDropdownOptions>
            <AccessOptionSelector name='4 WHEEL DRIVE' />
            <AccessOptionSelector name='2 WHEEL DRIVE' />
        </FilterDropdownOptions>
    )
}
