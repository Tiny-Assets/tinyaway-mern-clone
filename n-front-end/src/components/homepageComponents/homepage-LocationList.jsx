import { useEffect, useState, useContext } from 'react';
import styled from 'styled-components'

export default function LocationList() {
    const [selectedCountry, setSelectedCountry] = useState(null); 

    const thisCountry = (countryName) => {
        setSelectedCountry(countryName); 
    }

    useEffect(() => {
        console.log(`Selected country is: ${selectedCountry} `)
        ,[selectedCountry]
    }); 

    return(
        <LocationsAvailable>
            <Location name='AUSTRALIA' onClick={() => thisCountry('AUSTRALIA') } className={ selectedCountry === 'AUSTRALIA' ? 'selected' : ''}/>
            <Location name='MALAYSIA' onClick={() => thisCountry('MALAYSIA')} className={ selectedCountry === 'MALAYSIA' ? 'selected' : ''}/>
            <Location name='NEW ZEALAND' onClick={() => thisCountry('NEW ZEALAND')} className={ selectedCountry === 'NEW ZEALAND' ? 'selected' : ''}/>
            <Location name='TAIWAN' onClick={() => thisCountry('TAIWAN')} className={ selectedCountry === 'TAIWAN' ? 'selected' : ''}/>
            <Location name='EUROPE' onClick={() => thisCountry('EUROPE') } className={ selectedCountry === 'EUROPE' ? 'selected' : ''}/>
        </LocationsAvailable>
    ); 
}

const LocationsAvailable = styled.div`
    background-color: white; 
    padding-bottom: 10px; 
    border-bottom-left-radius: 2rem; 
    border-bottom-right-radius: 2rem; 
    text-align: left; 
    
`;
const Location = styled.div`
    padding: 10px 40px; 
    color: var(--corpDarkGrey1); 

    &::before {
        content:'${props => props.name}';
    }

    &.selected {
        background-color: var(--corpDarkGrey1); 
        color: white; 
    }
`; 