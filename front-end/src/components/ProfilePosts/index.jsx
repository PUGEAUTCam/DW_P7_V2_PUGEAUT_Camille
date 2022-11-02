import React, { useEffect, useState } from 'react';
import { getuserPosts } from '../../API';
import dayjs from 'dayjs';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { deletePost } from '../../API';
import { ContainerPost } from '../PostContainer/style';
import { useDispatch } from "react-redux";
import { getPost } from '../../features/postsSlice';


const ProfilePosts = () => {

    const [data, setData] = useState(null)
    const dispatch = useDispatch();


    useEffect(() => {
        getuserPosts().then((res) => setData(res.data))
    }, [])

    const handleDeletePost = async (dataIndex) => {
        await deletePost(dataIndex)
        getuserPosts().then((res) => setData(res.data))
    }

    return (
        <div>
            {data?.map((postInfo, index) =>
                <ContainerPost key={index}>
                    <div >
                        <div>
                            <img src={postInfo.avatar} alt={"avatar de " + postInfo.name} />
                            <p> {postInfo.name}</p>
                            <p>{dayjs(postInfo.createdAt).format("DD/MM/YYYY à HH:mm")}</p>
                        </div>

                        <p>{postInfo.message} </p>

                        <img src={postInfo.imageUrl} alt="" />
                    </div>

                    <div>
                        <InsertCommentIcon />
                        <FavoriteBorderIcon />

                        <FontAwesomeIcon icon={faPenToSquare} />
                        <DeleteForeverIcon onClick={() => handleDeletePost(data[index])} />

                    </div>
                </ContainerPost>

            )}
        </div>
    );
};

export default ProfilePosts;