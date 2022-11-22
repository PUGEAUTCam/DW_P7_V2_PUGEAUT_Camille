import React, { useState } from 'react';
import Conversations from './conversations';
import MessagesView from './messagesView';
import { ChatContainer } from './style';

const Chat = () => {

    const [activeConversation, setActiveConversation] = useState(null)


    return (
        <ChatContainer>
            <Conversations />
            <MessagesView />
        </ChatContainer>
    );
};

export default Chat;