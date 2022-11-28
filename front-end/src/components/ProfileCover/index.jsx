import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import { useDispatch } from "react-redux";
import { getUser } from '../../features/usersSlice';
import { uploadCoverImg, uploadAvatarImg } from '../../API';
import { BtnUpdateCover, BtnUpdateCover2, ContainerAvatarBtn, ContainerBtnConfirmCover, ContainerbtnUpdate, CoverImg } from './style';
import { Button, ButtonAvatar } from '../ButtonStyle/style';
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
                        <ContainerBtnConfirmCover>
                            <Button onClick={(e) => { setImageCover(null); setFileCover(null) }}>Annuler</Button>
                            <Button onClick={handleChangeCover}>Confirmer</Button>
                        </ContainerBtnConfirmCover>
                    </div>)
                    : <CoverImg src={user.coverImg} alt={"Image de couverture de " + user.firstname} />
                }
                {
                    dataUser
                        ? null
                        :
                        <div>
                            <BtnUpdateCover htmlFor="coverFile"><AutoFixHighIcon style={{ fontSize: 32, cursor: "pointer" }} /></BtnUpdateCover>
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
                            <ButtonAvatar onClick={(e) => { setImageAvatar(null); setFileAvatar(null) }}>Annuler</ButtonAvatar>
                            <ButtonAvatar onClick={handleChangeAvatar}>Confirmer</ButtonAvatar>
                        </div>
                    </div>)
                    : <AvatarProfile src={user.avatar} alt={"Avatar de " + user.firstname} />
                }
                {
                    dataUser
                        ? null
                        : <ContainerbtnUpdate>
                            <BtnUpdateCover2 htmlFor="avatarFile"><AutoFixHighIcon sx={{ fontSize: 26, cursor: "pointer", "&:hover": { color: "rgb(213 23 23)" } }} /></BtnUpdateCover2>
                            <input
                                id='avatarFile'
                                type="file"
                                name="avatarFile"
                                accept='.jpg, .jpeg, .png'
                                style={{ display: 'none' }}
                                onChange={(e) => handleImageAvatar(e)}
                            />
                        </ContainerbtnUpdate>
                }
            </ContainerAvatarBtn>


        </div>
    );
};

export default ProfileCover;