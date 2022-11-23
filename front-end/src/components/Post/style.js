import styled from "styled-components";
import colors from "../StyleDefinition/colors"

export const ContainerPost = styled.div`
    border: 1px solid ${colors.border};
    width: 730px;
    margin: 0px auto;
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
`
