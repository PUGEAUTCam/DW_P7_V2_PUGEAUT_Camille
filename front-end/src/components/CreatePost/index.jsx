import React, { useState } from 'react';
import { useSelector } from "react-redux";
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import GifBoxIcon from '@mui/icons-material/GifBox';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { ContainerBtnIcon } from './style';
import { API_ROUTES, header } from '../../API';
import axios from "axios";
import { useDispatch } from "react-redux";
import { getPost } from '../../features/postsSlice';


const CreatePost = () => {
    const userStore = useSelector((state) => state.userStore);
    const dispatch = useDispatch();

    const [newPost, setNewPost] = useState("")
    const [postImage, setPostImage] = useState(null);
    const [file, setFile] = useState(null);

    const handleImage = (e) => {
        setPostImage(URL.createObjectURL(e.target.files[0]));
        setFile(e.target.files[0]);
    }

    const handlePost = async () => {
        if (newPost || postImage) {
            const formData = new FormData();

            formData.append('message', newPost);
            if (file) formData.append('image', file);

            await axios.post(API_ROUTES.post, formData, header({ formData: true }))
                .then(async (res) => {
                    await dispatch(getPost())
                    cleanState()
                })
                .catch((error) => console.log(error))

        } else {
            alert('Entre un message ou une image sur ton post! A MODIFIER')
        }
    };

    const cleanState = () => {
        setNewPost("")
        setPostImage(null)
        setFile(null)
    };


    return (
        <ContainerBtnIcon>

            <h1>Bonjour {userStore.user.firstname}</h1>
            <textarea
                name="post"
                id="post"
                cols='100'
                rows='10'
                placeholder='Une nouvelle à partager?'
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
            >
            </textarea>

            <div>
                <div>
                    <img src={postImage} alt='' />
                    {postImage ? (
                        <button onClick={(e) => { setPostImage(null); setFile(null) }}><HighlightOffIcon /></button>
                    ) : null}
                </div>

                <label htmlFor="file"><ImageSearchIcon /></label>
                <input type="file"
                    id='file'
                    name='file'
                    accept='.jpg, .jpeg, .png'
                    style={{ display: 'none' }}
                    onChange={(e) => handleImage(e)}
                />

                <GifBoxIcon />
                <div>
                    {newPost || postImage ? (
                        <button onClick={cleanState}>Annuler le post</button>
                    ) : null}
                    <button onClick={handlePost}>Grouposter</button>
                </div>
            </div>

        </ContainerBtnIcon >
    );
};

export default CreatePost;