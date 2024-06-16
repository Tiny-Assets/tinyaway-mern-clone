// import styled from 'styled-components'; 
import Navbar from '../components/sharedComponents/Navigation/Navbar';
import SampleSearchListings from '../components/listingComponents/SampleSearchListings';

export default function ShowListings() {

    return(
        <>
        <Navbar /> 
        <div>
            <h4>Filter Options Area</h4>
        </div>
        <SampleSearchListings />
        </>
    )
}