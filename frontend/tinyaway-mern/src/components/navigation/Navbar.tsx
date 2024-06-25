import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PillButton from '../PillButton';
import talogo from '../../assets/talogo.png'; 

export default function Navbar() {
    return(
        <Navblock>
            <img src={ talogo } alt='tiny-away-logo' style={{ width: '187px', height: '200px' }}/>
            <Links>
                <Link to='/'>HOME</Link>
                <ChangeParams>EN</ChangeParams>
                <ChangeParams>MYR(RM)</ChangeParams>
                <PillButton className='whitePill' buttonName='BOOK YOUR STAY' path='/book-your-stay' />
            </Links> 
        </Navblock>
    )
}

const Navblock = styled.div`
    background-color: black; 
    display: flex; 
    height: 120px; 
    align-items: center; 
    justify-content: space-between; 
    padding: 0px 45px; 
`

const Links = styled.div`
    color: white; 
    display: flex; 
    gap: 30px; 
    align-items: center; 
    font-size: 21px; 
`

const ChangeParams = styled.div`
    background-color: black; 
    color: white; 
`