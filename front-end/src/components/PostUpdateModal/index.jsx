import React, { useState } from 'react';
import HyperModal from 'react-hyper-modal';
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import { postUpdate } from '../../API';
import { ButtonDeleteTurquoise, ButtonTurquoise, TextAreaModal } from '../ButtonStyle/style';
import { ContainerBtnInputFile, ContainerImg, ImgModal, ModalSection } from './style';

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
        if (updatePost || updateImage) {
            const formData = new FormData();
            formData.append('message', updatePost);
            if (updateFile) formData.append('image', updateFile);
            if (post.imageUrl && !updateImage) { formData.append('deleteImage', true) }

            let res = await postUpdate({ post, formData })
            await onUpdate(res.data)
            setUpdateImage(res.data.post.imageUrl)
            setUpdateFile(null)
        }
        setOpen(false)
    };

    return (
        <div>
            <HyperModal isOpen={open} requestClose={() => setOpen(false)}>
                <ModalSection>
                    <h2>Modifier votre post</h2>
                    <div>
                        <TextAreaModal
                            name="post"
                            id="updatePost"
                            cols='100'
                            rows='10'
                            placeholder='Ton nouveau post'
                            value={updatePost}
                            onChange={(e) => setUpdatePost(e.target.value)}
                        >
                        </TextAreaModal>
                        <ContainerImg>
                            <ImgModal src={updateImage} alt='' />
                            {updateImage
                                ? (<ButtonDeleteTurquoise onClick={() => { setUpdateImage(null); setUpdateFile(null) }}>X</ButtonDeleteTurquoise>)
                                : null}
                        </ContainerImg>
                    </div>

                    <ContainerBtnInputFile>
                        <label htmlFor={`updateFile_${post._id}`}>
                            <ImageSearchIcon sx={{ fontSize: { xs: 28, lg: 36 } }} />
                        </label>
                        <input type="file"
                            id={`updateFile_${post._id}`}
                            name='file'
                            accept='.jpg, .jpeg, .png'
                            style={{ display: 'none' }}
                            onChange={(e) => handleImage(e)}
                        />
                        <ButtonTurquoise onClick={handleSubmit} >Enregistrer</ButtonTurquoise>
                        <ButtonTurquoise onClick={() => setOpen(false)}>Retour</ButtonTurquoise>
                    </ContainerBtnInputFile>

                </ModalSection>
            </HyperModal >


            <FontAwesomeIcon icon={faPenToSquare} onClick={() => setOpen(true)} />

        </div >

    );
};

export default PostUpdateModal;