// import styled from 'styled-components'; 
import Navbar from '../components/sharedComponents/Navigation/Navbar';
import SampleSearchListings from '../components/listingComponents/SampleSearchListings';
import SearchListingsFilter from '../components/searchlistingspageComponents/SearchListingsFilter';

export default function ShowListings(props) {

    return(
        <>
            <Navbar /> 
            <SearchListingsFilter />
            <div>
                <h4>Filter Options Area</h4>
            </div>
            <SampleSearchListings />
        </>
    )
}