import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import AutoFixNormalIcon from '@mui/icons-material/AutoFixNormal';
import { useDispatch } from "react-redux";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { getUser } from '../../features/usersSlice';
import { uploadCoverImg } from '../../API';

const ProfileCover = () => {
    const userStore = useSelector((state) => state.userStore);
    const dispatch = useDispatch();

    const [file, setFile] = useState(null);
    const [image, setImage] = useState(null);

    const handleImage = async (e) => {
        setImage(URL.createObjectURL(e.target.files[0]));
        setFile(e.target.files[0]);
    };

    const handleChange = async () => {
        const formData = new FormData();
        formData.append('image', file);
        await uploadCoverImg(formData);
        await dispatch(getUser())
        cleanState();
    };

    const cleanState = () => {
        setImage(null)
        setFile(null)
    };



    return (
        <div>
            <div>
                {image
                    ? (<div>
                        <img src={image} alt={"Image de couverture de " + userStore.user.firstname} />
                        <button onClick={(e) => { setImage(null); setFile(null) }}><HighlightOffIcon />
                        </button>
                    </div>)
                    : <img src={userStore.user.coverImg} alt={"Image de couverture de " + userStore.user.firstname} />
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
                    onChange={(e) => handleImage(e)}
                />
            </div>
            <div>
                {image
                    ? (<button onClick={handleChange}>Modifier la cover</button>)
                    : null
                }
            </div>






            {/* <div>
                <img src={userStore.user.avatar} alt={"Avatar de " + userStore.user.firstname} />
                <label htmlFor="avatarFile"><AutoFixNormalIcon /></label>
                <input
                    id='avatarFile'
                    type="file"
                    name="avatarFile"
                    accept='.jpg, .jpeg, .png'
                    style={{ display: 'none' }}
                    onChange={(e) => setFile(e.target.files[0])}
                />
            </div> */}


        </div>
    );
};

export default ProfileCover;