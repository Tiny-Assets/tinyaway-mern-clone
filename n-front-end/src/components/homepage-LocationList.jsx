import styled from 'styled-components'

export default function LocationList({ selectCountry }) {
    

    return(
        <LocationsAvailable>
            <Location name='AUSTRALIA' onClick={() => selectCountry('AUSTRALIA')}/>
            <Location name='MALAYSIA' onClick={() => selectCountry('MALAYSIA')}/>
            <Location name='NEW ZEALAND' onClick={() => selectCountry('NEW ZEALAND')}/>
            <Location name='TAIWAN' onClick={() => selectCountry('TAIWAN')}/>
            <Location name='EUROPE' onClick={() => selectCountry('EUROPE')}/>
        </LocationsAvailable>
    )
}

const LocationsAvailable = styled.div`
    background-color: white; 
    position: absolute; 
    top: 50%; 
    left: 0; 
    z-index: -1; 
    width: 100%; 
    padding-top: 30px; 
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
`; 