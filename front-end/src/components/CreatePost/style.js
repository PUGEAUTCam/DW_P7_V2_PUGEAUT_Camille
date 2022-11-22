import styled from "styled-components";
import colors from "../StyleDefinition/colors"


export const ContainerCreatePost = styled.div`
    width: 730px;
    margin: 0px auto;
    margin-top: 36px;
    margin-bottom: 80px;
    border: 1px solid ${colors.border};
`
export const IconHello = styled.div`
    border: 1px solid rgb(225, 122, 122);
    width: 44px;
    height: 44px;
    border-radius: 22px;
    overflow: hidden;
`
export const HelloTitle = styled.h2`
    color: ${colors.primary};
    font-weight: 300;
    margin-left: 11px;
`
export const ContainerHello = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
`
///////////////
export const ContainerInputBtn = styled.div`
    width: 100%;
`
export const TextArea = styled.textarea`
    background: ${colors.bg1};
    width: 93%;
    height: 65px;
    border: none;
    resize: none;
    font-size: 16px;
    margin-left: 13px;
    color: white;
    overflow: auto;
    outline: none;
    box-shadow: none;
    font-family: unset;
`
export const ContainerImg = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: center;
    margin-bottom: 37px;
`
export const ContainerBtn = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 17px;
`


