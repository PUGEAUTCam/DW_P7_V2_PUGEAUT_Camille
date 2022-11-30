import styled from "styled-components";
import colors from "../StyleDefinition/colors"


export const ContainerBio = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
    margin: 0px 74px;
    padding-bottom: 60px;
        @media screen and (max-width: 768px) {
            margin: 0px 30px;
            margin-bottom: 46px;
            padding-bottom: 18px;
        }
        @media screen and (max-width: 992px) {
            margin-bottom: 46px;
        }
`
export const ModalInputContainer = styled.div`
    display: flex;
    flex-direction: column;
`
export const ContainerBtn = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 11px;
`

export const Background = styled.div`
    width: 100%;
    height: 100%;
    background: ${colors.bg1};
`

export const Label = styled.label`
    margin: 11px 15px 1px 15px;
`