import styled from "styled-components"
import colors from "../StyleDefinition/colors"

export const Button = styled.button`
    height: 39px;
    width: 164px;
    border-radius: 6px;
    background:  ${colors.btnBg};
    border: none;
    font-size: 19px;
    color: rgb(185 46 46);
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
    color: rgb(185 46 46);
    transition: all 300ms ease;

        :hover{
            color:${colors.blue1};
            transform: scale(1.03);
        }
`