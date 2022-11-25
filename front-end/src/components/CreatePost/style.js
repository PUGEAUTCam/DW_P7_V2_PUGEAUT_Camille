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
    color: ${colors.primary2};
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
    margin-right: 47px;
`


