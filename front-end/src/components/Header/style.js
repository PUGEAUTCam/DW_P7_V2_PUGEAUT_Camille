import styled from "styled-components";
// import colors from "../StyleDefinition/colors"

export const ContainerHeader = styled.header`
    display: flex;
    justify-content: space-between;
    // position: fixed;
    width: 100%;
    left: 0;
    box-sizing: border-box;
    margin-top: 6px;
        @media screen and (max-width: 1450px) {
            padding: 0px 25px;
        }
        @media screen and (max-width: 768px) {
            flex-direction: column;
            align-items: center;
        }
`

export const Logo = styled.img`
    width: 307px;
    padding-top: 10px;  
        @media screen and (max-width: 768px) {
            width: 221px;
        }
`

export const NavBar = styled.nav`
    display: flex;
`
