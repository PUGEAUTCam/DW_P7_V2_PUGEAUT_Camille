import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import HyperModal from 'react-hyper-modal';
import { ModalInputContainer } from './style';
import { profileUpdate } from '../../API';
import { useDispatch } from "react-redux";
import { getUser } from '../../features/usersSlice';


const ProfileDescription = () => {

    const userStore = useSelector((state) => state.userStore);
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);

    const [form, setForm] = useState({
        phoneNumber: userStore.user.phoneNumber,
        phonePro: userStore.user.phonePro,
        actualLocation: userStore.user.actualLocation,
        birthLocation: userStore.user.birthLocation,
        biography: userStore.user.biography,
    });

    const handleSubmit = async () => {
        await profileUpdate(form)
        await dispatch(getUser())
        setOpen(false)
    }

    return (
        <div>
            <div>
                <h2>{userStore.user.firstname}</h2>
                <p>Membre depuis le {dayjs(userStore.user.dateSignup).format("DD/MM/YYYY")}</p>
                <p>Numéro perso {userStore.user.phoneNumber}</p>
                <p>Numéro pro {userStore.user.phonePro} </p>
                <p>Habite à {userStore.user.actualLocation}</p>
                <p>De {userStore.user.birthLocation}</p>
            </div>
            <div>
                <h3>Biographie</h3>
                <p>{userStore.user.biography}</p>
            </div>

            <div>
                <HyperModal isOpen={open} requestClose={() => setOpen(false)}>
                    <ModalInputContainer>
                        <label htmlFor="phone-perso">Numéro perso</label>
                        <input
                            type="tel"
                            id="phoneperso"
                            value={form.phoneNumber}
                            onChange={(e) => setForm({ ...form, phoneNumber: e.target.value })}
                        />

                        <label htmlFor="phone-pro">Numéro pro</label>
                        <input
                            type="tel"
                            id="phonepro"
                            value={form.phonePro}
                            onChange={(e) => setForm({ ...form, phonePro: e.target.value })}
                        />

                        <label htmlFor="actual-location">Habite à</label>
                        <input
                            type="text"
                            id="actualLocation"
                            value={form.actualLocation}
                            onChange={(e) => setForm({ ...form, actualLocation: e.target.value })}
                        />

                        <label htmlFor="birth-location">De</label>
                        <input
                            type="text"
                            id="birthLocation"
                            value={form.birthLocation}
                            onChange={(e) => setForm({ ...form, birthLocation: e.target.value })}
                        />

                        <label htmlFor="biography">Biographie</label>
                        <textarea
                            type="text"
                            id="biography"
                            value={form.biography}
                            onChange={(e) => setForm({ ...form, biography: e.target.value })}
                        />
                    </ModalInputContainer>
                    <button onClick={handleSubmit}>Enregistrer les modifications</button>
                    <button onClick={() => setOpen(false)}>Retour</button>
                </HyperModal>

                <AutoFixHighIcon onClick={() => setOpen(true)} />

            </div>


        </div >
    );
};

export default ProfileDescription;