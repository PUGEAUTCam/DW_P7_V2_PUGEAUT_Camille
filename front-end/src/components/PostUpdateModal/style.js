import styled from "styled-components";
import colors from "../StyleDefinition/colors"

export const ModalSection = styled.div`
    width: 100%;
    height: 100%;
    background: ${colors.bg1};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    
`
export const ContainerImg = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 28px;
`

export const ImgModal = styled.img`
    width: 175px;
        @media all and (max-width: 768px) {
            width: 120px;
        }
`
export const ContainerBtnInputFile = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
`
