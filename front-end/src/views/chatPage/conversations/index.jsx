import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { ConversationsContainer } from '../style';
import { useSelector } from "react-redux";
import { getConversations, getMessages } from '../../../API';
import { AvatarImg } from '../../../components/StyleDefinition/picture';
import { IconHello } from '../../../components/CreatePost/style';
import { BubblesContainer, InputTextContainer, MessagesContainer, Input, SendButton } from '../style';
import { format } from 'timeago.js'


const Conversations = () => {
    const userStore = useSelector((state) => state.userStore)
    const [conversations, setConversations] = useState([]);
    const [currentChat, setCurrentChat] = useState(null);
    const [messages, setMessages] = useState(null);

    useEffect(() => {
        getConversations(userStore.user._id).then((res) => setConversations(res.data))
    }, [])

    const handleMessage = (conv) => {
        setCurrentChat(conv)
        getMessages(conv._id).then((res) => setMessages(res.data))
    }


    return (
        <div style={{ display: "flex" }}>
            <ConversationsContainer>
                {conversations?.map((conv, index) => (
                    <div key={index} onClick={() => handleMessage(conv)} style={{ display: "flex", cursor: "pointer" }}>
                        <IconHello>
                            <AvatarImg src={conv.senderId.avatar} alt={"avatar de " + conv.senderId?.firstname + " " + conv.senderId?.name} />
                        </IconHello>
                        <p>{conv.senderId.firstname + " " + conv.senderId.name}</p>
                    </div>

                ))}

            </ConversationsContainer>





            <MessagesContainer>
                {currentChat
                    ? <>
                        {messages?.map((message, index) => (
                            <BubblesContainer key={index}>
                                <IconHello>
                                    <AvatarImg src={message.sender.avatar} alt={"avatar de " + message.sender?.firstname + " " + message.sender?.name} />
                                </IconHello>
                                <p>{format(message.createdAt)}</p>
                                <p>{message.text}</p>


                            </BubblesContainer>
                        ))}
                    </>
                    : <p>Veuillez cliquer sur une conversation pour group'chater</p>
                }

                <InputTextContainer>
                    <Input />
                    <SendButton>Envoyer</SendButton>
                </InputTextContainer>
            </MessagesContainer>
        </div>


    );
};

export default Conversations;