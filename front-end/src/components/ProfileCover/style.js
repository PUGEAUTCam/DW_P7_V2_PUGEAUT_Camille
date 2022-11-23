import styled from "styled-components";
import colors from "../StyleDefinition/colors"

export const CoverImg = styled.img`
    width: 100%;
    height: 355px;
    object-fit: cover;
    border-radius: 11px;
    position: relative;
    margin-top: 20px;
`
export const SectionCover = styled.div`
    width: 100%;
    height: 480px;
`
export const BtnUpdateCover = styled.label`
    color: #000000;
    position: absolute;
    bottom: 101px;
    left: 35px;
    transition: all 300ms ease;
        :hover{
            color:${colors.primary};
            transform: scale(1.03);
        }
`
export const BtnUpdateCover2 = styled.label`
    color: #000000;
    position: absolute;
   
    transition: all 300ms ease;
        :hover{
            color:${colors.primary};
            transform: scale(1.03);
        }
`