import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import { useDispatch } from "react-redux";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { getUser } from '../../features/usersSlice';
import { uploadCoverImg, uploadAvatarImg, getuserPosts } from '../../API';
import { AvatarImg, CoverImg } from './style';

const ProfileCover = () => {
    const userStore = useSelector((state) => state.userStore);
    const dispatch = useDispatch();
    //COVER
    const [fileCover, setFileCover] = useState(null);
    const [imageCover, setImageCover] = useState(null);
    //AVATAR
    const [fileAvatar, setFileAvatar] = useState(null);
    const [imageAvatar, setImageAvatar] = useState(null);

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
        <div>
            <div>
                {imageCover
                    ? (<div>
                        <CoverImg src={imageCover} alt={"Image de couverture de " + userStore.user.firstname} />
                        <button onClick={(e) => { setImageCover(null); setFileCover(null) }}><HighlightOffIcon />
                        </button>
                    </div>)
                    : <CoverImg src={userStore.user.coverImg} alt={"Image de couverture de " + userStore.user.firstname} />
                }
            </div>
            <div>
                <label htmlFor="coverFile"><AutoFixHighIcon /></label>
                <input
                    id='coverFile'
                    type="file"
                    name="coverFile"
                    accept='.jpg, .jpeg, .png'
                    style={{ display: 'none' }}
                    onChange={(e) => handleImageCover(e)}
                />
            </div>
            <div>
                {imageCover
                    ? (<button onClick={handleChangeCover}>Modifier la cover</button>)
                    : null
                }
            </div>

            <div>
                {imageAvatar
                    ? (<div>
                        <AvatarImg src={imageAvatar} alt={"Avatar de " + userStore.user.firstname} />
                        <button onClick={(e) => { setImageAvatar(null); setFileAvatar(null) }}><HighlightOffIcon />
                        </button>
                    </div>)
                    : <AvatarImg src={userStore.user.avatar} alt={"Avatar de " + userStore.user.firstname} />
                }
            </div>
            <div>
                <label htmlFor="avatarFile"><AutoFixHighIcon /></label>
                <input
                    id='avatarFile'
                    type="file"
                    name="avatarFile"
                    accept='.jpg, .jpeg, .png'
                    style={{ display: 'none' }}
                    onChange={(e) => handleImageAvatar(e)}
                />
            </div>
            <div>
                {imageAvatar
                    ? (<button onClick={handleChangeAvatar}>Modifier la photo de profil</button>)
                    : null
                }
            </div>
        </div>
    );
};

export default ProfileCover;