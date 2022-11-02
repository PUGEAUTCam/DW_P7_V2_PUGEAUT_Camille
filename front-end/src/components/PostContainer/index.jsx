import React, { useEffect } from 'react';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ContainerPost } from './style';
import { deletePost, likePost } from '../../API';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getPost } from '../../features/postsSlice';
import dayjs from 'dayjs';

const PostContainer = () => {

    const postsStore = useSelector((state) => state.postsStore);
    const userStore = useSelector((state) => state.userStore);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPost())
    }, [])

    const handleDeletePost = async (post) => {
        await deletePost(post)
        dispatch(getPost())
    }

    const handleLike = async (post) => {
        await likePost(post)
        dispatch(getPost())
    }

    return (
        <div>
            {postsStore.posts?.map((post, index) =>
                <ContainerPost key={index}>
                    <div >
                        <div>
                            <img src={post.avatar} alt={"avatar de " + post.name} />
                            <p> {post.name}</p>
                            <p>{dayjs(post.createdAt).format("DD/MM/YYYY à HH:mm")}</p>
                        </div>

                        <p>{post.message} </p>

                        <img src={post.imageUrl} alt="" />
                    </div>

                    <div>
                        <InsertCommentIcon />
                        <div style={{ display: 'flex' }}>
                            {post.usersLiked.includes(userStore.user._id) ? (
                                <FavoriteIcon onClick={() => handleLike(postsStore.posts[index])} />
                            ) : (
                                <FavoriteBorderIcon onClick={() => handleLike(postsStore.posts[index])} />
                            )}
                            <p>{post.likes}</p>
                        </div>

                        {/* Uniquement si user a cree le post */}
                        <FontAwesomeIcon icon={faPenToSquare} />
                        <DeleteForeverIcon onClick={() => handleDeletePost(postsStore.posts[index])} />

                    </div>
                </ContainerPost>
            )}
        </div>
    );
};

export default PostContainer;