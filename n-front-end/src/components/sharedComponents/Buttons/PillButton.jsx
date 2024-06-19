import { Link } from 'react-router-dom'; 
import styled from 'styled-components';

export default function PillButton({name, path}) {
    return(
        <PillDiv>
            <div>
                <Link to={ path }>{ name }</Link>
            </div>
        </PillDiv>
    )
}

const PillDiv = styled.div`
    align-content: center; 
    padding: 23px 43px; 
    margin-bottom: 100px; 
    border: 1px solid var(--corpLightGrey2); 
    border-radius: 2rem; 
`; 