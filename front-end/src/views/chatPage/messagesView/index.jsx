import React from 'react';
import {
    BubblesContainer,
    InputTextContainer,
    MessagesContainer,
    Input,
    SendButton
} from '../style';


//Partie messages avec les bulles de conversations
const MessagesView = () => {
    return (
        <MessagesContainer>

            <BubblesContainer>

            </BubblesContainer>



            <InputTextContainer>
                <Input />
                <SendButton>Envoyer</SendButton>
            </InputTextContainer>

        </MessagesContainer>
    );
};

export default MessagesView;