import React, { useState } from 'react';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { ContainerName, ContainerPost, ContainerTxtImg } from './style';
import { AvatarImg, IconAvatar } from '../StyleDefinition/picture';
import dayjs from 'dayjs';
import { useSelector } from "react-redux";
import { deletePost, likePost } from '../../API';
import PostUpdateModal from '../PostUpdateModal';
import Comment from '../Comment';
import { useNavigate } from 'react-router-dom';
import { Date, Text } from '../Text/index';

const Post = ({ post, index, onUpdate, onLike, onDelete, onComment }) => {
    const navigate = useNavigate();

    const userStore = useSelector((state) => state.userStore);
    const [openComment, setOpenComment] = useState(false);

    const handleDeletePost = async (post) => {
        let res = await deletePost(post)
        onDelete(res.data)
    }

    const handleLike = async (post) => {
        let res = await likePost(post)
        onLike(res.data)
    }

    return (
        <ContainerPost key={index}>
            <div >
                <div style={{ display: "flex", alignItems: "center" }}>
                    <IconAvatar style={{ border: "1px solid #24b6a9" }} onClick={() => navigate(`/profile?id=${post.userId._id}`)}>
                        <AvatarImg src={post.userId.avatar} alt={"avatar de " + post.userId?.firstname + " " + post.userId?.name} />
                    </IconAvatar>

                    <ContainerName>
                        <p onClick={() => navigate(`/profile?id=${post.userId._id}`)}> {post.userId?.firstname + " " + post.userId?.name}</p>
                        <Date>{dayjs(post.createdAt).format("DD/MM/YYYY à HH:mm")}</Date>
                    </ContainerName>
                </div>

                <ContainerTxtImg>
                    <Text style={{ margin: '27px 42px' }}>{post.message} </Text>
                    <img style={{ width: 316 }} src={post.imageUrl} alt="" />
                </ContainerTxtImg>
            </div>

            <div>
                {/* Delete et modal Update */}
                {
                    post.userId._id === userStore.user._id
                        ? <div>
                            <PostUpdateModal post={post} onUpdate={onUpdate} />
                            <DeleteForeverIcon onClick={() => handleDeletePost(post)} />
                        </div>
                        : null
                }
                {/* Like */}
                <div style={{ display: 'flex' }}>
                    {
                        post.usersLiked.includes(userStore.user._id)
                            ? <FavoriteIcon onClick={() => handleLike(post)} />
                            : <FavoriteBorderIcon onClick={() => handleLike(post)} />
                    }
                    <p>{post.likes}</p>
                </div>
                {/* Comment */}
                <InsertCommentIcon onClick={() => setOpenComment(!openComment)} />
                {openComment && <Comment post={post} onComment={onComment} />}

            </div>
        </ContainerPost>
    );
};

export default Post;