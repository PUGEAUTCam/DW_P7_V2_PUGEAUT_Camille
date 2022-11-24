import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import { useDispatch } from "react-redux";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { getUser } from '../../features/usersSlice';
import { uploadCoverImg, uploadAvatarImg } from '../../API';
import { BtnUpdateCover, BtnUpdateCover2, ContainerAvatarBtn, CoverImg } from './style';
import { Button } from '../ButtonStyle/style';
import { AvatarProfile } from '../StyleDefinition/picture';

const ProfileCover = ({ dataUser }) => {
    //COVER
    const [fileCover, setFileCover] = useState(null);
    const [imageCover, setImageCover] = useState(null);
    //AVATAR
    const [fileAvatar, setFileAvatar] = useState(null);
    const [imageAvatar, setImageAvatar] = useState(null);

    const userStore = useSelector((state) => state.userStore);
    const dispatch = useDispatch();
    let user = dataUser || userStore.user

    //COVER
    const handleImageCover = async (e) => {
        setImageCover(URL.createObjectURL(e.target.files[0]));
        setFileCover(e.target.files[0]);
    };
    const handleChangeCover = async () => {
        const formData = new FormData();
        formData.append('image', fileCover);
        await uploadCoverImg(formData);
        await dispatch(getUser())
        cleanState();
    };
    //AVATAR
    const handleImageAvatar = async (e) => {
        setImageAvatar(URL.createObjectURL(e.target.files[0]));
        setFileAvatar(e.target.files[0]);
    };
    const handleChangeAvatar = async () => {
        const formData = new FormData();
        formData.append('image', fileAvatar);
        await uploadAvatarImg(formData);
        await dispatch(getUser())
        cleanState();
    }
    //ALL
    const cleanState = () => {
        setImageCover(null)
        setFileCover(null)
        setImageAvatar(null)
        setFileAvatar(null)
    };

    return (
        <div style={{ position: "relative" }}>
            <div style={{ position: "relative" }}>
                {imageCover
                    ? (<div>
                        <CoverImg src={imageCover} alt={"Image de couverture de " + user.firstname} />
                        <div>
                            <Button onClick={(e) => { setImageCover(null); setFileCover(null) }}>Annuler</Button>
                            <Button onClick={handleChangeCover}>Confirmer</Button>
                        </div>
                    </div>)
                    : <CoverImg src={user.coverImg} alt={"Image de couverture de " + user.firstname} />
                }
                {
                    dataUser
                        ? null
                        : <div style={{ marginTop: "-32px" }}>
                            <BtnUpdateCover htmlFor="coverFile"><AutoFixHighIcon style={{ fontSize: 32 }} /></BtnUpdateCover>
                            <input
                                id='coverFile'
                                type="file"
                                name="coverFile"
                                accept='.jpg, .jpeg, .png'
                                style={{ display: 'none' }}
                                onChange={(e) => handleImageCover(e)}
                            />
                        </div>
                }
            </div>

            <ContainerAvatarBtn >
                {imageAvatar
                    ? (<div>
                        <AvatarProfile src={imageAvatar} alt={"Avatar de " + user.firstname} />
                        <div>
                            <button onClick={(e) => { setImageAvatar(null); setFileAvatar(null) }}><HighlightOffIcon /></button>
                            <button onClick={handleChangeAvatar}>Modifier la photo de profil</button>
                        </div>
                    </div>)
                    : <AvatarProfile src={user.avatar} alt={"Avatar de " + user.firstname} />
                }
                {
                    dataUser
                        ? null
                        : <div style={{ marginTop: -30 }}>
                            <BtnUpdateCover2 htmlFor="avatarFile"><AutoFixHighIcon style={{ fontSize: 29 }} /></BtnUpdateCover2>
                            <input
                                id='avatarFile'
                                type="file"
                                name="avatarFile"
                                accept='.jpg, .jpeg, .png'
                                style={{ display: 'none' }}
                                onChange={(e) => handleImageAvatar(e)}
                            />
                        </div>
                }
            </ContainerAvatarBtn>


        </div>
    );
};

export default ProfileCover;