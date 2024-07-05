import styled from "styled-components";

export const FooterBox = styled.div`
    background-color: black; 
    color: white; 
    width: 100%; 
    display: flex; 
    flex-direction: column; 
    align-items: center;
    justify-content: center; 
`

export const FooterTop = styled.div`
    background-color: black; 
    display: flex; 
    width: 90%; 
    border-bottom: 1px solid var(--corpDarkGrey1); 
`

export const FooterBottom = styled.div`
    width: 90%; 
    display: flex; 
    justify-content: space-between;
    gap: 100px; 
    margin-top: 50px; 
    padding-bottom: 30px; 
`

export const LinkSection = styled.div`
    width: 700px; 
    display: flex; 
    gap: 150px; 
`
export const BottomTitle = styled.div`
    font-size: 28px;
    font-weight: 600; 
    margin-bottom: 50px; 
`

export const LogoContainer = styled.div`
    display: flex; 
    gap: 100px; 
    width: 50%; 
`

export const LogoBox = styled.div`
    background-size: cover; 
    height: 180px; 
    width: 250px; 
    padding-bottom: 50px; 
    overflow: hidden; 
`

export const Description = styled.div`
    width: 750px; 
    font-size: 21px; 
    font-weight: 300; 
    text-align: left; 
    align-content: center;
    margin: 50px 0px;  
    padding-left: 100px; 
    border-left: 1px solid var(--corpDarkGrey1); 
`