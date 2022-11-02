import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import AutoFixNormalIcon from '@mui/icons-material/AutoFixNormal';
import axios from 'axios';
import { API_ROUTES, header } from '../../API';
import { useDispatch } from "react-redux";
import { getUser } from '../../features/usersSlice';


const ProfileCover = () => {

    const userStore = useSelector((state) => state.userStore);
    const dispatch = useDispatch();

    const [file, setFile] = useState(null);

    const handleCoverImage = async (e) => {
        setFile(e.target.files[0]);

        const formData = new FormData();

        formData.append('userId', userStore.user._id)
        formData.append('image', file);

        // await axios.post(API_ROUTES.uploadCover, formData, header({ formData: true }))
        //     .then(async (res) => {
        //         await dispatch(getUser())
        //     })
        //     .catch((error) => console.log(error))
    }


    return (
        <div>

            <img src={userStore.user.coverImg} alt={"Image de couverture de " + userStore.user.firstname} />

            <div>

                <label htmlFor="file"><AutoFixHighIcon /></label>
                <input
                    type="file"
                    name="file"
                    accept='.jpg, .jpeg, .png'
                    onChange={(e) => handleCoverImage(e)}
                />
            </div>

            <div>
                <img src={userStore.user.avatar} alt={"Avatar de " + userStore.user.firstname} />
                <AutoFixNormalIcon />
            </div>
        </div>
    );
};

export default ProfileCover;