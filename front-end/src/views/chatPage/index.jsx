import React, { useState } from 'react';
import Layout from '../../components/layout';
import Conversations from './conversations';
import MessagesView from './messagesView';
import { ChatContainer } from './style';
import UserConnected from './userConnected';

const ChatPage = () => {

    const [activeConversation, setActiveConversation] = useState(null)


    return (
        <Layout>
            <ChatContainer>
                <Conversations />
                <MessagesView />
            </ChatContainer>
            <UserConnected />
        </Layout >
    );
};

export default ChatPage;