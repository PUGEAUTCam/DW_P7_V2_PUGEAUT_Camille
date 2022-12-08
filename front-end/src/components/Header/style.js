import styled from "styled-components";
// import colors from "../StyleDefinition/colors"

export const ContainerHeader = styled.header`
    display: flex;
    z-index: 999;
    justify-content: space-between;
    position: fixed;
    top: 0px;
    width: 100%;
    max-width: 1440px;
    box-sizing: border-box;
    margin: auto;
    padding: 10px 0px;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
        @media screen and (max-width: 1450px) {
            padding: 10px 25px;
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
