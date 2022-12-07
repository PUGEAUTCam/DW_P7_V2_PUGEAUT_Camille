import styled from "styled-components";
import colors from "../StyleDefinition/colors"

export const ContainerPost = styled.div`
    border: 1px solid #ffffff29;
    max-width: 730px;
    margin: 0px auto;
    width: 90%;
    border-bottom: 1px solid #ffffffb8;
    background: rgb(68 68 68 / 15%);
        @media screen and (max-width: 768px) {
            background: ${colors.bg1};
        }
`
export const HeaderUser = styled.div`
    display: flex;
    align-items: center;
    margin-left: 21px;
    margin-top: 8px;
`
export const ContainerName = styled.div`
    margin-left: 11px;
    line-height: 5px;
    padding-top: 10px;
`

export const ContainerTxtImg = styled.div`
    display: flex;
    flex-direction: column;
`
export const ContainerIcon = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 10px 0px;
`
export const ContainerDeleteUpdate = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    border-top: 1px solid #ffffff36;
    padding: 12px 0px;
`
export const TextUser = styled.p`
transition: all 400ms ease;
    :hover{
        color: ${colors.blue1};
        transform: scale(1.02);  
    }
`
