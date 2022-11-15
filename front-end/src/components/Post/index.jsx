import React from 'react';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { AvatarImg, ContainerPost } from './style';
import dayjs from 'dayjs';
import { useSelector } from "react-redux";
import { deletePost, likePost } from '../../API';
import PostUpdateModal from '../PostUpdateModal';

const Post = ({ post, index, onUpdate, onLike, onDelete, onComment }) => {

    const userStore = useSelector((state) => state.userStore);

    const handleDeletePost = async (post) => {
        let res = await deletePost(post)
        onDelete(res.data)
    }

    const handleLike = async (post) => {
        let res = await likePost(post)
        console.log(res.data)
        onLike(res.data)
    }

    return (
        <ContainerPost key={index}>
            <div>
                <div>
                    <AvatarImg src={post.userId.avatar} alt={"avatar de " + post.userId?.firstname + " " + post.userId?.name} />
                    <p> {post.userId?.firstname + " " + post.userId?.name}</p>
                    <p>{dayjs(post.createdAt).format("DD/MM/YYYY à HH:mm")}</p>
                </div>
                <p>{post.message} </p>
                <img src={post.imageUrl} alt="" />
            </div>

            <div>
                {/* Comment */}
                <InsertCommentIcon />

                {/* Like */}
                <div style={{ display: 'flex' }}>
                    {
                        post.usersLiked.includes(userStore.user._id)
                            ? <FavoriteIcon onClick={() => handleLike(post)} />
                            : <FavoriteBorderIcon onClick={() => handleLike(post)} />
                    }
                    <p>{post.likes}</p>
                </div>

                {/* Delete et modal Update */}
                {
                    post.userId._id === userStore.user._id
                        ? <div>
                            <PostUpdateModal post={post} onUpdate={onUpdate} />
                            <DeleteForeverIcon onClick={() => handleDeletePost(post)} />
                        </div>
                        : null
                }
            </div>
        </ContainerPost>
    );
};

export default Post;