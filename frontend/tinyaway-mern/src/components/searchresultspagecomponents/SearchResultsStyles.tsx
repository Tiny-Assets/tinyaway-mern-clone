import styled from "styled-components";

// Search Results Top Filter Bar Section
export const TogglePlacesAndActivities = styled.div`
    width: 13vw; 
    display: flex;  
    align-items: center; 
    justify-content: space-around; 
    font-size: 21px;
    font-weight: 900;  
`

export const PlacesAndActivitiesIcon = styled.div`
    background-color: var(--corpYellow); 
    height: 3vw;
    width: 3vw;
    font-size: 24px; 
    align-content: center; 
    text-align: center; 
    border-radius: 2rem;  
`

export const FiltersGrid = styled.div`
    position: relative; 
    display: grid; 
    grid-template-columns: repeat(10,1fr); 
    grid-templaterows: 1fr 1fr; 
    gap: 2%; 
    padding: 20px; 
    z-index: 1; 
`

export const LocationItem = styled.div`
    grid-row: 2; 
    grid-column: 2;
`

// Selection Filter Styles
export const FiltersWrapper = styled.div`
    background-color: white; 
    position: absolute; 
    justify-self: center; 
    height: 65vh; 
    width: 48%; 
    border-radius: 2rem; 
    z-index: 1; 
    margin-top: 100px; 
`

export const FiltersLayout = styled.div`
    padding: 50px; 
`

export const CloseMenuClicker = styled.div`
    color: var(--corpDarkGrey1); 
    display: flex; 
    justify-content: flex-end; 
    align-items: flex-end; 
    margin-top: 20px; 
`

export const TypeFilterWrapper = styled.div`
    color: var(--corpDarkGrey1); 
    align-items: center; 
    margin-top: 10px; 
    padding-bottom: 10px; 
    border-bottom: 1px solid var(--corpLightGrey1); 
`

export const TypeFilterTitle = styled.div`
    display: flex; 
    justify-content: space-between; 
    align-items: center; 
    
    p {
        font-size: 24px; 
        font-weight: 600; 
    }
`

export const FilterDropdownOptions = styled.div`
    display: flex; 
    flex-wrap: wrap; 
    gap: 30px;
    margin-top: 20px; 
`

export const SingleOption = styled.div`
    display: flex; 
    align-items: center; 
    gap: 10px; 
    font-size: 21px; 
`

export const CheckboxColor = styled.div`
    background-color: none; 

    .selected {
        background-color: var(--corpYellow); 
    }
`