import styled from 'styled-components'; 
import Navbar from '../sharedComponents/Navigation/Navbar';
import SearchBar from './homepage-SearchBar';
import { GuestProvider, RoomFieldProvider } from '../contexts/SearchBarContext';

// functional component
function SearchArea() {
    return(
        <GuestProvider><RoomFieldProvider>
            <SearchAreaStyle id='bgimg'>
                <Navbar />
                <ContentArea>
                    <h1>
                        Book & Experience Amazing <br/>
                        Tiny Houses
                    </h1>
                    <SearchBar />
                </ContentArea>
            </SearchAreaStyle>
        </RoomFieldProvider></GuestProvider>
    )
}

export default SearchArea; 

// styled elements
const SearchAreaStyle = styled.div`
    width: 100vw; 
    height: 1080px; 
    display: flex;
    flex-direction: column;
    align-items: center;  
    color: white; 
`
const ContentArea = styled.div`
    padding-top: 225px; 
    text-align: center; 
`

