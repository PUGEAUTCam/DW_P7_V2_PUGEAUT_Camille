import React, { useState } from 'react';
import { useSelector } from "react-redux";
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { ContainerBtnIcon } from './style';
import { API_ROUTES, header } from '../../API';
import axios from "axios";
import { useDispatch } from "react-redux";
import { addPost } from '../../features/postsSlice';


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
                    await dispatch(addPost(res.data.post))
                    cleanState()
                })
                .catch((error) => console.log(error))

        } else {
            alert(`Veuillez group'oster un message ou une image ! `)
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
                    {postImage
                        ? (<div>
                            <img src={postImage} alt="" />
                            <button onClick={(e) => { setPostImage(null); setFile(null) }}><HighlightOffIcon />
                            </button>
                        </div>)
                        : null
                    }
                </div>

                <label htmlFor="file"><ImageSearchIcon /></label>
                <input type="file"
                    id='file'
                    name='file'
                    accept='.jpg, .jpeg, .png'
                    style={{ display: 'none' }}
                    onChange={(e) => handleImage(e)}
                />

                <div>
                    {newPost || postImage
                        ? (<button onClick={cleanState}>Annuler le post</button>)
                        : null}

                    <button onClick={handlePost}>Grouposter</button>
                </div>
            </div>
        </ContainerBtnIcon >
    );
};

export default CreatePost;

