import styled from "styled-components";

// Split Hero Styles
export const SplitHeroWrapper = styled.div`
    display: flex; 
`

export const SplitHeroImage = styled.div`
    height: 85vh; 
    width: 50%; 
    overflow: hidden; 
`

export const SplitHeroContent = styled.div`
    background-color: var(--corpDarkGrey1); 
    height: 85vh;
    width: 50%;     
    display: flex; 
    flex-direction: column; 
    align-items: center; 
    justify-content: center; 
    gap: 5%; 

    h1 {
        color: white; 
        font-weight: 700; 
    }

    p {
        color: white; 
        text-align: center; 
        font-size: 28px; 
    }
`

export const IconFlexBox = styled.div`
    display: flex; 
    gap: 10%; 
`

export const SingleColumn = styled.div`
    color: var(--corpDarkGrey2); 
    display: flex; 
    flex-direction: column; 
    align-items: center; 
    width: 250px; 
    font-size: 53px; 
    
    p {
        font-size: 20px; 
        margin-top: 20px; 
    }
`

// International Offices Styles
export const IntlOfficesWrapper = styled.div`
    margin: 50px 100px; 

    h2 {
        font-size: 34px; 
        font-weight: 700; 
    }
`

export const CountryIconsWrapper = styled.div`
    display: flex; 
    justify-content: center; 
    gap: 5%; 
    margin-top: 50px; 
`

export const CountryIcon = styled.div`
    height: 300px; 
    width: 530px; 
    display: flex; 
    flex-direction: column; 
    align-items: center; 
    justify-content: end; 
    
    img {
        height: 250px; 
        width: 500px; 
        object-fit: fit; 
        border-radius: 2rem; 
    }

    p {
        color: var(--corpDarkGrey2); 
        font-size: 34px; 
        font-weight: 600; 
        margin-top: 10px; 
    }
`

export const OfficeAddressWrapper = styled.div`
    display: flex; 
    gap: 5%; 
    margin-top: 30px; 
`

export const OfficeAddressBlock = styled.div`
    color: var(--corpDarkGrey2); 
    height: 250px; 
    width: 500px; 
    font-size: 48px; 
    // border: 3px solid red; 

    h3 {
        font-size: 32px; 
        margin-top: 10px; 
    }

    p {
        font-size: 20px; 
    }
`