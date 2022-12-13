import styled from "styled-components";

const inputHeight = 70
const sendButtonWidth = 100

export const ChatContainer = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
    background-color: red;
`
export const MessagesContainer = styled.div`
    height: 100vh;
    width: 50vw;
    background-color: green;   
`
export const ConversationsContainer = styled.div`
    height: 100vh;
    width: 50vw;
    background-color: blue;
`
export const BubblesContainer = styled.div`
    height: calc(100vh - ${inputHeight}px);
    width: 100%;
    background-color: yellow;
`
export const InputTextContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: ${inputHeight}px;
    width: 100%;
    background-color: #707070;
`

export const Input = styled.input`
    width: calc(100% - ${sendButtonWidth}px);
    padding-left: 20px;
    font-size: 38px;
    height: 100%;
`

export const SendButton = styled.button`
    background-color: blue;
    height: 100%;
    width: ${sendButtonWidth}px;
    color: white;
`
