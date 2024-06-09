import styled from 'styled-components'; 
import SearchBar from './homepage-SearchBar';

// functional component
function SearchArea() {
    return(
        <SearchAreaStyle id='bgimg'>
            <ContentArea>
                <h1>
                    Book & Experience Amazing <br/>
                    Tiny Houses
                </h1>
                <SearchBar />
            </ContentArea>
        </SearchAreaStyle>
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
    padding-top: 350px; 
    text-align: center; 
`

