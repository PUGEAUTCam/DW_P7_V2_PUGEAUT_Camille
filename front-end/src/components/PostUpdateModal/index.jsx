import React, { useState } from 'react';
import HyperModal from 'react-hyper-modal';
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import { postUpdate } from '../../API';


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
        }
        setOpen(false)
    };

    return (
        <div>
            <HyperModal isOpen={open} requestClose={() => setOpen(false)}>

                <h2>Modifier votre post</h2>
                <textarea
                    name="post"
                    id="updatePost"
                    cols='100'
                    rows='10'
                    placeholder='Ton nouveau post'
                    value={updatePost}
                    onChange={(e) => setUpdatePost(e.target.value)}
                >
                </textarea>

                <div>
                    <img src={updateImage} alt='' />
                    {updateImage
                        ? (<button onClick={() => { setUpdateImage(null); setUpdateFile(null) }}><HighlightOffIcon /></button>)
                        : null
                    }
                </div>
                <label htmlFor="updateFile"><ImageSearchIcon /></label>
                <input type="file"
                    id='updateFile'
                    name='file'
                    accept='.jpg, .jpeg, .png'
                    style={{ display: 'none' }}
                    onChange={(e) => handleImage(e)}
                />

                <button onClick={handleSubmit} >Enregistrer les modifications</button>
                <button onClick={() => setOpen(false)}>Retour</button>
            </HyperModal >

            <FontAwesomeIcon icon={faPenToSquare} onClick={() => setOpen(true)} />
        </div >

    );
};

export default PostUpdateModal;