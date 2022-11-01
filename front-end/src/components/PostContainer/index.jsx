import React, { useEffect } from 'react';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ContainerPost } from './style';
import { deletePost } from '../../API';
import { useSelector } from "react-redux";
import dayjs from 'dayjs';
import { useDispatch } from "react-redux";
import { getPost } from '../../features/postsSlice';



const PostContainer = () => {

    const userStore = useSelector((state) => state.userStore);
    const postsStore = useSelector((state) => state.postsStore);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPost())
    }, [])

    const handleDeletePost = async (dataIndex) => {
        await deletePost(dataIndex)
        dispatch(getPost())
    }


    return (
        <div>
            {postsStore.posts?.map((postInfo, index) =>
                <ContainerPost key={index}>
                    <div >
                        <div>
                            <img src={userStore.user.avatar} alt="" />
                            <p>{userStore.user.firstname + " " + userStore.user.name}</p>
                            <p>{dayjs(postInfo.createdAt).format("DD/MM/YYYY à HH:mm")}</p>
                        </div>

                        <p>{postInfo.message} </p>

                        <img src={postInfo.imageUrl} alt="" />
                    </div>

                    <div>
                        <InsertCommentIcon />
                        <FavoriteBorderIcon />

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