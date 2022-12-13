import React, { useState } from 'react';
import Layout from '../../components/layout';
import Conversations from './conversations';
import MessagesView from './messagesView';
import { ChatContainer } from './style';

const ChatPage = () => {

    const [activeConversation, setActiveConversation] = useState(null)


    return (
        <Layout>
            <ChatContainer>
                <Conversations />
                <MessagesView />
            </ChatContainer>
        </Layout >
    );
};

export default ChatPage;