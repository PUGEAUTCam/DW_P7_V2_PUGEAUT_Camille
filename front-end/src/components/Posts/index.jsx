import React from 'react';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { ContainerPost } from './style';
import dayjs from 'dayjs';
import { useSelector } from "react-redux";
import { deletePost, likePost } from '../../API';
import PostUpdateModal from '../PostUpdateModal';


const Posts = ({ post, index, onUpdate }) => {

    const userStore = useSelector((state) => state.userStore);

    const handleDeletePost = async (post) => {
        await deletePost(post)
        onUpdate()
    }

    const handleLike = async (post) => {
        await likePost(post)
        onUpdate()
    }

    return (
        <ContainerPost key={index}>
            <div>
                <div>
                    <img src='' alt={"avatar de "} />
                    <p> {post.name}</p>
                    <p>{dayjs(post.createdAt).format("DD/MM/YYYY à HH:mm")}</p>
                </div>

                <p>{post.message} </p>

                <img src={post.imageUrl} alt="" />
            </div>

            <div>
                <InsertCommentIcon />
                <div style={{ display: 'flex' }}>
                    {
                        post.usersLiked.includes(userStore.user._id)
                            ? <FavoriteIcon onClick={() => handleLike(post)} />
                            : <FavoriteBorderIcon onClick={() => handleLike(post)} />
                    }
                    <p>{post.likes}</p>
                </div>

                {/* Uniquement si user a cree le post */}
                <PostUpdateModal post={post} />
                <DeleteForeverIcon onClick={() => handleDeletePost(post)} />

            </div>
        </ContainerPost>
    );
};

export default Posts;