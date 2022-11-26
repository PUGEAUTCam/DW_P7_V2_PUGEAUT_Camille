import React, { useState } from 'react';
import { useSelector } from "react-redux";
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import { ContainerCreatePost, ContainerHello, ContainerBtn, ContainerInputBtn, HelloTitle, IconHello, ContainerImg } from './style';
import { API_ROUTES, header } from '../../API';
import axios from "axios";
import { useDispatch } from "react-redux";
import { addPost } from '../../features/postsSlice';
import { AvatarImg, ImgCreatePost } from '../StyleDefinition/picture';
import { Button, ButtonDelete, TextArea } from '../ButtonStyle/style';

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
        <ContainerCreatePost>
            <ContainerHello>
                <IconHello style={{ border: "1px solid rgb(225, 122, 122)", marginLeft: "13px", background: "white" }}>
                    <AvatarImg src={userStore.user.avatar} alt={"avatar de " + userStore.user.firstname} />
                </IconHello>
                <HelloTitle>Bonjour {userStore.user.firstname}</HelloTitle>
            </ContainerHello>
            <ContainerInputBtn>
                <TextArea
                    type="text"
                    name="post"
                    id="post"
                    placeholder='Une nouvelle à partager?'
                    value={newPost}
                    onChange={(e) => setNewPost(e.target.value)}
                >
                </TextArea>

                <div>
                    {postImage
                        ? (<ContainerImg>
                            <ImgCreatePost src={postImage} alt="" />
                            <ButtonDelete onClick={(e) => { setPostImage(null); setFile(null) }}>X</ButtonDelete>
                        </ContainerImg>)
                        : null
                    }
                </div>

                <ContainerBtn>
                    <label htmlFor="file"><ImageSearchIcon style={{ fontSize: 36, color: "#3e3e42" }} /></label>
                    <input type="file"
                        id='file'
                        name='file'
                        accept='.jpg, .jpeg, .png'
                        style={{ display: 'none' }}
                        onChange={(e) => handleImage(e)}
                    />
                    <div>
                        {newPost || postImage
                            ? (<Button onClick={cleanState}>Annuler</Button>)
                            : null}

                        <Button onClick={handlePost}>Grouposter</Button>
                    </div>
                </ContainerBtn>
            </ContainerInputBtn>
        </ContainerCreatePost >
    );
};

export default CreatePost;

