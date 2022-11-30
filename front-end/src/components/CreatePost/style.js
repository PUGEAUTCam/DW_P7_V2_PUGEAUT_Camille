import styled from "styled-components";
import colors from "../StyleDefinition/colors"


export const ContainerCreatePost = styled.div`
    max-width: 730px;
    width: 90%;
    margin: 0px auto;
    margin-top: 36px;
    margin-bottom: 80px;
    border-radius: 6px;
    // background: rgb(70 35 21 / 8%);
    // border: 1px solid rgb(220 84 0 / 52%);
    background : rgb(34 33 33 / 36%);
    border: 1px solid rgb(220 0 0 / 52%);
        @media all and (max-width: 768px) {
            margin-bottom: 39px;
        }
`
export const IconHello = styled.div`
    border: 1px solid #24b6a9;
    //  rgb(225, 122, 122);
    width: 44px;
    height: 44px;
    border-radius: 22px;
    overflow: hidden;
        @media all and (max-width: 768px) {
            width: 36px;
            height: 36px;
            border-radius: 18px;
        }    
`
export const HelloTitle = styled.h2`
    color: ${colors.primary2};
    font-weight: 300;
    margin-left: 11px;

`
export const ContainerHello = styled.div`
    width: 98%;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
        @media screen and (max-width: 768px) {
            justify-content: center;
        }
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
    @media all and (max-width: 768px) {
        margin-right:0px;
    }
`


