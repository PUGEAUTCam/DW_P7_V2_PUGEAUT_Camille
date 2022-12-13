import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { ConversationsContainer } from '../style';
import { useSelector } from "react-redux";
import { getConversations } from '../../../API';
import { AvatarImg } from '../../../components/StyleDefinition/picture';
import { IconHello } from '../../../components/CreatePost/style';

const Conversations = () => {
    const userStore = useSelector((state) => state.userStore)
    const [conversations, setConversations] = useState([]);

    useEffect(() => {
        getConversations(userStore.user._id).then((res) => setConversations(res.data))
    }, [])

    return (
        <ConversationsContainer>
            {conversations?.map((conv, index) => (

                <div key={index} style={{ display: "flex" }}>
                    <IconHello>
                        <AvatarImg src={conv.senderId.avatar} alt={"avatar de " + conv.senderId.firstname + " " + conv.senderId.name} />
                    </IconHello>
                    <p>{conv.senderId.firstname + " " + conv.senderId.name}</p>
                </div>

            ))}

        </ConversationsContainer>
    );
};

export default Conversations;