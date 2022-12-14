import React, { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { ConversationsContainer } from '../style';
import { useSelector } from "react-redux";
import { createNewMessage, getConversations, getMessages } from '../../../API';
import { AvatarImg } from '../../../components/StyleDefinition/picture';
import { IconHello } from '../../../components/CreatePost/style';
import { BubblesContainer, InputTextContainer, MessagesContainer, Input, SendButton } from '../style';
import { format } from 'timeago.js';
import { io } from "socket.io-client";

const Conversations = () => {
    const userStore = useSelector((state) => state.userStore)
    const [conversations, setConversations] = useState([]);
    const [currentChat, setCurrentChat] = useState(null);
    const [messages, setMessages] = useState(null);
    const [newMessage, setNewMessage] = useState("");
    const [socket, setSocket] = useState(null);
    const scrollRef = useRef();

    useEffect(() => {
        getConversations(userStore.user._id).then((res) => setConversations(res.data))
    }, [])

    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [messages])

    useEffect(() => {
        setSocket(io("ws://localhost:8900"))
    }, [])





    const handleMessage = (conv) => {
        setCurrentChat(conv)
        getMessages(conv._id).then((res) => setMessages(res.data))
    }

    const handleSubmit = (e) => {
        const message = {
            conversationId: currentChat._id,
            senderId: userStore.user._id,
            text: newMessage,
        }
        createNewMessage(message).then((res) => setMessages([...messages, res.data.newMessage]))
        setNewMessage("")
    }

    return (
        <div style={{ display: "flex" }}>

            <ConversationsContainer>
                {conversations?.map((conv, index) => (
                    <div key={index} onClick={() => handleMessage(conv)} style={{ display: "flex", cursor: "pointer" }}>
                        <IconHello>
                            <AvatarImg src={conv.senderId.avatar} alt={"avatar de " + conv.senderId.firstname + " " + conv.senderId?.name} />
                        </IconHello>
                        <p>{conv.senderId.firstname + " " + conv.senderId.name}</p>
                    </div>

                ))}
            </ConversationsContainer>



            <MessagesContainer>
                {currentChat
                    ? <>
                        {messages?.map((message, index) => (
                            <BubblesContainer key={index} ref={scrollRef}>
                                <IconHello>
                                    <AvatarImg src={message.senderId.avatar} alt={"avatar de " + message.senderId?.firstname + " " + message.senderId?.name} />
                                </IconHello>
                                <p>{format(message.createdAt)}</p>
                                <p>{message.text}</p>
                            </BubblesContainer>
                        ))}
                    </>
                    : <p>Veuillez cliquer sur une conversation pour group'chater</p>
                }

                <InputTextContainer>
                    <Input
                        onChange={(e) => setNewMessage(e.target.value)}
                        value={newMessage}
                    />
                    <SendButton onClick={handleSubmit}>Envoyer</SendButton>
                </InputTextContainer>
            </MessagesContainer>
        </div>


    );
};

export default Conversations;