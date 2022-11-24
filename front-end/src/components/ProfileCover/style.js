import styled from "styled-components";
import colors from "../StyleDefinition/colors"

export const CoverImg = styled.img`
    width: 100%;
    height: 355px;
    object-fit: cover;
    border-radius: 11px;
    margin-top: 20px;
`
export const SectionCover = styled.div`
    width: 100%;
    height: 480px;
`
export const BtnUpdateCover = styled.label`
    color: #000000;
    position: absolute;
    bottom: 8px;
    right: 11px;
    transition: all 300ms ease;
        :hover{
            color:${colors.primary};
            transform: scale(1.03);
        }
`
export const BtnUpdateCover2 = styled.label`
    color: white;
    transition: all 300ms ease;
    margin-top: -30px;
        :hover{
            color:${colors.blue1};
            transform: scale(1.03);
        }
`

export const ContainerAvatarBtn = styled.div`
    position: absolute;
    top: 236px;
    left: 57px;
`