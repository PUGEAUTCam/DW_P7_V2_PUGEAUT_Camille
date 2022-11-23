import styled from "styled-components"
import colors from "../StyleDefinition/colors"

export const Button = styled.button`
    height: 39px;
    width: 164px;
    border-radius: 6px;
    background:  ${colors.btnBg};
    border: none;
    font-size: 19px;
    color: ${colors.primary};
    margin-left: 20px;
    transition: all 300ms ease;

        :hover{
            color:${colors.blue1};
            transform: scale(1.01);
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

export const ButtonComment = styled.button`
    height: 26px;
    width: 26px;
    border-radius: 13px;
    background: ${colors.btnBg};
    border: none;
    font-size: 20px;
    color: ${colors.blue1};
    transition: all 300ms ease;
    margin-bottom: 14px;

        :hover{
            color:${colors.primary};
            transform: scale(1.03);
        }
`

//INPUT
export const Input = styled.textarea`
    background: ${colors.bg1};
    border: none;
    resize: none;
    font-size: 16px;
    color: white;
    overflow: auto;
    outline: none;
    box-shadow: none;
    font-family: unset;
    // max-width: 468px;
    // width: 100%;
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

