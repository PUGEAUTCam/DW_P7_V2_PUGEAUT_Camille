import styled from "styled-components";
import colors from "../StyleDefinition/colors"

export const CoverImg = styled.img`
    width: 100%;
    height: 355px;
    object-fit: cover;
    border-radius: 11px;
    margin-top: 20px;
        @media all and (max-width: 996px) {
            height: 252px;
        }
        @media all and (max-width: 768px) {
            height: 179px;
            border-radius: 0px;
        }
`
export const SectionCover = styled.div`
    width: 100%;
    height: 480px;
`
export const ContainerAvatarBtn = styled.div`
    position: absolute;
    top: 236px;
    left: 57px;
    @media screen and (max-width: 996px) {
        top: 204px;
    }
    @media screen and (max-width: 768px) {
        top: 148px;
        left: 31px;
    }
`
export const ContainerBtnConfirmCover = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: flex-end;
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

export const ContainerbtnUpdate = styled.div`
    margin-top: -30px;
        @media screen and (max-width: 768px) {  
            margin-top: -11px;
        }
`

export const BtnUpdateCover2 = styled.label`
    color: white;
    transition: all 300ms ease;
        :hover{
            color:${colors.blue1};
            transform: scale(1.03);
        }
`

