import styled from "styled-components"
import colors from "../StyleDefinition/colors"

export const Button = styled.button`
    height: 39px;
    width: 164px;
    border-radius: 6px;
    background:  ${colors.btnBg};
    border: none;
    font-size: 19px;
    color:rgb(230 231 231);;
    margin-left: 20px;
    transition: all 300ms ease;
        :hover{
            color:${colors.blue1};
            transform: scale(1.01);
        }
        @media screen and (max-width: 768px) {
            height: 32px;
            width: 100px;
            font-size: 16px;
            margin-left: 10px;
        }
`
export const ButtonTurquoise = styled.button`
    height: 39px;
    width: 164px;
    border-radius: 6px;
    background:#000000;
    border: none;
    font-size: 19px;
    margin-left: 8px;
    color: ${colors.blue1};
    transition: all 300ms ease;
        :hover{
            color:${colors.primary};
            transform: scale(1.01);
        }
        @media screen and (max-width: 768px) {
                height: 28px;
                width: 88px;
                font-size: 14px;
        }
`
export const ButtonDeco = styled.button`
    height: 32px;
    width: 117px;
    border-radius: 3px;
    background:  ${colors.btnBg};
    border: none;
    font-size: 18px;
    margin-top: 7px;
    color: ${colors.primary};
    transition: all 300ms ease;
        :hover{
            color:${colors.blue1};
            transform: scale(1.01);
        }
        @media screen and (max-width: 768px) {
            height: 31px;
            width: 106px;
            font-size: 16px;
        }
`
export const ButtonDelete = styled.button`
    height: 38px;
    width: 36px;
    border-radius: 0px 17px 17px 0px;
    background: ${colors.btnBg};
    border: none;
    font-size: 20px;
    color: ${colors.primary};
    transition: all 300ms ease;
        :hover{
            color:${colors.blue1};
            transform: scale(1.03);
        }
`
export const ButtonDeleteTurquoise = styled.button`
    height: 38px;
    width: 36px;
    border-radius: 0px 17px 17px 0px;
    background: #000000;
    border: none;
    font-size: 20px;
    color: ${colors.blue1};
    transition: all 300ms ease;
        :hover{
            color:${colors.primary};
            transform: scale(1.03);
        }
        @media screen and (max-width: 768px) {
            height: 28px;
            width: 28px;
            font-size: 16px;
        }
`
export const ButtonComment = styled.button`
    height: 26px;
    width: 26px;
    border-radius: 13px;
    background: ${colors.btnBg};
    border: none;
    font-size: 20px;
    color: #e35503;
    margin-left: 12px;
    transition: all 300ms ease;
        :hover{
            color:${colors.blue1};
            transform: scale(1.03);
        }
`
export const ButtonAvatar = styled.button`
height: 26px;
width: 106px;
border-radius: 6px;
background: #323235ba;
border: none;
font-size: 17px;
margin-left: 32px;
color: rgb(213 23 23);
transition: all 300ms ease;
        :hover{
            color:${colors.blue1};
            transform: scale(1.03);
        }
`

//INPUT
export const Input = styled.textarea`
    background: rgb(24 23 23 / 64%); 
    border: none;
    resize: none;
    font-size: 16px;
    padding-left: 8px;
    color: white;
    overflow: auto;
    outline: none;
    box-shadow: none;
    font-family: unset;
    max-width: 457px;
    width: 76%;
    @media all and (max-width: 768px) {
        font-size: 14px;
        background: ${colors.bg1};
    }
`
export const InputModal = styled.input`
    background: ${colors.bg1};
    height: 40px;
    max-width: 495px;
    width: 80%;
    margin-left: 13px;
    border: none;
    resize: none;
    font-size: 16px;
    color: white;
    overflow: auto;
    outline: none;
    box-shadow: none;
    font-family: unset;
    border-bottom: 1px solid #ffffffad;
        @media screen and (max-width: 768px) {
            margin-left: 0px;
            width: 100%;
            font-size: 14px;
            padding-left: 16px;
`
export const InputForm = styled.input`
    background: ${colors.bg1};
    border: none;
    resize: none;
    font-size: 16px;
    color: white;
    overflow: auto;
    outline: none;
    box-shadow: none;
    font-family: unset;   
    width: 327px;
    border-bottom: 1px solid ${colors.primary};
    margin-top: 40px;
    padding-bottom: 9px;
        @media all and (max-width: 768px) {
            font-size: 13px;
        }
`
export const TextArea = styled.textarea`
    background: rgb(70 35 21 / 3%);
    // rgb(34 33 33 / 25%);
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
        ::placeholder{
            color: #cdcdcd;
        }
        @media screen and (max-width: 768px) {
            text-align: center;
            font-size: 13px;
      }
`

export const TextArea2 = styled.textarea`
    background: ${colors.bg1};
    max-width: 1085px;
    width: 90%;
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
        @media screen and (max-width: 768px) {
            margin-left: 0px;
            width: 100%;
            font-size: 13px;
            padding-left: 16px;
        }
`

export const TextAreaModal = styled.textarea`
    background: ${colors.bg1};
    border: none;
    resize: none;
    font-size: 17px;
    color: white;
    overflow: auto;
    outline: none;
    box-shadow: none;
    font-family: unset;
    border: 1px solid #ffffff5c;
    padding: 14px;
    max-width: 700px;
    width: 100%;
    box-sizing: border-box;
        @media screen and (max-width: 768px) {
            font-size: 13px;
        }

`