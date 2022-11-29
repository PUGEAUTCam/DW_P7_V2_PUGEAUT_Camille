import React, { useState } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DehazeIcon from '@mui/icons-material/Dehaze';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { ContainerDeleteUpdate, ContainerIcon, ContainerName, ContainerPost, ContainerTxtImg, HeaderUser, TextUser } from './style';
import { AvatarImg, IconAvatar, ImgPost } from '../StyleDefinition/picture';
import dayjs from 'dayjs';
import { useSelector } from "react-redux";
import { deletePost, likePost } from '../../API';
import PostUpdateModal from '../PostUpdateModal';
import Comment from '../Comment';
import { useNavigate } from 'react-router-dom';
import { Date, Text } from '../Text/index';
import Lottie from "lottie-react";
import like from "../lottieAnimations/like.json";

const Post = ({ post, index, onUpdate, onLike, onDelete, onComment }) => {
    const navigate = useNavigate();

    const userStore = useSelector((state) => state.userStore);
    const [openComment, setOpenComment] = useState(false);
    const [openParams, setOpenParams] = useState(false);

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
                <HeaderUser>
                    <IconAvatar style={{ border: "1px solid #24b6a9", background: "white" }} onClick={() => navigate(`/profile?id=${post.userId._id}`)}>
                        <AvatarImg src={post.userId.avatar} alt={"avatar de " + post.userId?.firstname + " " + post.userId?.name} />
                    </IconAvatar>

                    <ContainerName style={{ cursor: "pointer" }}>
                        <TextUser onClick={() => navigate(`/profile?id=${post.userId._id}`)}> {post.userId?.firstname + " " + post.userId?.name}</TextUser>
                        <Date>{dayjs(post.createdAt).format("DD/MM/YYYY à HH:mm")}</Date>
                    </ContainerName>
                </HeaderUser>

                <ContainerTxtImg>
                    <Text>{post.message}</Text>
                    <ImgPost src={post.imageUrl} alt="" />
                </ContainerTxtImg>
            </div>

            <ContainerIcon>
                {
                    post.userId._id === userStore.user._id
                        ? <div>
                            <DehazeIcon onClick={() => setOpenParams(!openParams)} style={{ cursor: "pointer" }} />
                        </div>
                        : null
                }
                {/* Like */}
                <div style={{ display: 'flex', alignItems: "center" }}>
                    {
                        post.usersLiked.includes(userStore.user._id)
                            ? <FavoriteIcon style={{ color: "#24b6a9", cursor: "pointer" }} onClick={() => handleLike(post)} />

                            : <FavoriteBorderIcon style={{ cursor: "pointer" }} onClick={() => handleLike(post)} />
                    }
                    <p style={{ padding: 2 }}>{post.likes}</p>
                </div>
                {/* Comment */}
                <ChatBubbleOutlineIcon className='icon' sx={{ color: "#24b6a9", "&:hover": { color: "rgb(213 23 23)" }, cursor: "pointer" }} onClick={() => setOpenComment(!openComment)} />
            </ContainerIcon>

            {openParams &&
                <ContainerDeleteUpdate style={{ display: "flex" }}>
                    <PostUpdateModal post={post} onUpdate={onUpdate} style={{ cursor: "pointer" }} />
                    <DeleteForeverIcon onClick={() => handleDeletePost(post)} sx={{ "&:hover": { color: "rgb(213 23 23)" }, cursor: "pointer" }} />
                </ContainerDeleteUpdate>}

            {openComment && <Comment post={post} onComment={onComment} />}
        </ContainerPost>
    );
};

export default Post;

{/* <Lottie animationData={like} style={{ width: 50, height: 50 }} key={index} /> */ }