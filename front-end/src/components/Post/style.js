import styled from "styled-components";
import colors from "../StyleDefinition/colors"

export const ContainerPost = styled.div`
    border: 1px solid ${colors.border};
    max-width: 730px;
    margin: 0px auto;
    width: 90%;
`

export const HeaderUser = styled.div`
    display: flex;
    align-items: center;
    margin-left: 13px;
    margin-top: 6px;
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
    margin-top: 17px;
`
export const ContainerDeleteUpdate = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    border-top: 1px solid #ffffff36;
    padding: 12px 0px;
`
