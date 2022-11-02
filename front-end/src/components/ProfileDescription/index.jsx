import React from 'react';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';




const ProfileDescription = () => {

    const userStore = useSelector((state) => state.userStore);



    return (
        <div>
            <div>
                <h2>{userStore.user.firstname + " " + userStore.user.name}</h2>
                <p>Membre depuis le {dayjs(userStore.dateSignup).format("DD/MM/YYYY")}</p>
                <p>Numéro pro : </p>
                <p>Numéro perso : </p>
                <p>Habite à </p>
                <p>De </p>
            </div>

            <div>
                <h3>Biographie</h3>
                <p>....</p>
            </div>

            <div>
                <AutoFixHighIcon />
            </div>


        </div >
    );
};

export default ProfileDescription;