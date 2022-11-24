import React, { useState } from 'react';
import { createComment } from '../../API';
import { AvatarImg } from '../StyleDefinition/picture';
import dayjs from 'dayjs';
import { ButtonComment, Input } from '../ButtonStyle/style';
import { CommentSection, ContainerInput } from './style';
import { IconHello } from '../CreatePost/style';
import { ContainerName, HeaderUser } from '../Post/style';
import { Date, Text } from '../Text';

const Comment = ({ post, onComment }) => {

    const [newComment, setNewComment] = useState('');

    const handlePost = async () => {
        let res = await createComment({ post, newComment })
        await onComment(res.data.comment)
        setNewComment("")
    }

    return (
        <div>
            <ContainerInput>
                <Input
                    type="text"
                    placeholder='Envie de commenter?'
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                />
                <ButtonComment onClick={handlePost}>✓</ButtonComment>
            </ContainerInput>

            {post.comments.map((comment, index) =>
                <CommentSection key={index}>
                    <HeaderUser>
                        <IconHello>
                            <AvatarImg src={comment.userId.avatar} alt={"avatar de " + post.userId?.firstname + " " + post.userId?.name} />
                        </IconHello>
                        <ContainerName style={{ paddingTop: 0 }}>
                            <p>{comment.userId.firstname + comment.userId.name}</p>
                            <Date>{dayjs(comment.createdAt).format("DD/MM/YYYY à HH:mm")}</Date>
                        </ContainerName>
                    </HeaderUser>
                    <Text style={{ margin: '12px 71px' }}>{comment.message}</Text>
                </CommentSection>
            )}
        </div>
    );
};

export default Comment;