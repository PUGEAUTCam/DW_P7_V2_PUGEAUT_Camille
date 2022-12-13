import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from "axios";
import { ConversationsContainer } from '../style';
import { useSelector } from "react-redux";

const Conversations = () => {
    const userStore = useSelector((state) => state.userStore)
    const [conversations, setConversations] = useState([]);

    useEffect(() => {
        const getConversations = async () => {
            try {
                const res = await axios.get("http://localhost:5500/api/chat/conversations/" + userStore.user._id);
                setConversations(res.data);
                console.log(res.data)

            } catch (err) {
                console.log(err)
            }
        };
        getConversations();
    }, [userStore.user._id])





    return (
        <ConversationsContainer>
            {conversations?.map((conv, index) => (
                <div key={index}> {conv.members} </div>

            ))}

        </ConversationsContainer>
    );
};

export default Conversations;