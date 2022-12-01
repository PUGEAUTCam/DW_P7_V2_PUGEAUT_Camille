import styled from "styled-components"
import colors from "../StyleDefinition/colors"

export const LogoLogin = styled.img`
    margin-top: 25px;
        @media screen and (max-width: 768px) {
            width: 250px;
            margin-bottom: 98px;
        }
`
export const ImgCreatePost = styled.img`
    max-width: 316px;
    width: 80%;
`
export const ImgPost = styled.img`
    max-width: 323px;
    margin: 0px auto;
    width: 90%;
`
export const AvatarImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
export const IconAvatar = styled.div`
    border: 1px solid ${colors.blue1};
    border-radius: 27px;
    width: 54px;
    height: 54px;
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
        :hover{
            border-color: ${colors.blue1};
        }
        :active{
            border-color: ${colors.blue1};
        }
        @media screen and (max-width: 768px) {
            border-radius: 19px;
            width: 38px;
            height: 38px;
        }
`
export const AvatarProfile = styled.img`
    width: 204px;
    height: 204px;
    border-radius: 102px;
    object-fit: cover;
    border: 1px solid ${colors.primary};
        @media screen and (max-width: 996px) {
            width: 140px;
            height: 140px;
            border-radius: 70px;
        }
        @media screen and (max-width: 768px) {
            width: 100px;
            height: 100px;
            border-radius: 50px;
        }
`

//LOTTIE

export const LottieDiv = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 55px;
`

export const LottieDiv2 = styled.div`
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    padding-bottom: 30px;

`