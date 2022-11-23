import React, { useState } from 'react';
import HyperModal from 'react-hyper-modal';
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import { postUpdate } from '../../API';
import { Button, ButtonDelete, TextArea } from '../ButtonStyle/style';


const PostUpdateModal = ({ post, onUpdate }) => {
    const [open, setOpen] = useState(false);

    const [updatePost, setUpdatePost] = useState(post.message)
    const [updateImage, setUpdateImage] = useState(post.imageUrl);
    const [updateFile, setUpdateFile] = useState(post.imageUrl);

    const handleImage = (e) => {
        setUpdateImage(URL.createObjectURL(e.target.files[0]));
        setUpdateFile(e.target.files[0]);
    }

    const handleSubmit = async () => {
        if (post.imageUrl) { setUpdateFile(post.imageUrl) }
        if (updatePost || updateImage) {
            const formData = new FormData();
            formData.append('message', updatePost);
            if (updateFile) formData.append('image', updateFile);
            let res = await postUpdate({ post, formData })
            await onUpdate(res.data)
            setUpdateImage(null)
            setUpdateFile(null)
        }
        setOpen(false)
    };

    return (
        <div>
            <HyperModal isOpen={open} requestClose={() => setOpen(false)} style={{ background: "#454545e6" }}>
                <h2>Modifier votre post</h2>
                <div>
                    <TextArea
                        name="post"
                        id="updatePost"
                        cols='100'
                        rows='10'
                        placeholder='Ton nouveau post'
                        value={updatePost}
                        onChange={(e) => setUpdatePost(e.target.value)}
                    >
                    </TextArea>

                    <div>
                        <img src={updateImage} alt='' style={{ width: 100 }} />
                        {updateImage
                            ? (<ButtonDelete onClick={() => { setUpdateImage(null); setUpdateFile(null) }}>X</ButtonDelete>)
                            : null
                        }
                    </div>
                </div>

                <label htmlFor={`updateFile_${post._id}`}><ImageSearchIcon /></label>
                <input type="file"
                    id={`updateFile_${post._id}`}
                    name='file'
                    accept='.jpg, .jpeg, .png'
                    style={{ display: 'none' }}
                    onChange={(e) => handleImage(e)}
                />

                <Button onClick={handleSubmit} >Enregistrer</Button>
                <Button onClick={() => setOpen(false)}>Retour</Button>
            </HyperModal >

            <FontAwesomeIcon icon={faPenToSquare} onClick={() => setOpen(true)} />
        </div >

    );
};

export default PostUpdateModal;