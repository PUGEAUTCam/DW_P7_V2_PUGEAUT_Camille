import styled from "styled-components"
import colors from "../StyleDefinition/colors"

export const AvatarImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
export const IconAvatar = styled.div`
    border: 1px  #ffffff7a solid;
    border-radius: 27px;
    width: 54px;
    height: 54px;
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

`
export const AvatarProfile = styled.img`
    width: 204px;
    height: 204px;
    border-radius: 102px;
    object-fit: cover;
    border: 1px solid ${colors.primary};
`
