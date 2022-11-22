import React, { useState } from 'react';
import { createComment } from '../../API';
import { AvatarImg, IconAvatar } from '../StyleDefinition/picture';
import dayjs from 'dayjs';

const Comment = ({ post, onComment }) => {

    const [newComment, setNewComment] = useState('');

    const handlePost = async () => {
        let res = await createComment({ post, newComment })
        await onComment(res.data.comment)
        setNewComment("")
    }

    return (
        <div>
            <input
                type="text"
                placeholder='Envie de commenter?'
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
            />
            <button onClick={handlePost}>Commenter</button>

            {post.comments.map((comment, index) =>
                <div key={index}>
                    <IconAvatar>
                        <AvatarImg src={comment.userId.avatar} alt={"avatar de " + post.userId?.firstname + " " + post.userId?.name} />
                    </IconAvatar>
                    <p>{comment.userId.firstname + comment.userId.name}</p>
                    <p>{comment.message}</p>
                    <p>{dayjs(comment.createdAt).format("DD/MM/YYYY à HH:mm")}</p>
                </div>
            )}
        </div>
    );
};

export default Comment;