import React, { useState } from 'react';
import { useSelector } from "react-redux";
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import { ContainerCreatePost, ContainerHello, ContainerBtn, ContainerInputBtn, HelloTitle, IconHello, ContainerImg } from './style';
import { createPost } from '../../API';
import { useDispatch } from "react-redux";
import { addPost } from '../../features/postsSlice';
import { AvatarImg, ImgCreatePost } from '../StyleDefinition/picture';
import { Button, ButtonDelete, TextArea } from '../ButtonStyle/style';
import Lottie from "lottie-react";
import Coffee from "../lottieAnimations/77597-coffee.json"

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
            //CALL API / STORE 
            let res = await createPost(formData);
            await dispatch(addPost(res.data.post))
            cleanState()

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
                <IconHello>
                    <AvatarImg src={userStore.user.avatar} alt={"avatar de " + userStore.user.firstname} />
                </IconHello>
                <HelloTitle>Bonjour {userStore.user.firstname}</HelloTitle>
                <Lottie animationData={Coffee} style={{ width: 49, paddingBottom: 4 }} />
            </ContainerHello>
            <ContainerInputBtn>
                <TextArea
                    type="text"
                    name="post"
                    id="post"
                    autoFocus={true}
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
                    <label htmlFor="file">
                        <ImageSearchIcon sx={{ fontSize: { xs: 30, lg: 36 }, color: "#3e3e42", "&:hover": { color: "#24b6a9" }, cursor: "pointer" }} />
                    </label>
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

