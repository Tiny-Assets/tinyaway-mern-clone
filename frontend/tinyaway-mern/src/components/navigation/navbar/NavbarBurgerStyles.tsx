import styled from "styled-components";

export const Navblock = styled.div`
    background-color: black; 
    display: flex; 
    height: 120px; 
    width: 100%; 
    align-items: center; 
    justify-content: space-between; 
`

export const Links = styled.div`
    color: white; 
    display: flex; 
    gap: 30px; 
    align-items: center; 
    font-size: 21px; 
    margin-right: 45px; 
`

export const ChangeParams = styled.div`
    background-color: black; 
    color: white; 
`

export const OpenBurger = styled.div`
    background-color: white; 
    width: 25%; 
    height: 100vh; 
    position: fixed; 
    right: 0px; 
    top: 0px; 
    z-index: 2; 
`

export const CloseMenu = styled.div`
    font-size: 30px; 
`

export const BurgerContent = styled.div`
    background-color: white; 
    display: flex; 
    flex-direction: column; 
    align-items: flex-end; 
    gap: 20px; 
    font-size: 21px; 
    margin: 80px 60px;
    cursor: pointer; 
`

export const SubMenu = styled.div`
    display: flex; 
    flex-direction: column; 
    align-items: flex-end; 
    gap: 20px; 
    padding-right: 60px; 
    border-right: 1px solid black; 
`