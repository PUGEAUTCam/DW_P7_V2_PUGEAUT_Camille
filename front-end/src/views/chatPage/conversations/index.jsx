import React, { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { ConversationsContainer } from '../style';
import { useSelector } from "react-redux";
import { createNewMessage, getConversations, getMessages } from '../../../API';
import { AvatarImg } from '../../../components/StyleDefinition/picture';
import { IconHello } from '../../../components/CreatePost/style';
import { BubblesContainer, InputTextContainer, MessagesContainer, Input, SendButton } from '../style';
import { io } from "socket.io-client";
import dayjs from 'dayjs';


const Conversations = () => {
    const socket = useRef();
    const scrollRef = useRef();
    const userStore = useSelector((state) => state.userStore)
    const [conversations, setConversations] = useState(null);
    const [currentChat, setCurrentChat] = useState(null);
    const [messages, setMessages] = useState(null);
    const [newMessage, setNewMessage] = useState("");
    const [arrivalMessage, setArrivalMessage] = useState(null);

    useEffect(() => {
        socket.current = io("ws://localhost:8900");
        //Pour recuperer les msg instantannement 
        socket.current.on("getMessage", data => {
            console.log(data);
            setArrivalMessage({
                sender: data.senderId,
                text: data.text,
                createAt: Date.now(),
            })
        })
    }, [])

    useEffect(() => {
        arrivalMessage &&
            setMessages((prev) => [...prev, arrivalMessage])
    }, [arrivalMessage, currentChat])

    useEffect(() => {
        socket.current.emit("addUser", userStore.user._id)
        socket.current.on("getUsers", users => { console.log(users) })
    }, [])

    ////////////////////////////////
    useEffect(() => {
        getConversations(userStore.user._id).then((res) => setConversations(res.data))
    }, [])

    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [messages])

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

        socket?.current?.emit("sendMessage", {
            senderId: userStore.user._id,
            receiverId: currentChat.receiverId,
            text: newMessage,
        });

        setNewMessage("")
    }

    return (
        <div style={{ display: "flex" }}>

            <ConversationsContainer>
                {conversations?.map((conv, index) => {
                    let user = conv.senderId._id === userStore.user._id ? conv.receiverId : conv.senderId
                    return (
                        <div key={index} onClick={() => handleMessage(conv)} style={{ display: "flex", cursor: "pointer" }}>
                            <IconHello>
                                <AvatarImg src={user.avatar} alt={"avatar de " + user.firstname + " " + user?.name} />
                            </IconHello>
                            <p>{user.firstname + " " + user.name}</p>
                        </div>
                    )
                })}
            </ConversationsContainer>



            <MessagesContainer>

                {currentChat
                    ? <>
                        {messages?.map((message, index) => (
                            <BubblesContainer key={index} ref={scrollRef}>
                                <IconHello>
                                    <AvatarImg src={message.senderId?.avatar} alt={"avatar de " + message.senderId?.firstname + " " + message.senderId?.name} />
                                </IconHello>
                                <p>{dayjs(message.createdAt).format("DD/MM/YYYY à HH:mm")}</p>
                                <p> {message.senderId?.firstname + " " + message.senderId?.name}</p>
                                <p>{message.text}</p>
                            </BubblesContainer>
                        ))}
                    </>
                    : <p>Veuillez cliquer sur une conversation pour Group'chater</p>
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