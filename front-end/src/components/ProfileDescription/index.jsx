import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import HyperModal from 'react-hyper-modal';
import { ModalInputContainer } from './style';
import { profileUpdate } from '../../API';
import { useDispatch } from "react-redux";
import { getUser } from '../../features/usersSlice';
import { useNavigate } from 'react-router-dom';


const ProfileDescription = ({ dataUser }) => {

    const userStore = useSelector((state) => state.userStore);
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    let user = dataUser || userStore.user

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

    const handleDeconnexion = () => {
        localStorage.clear()
        navigate('/login')
    }

    return (
        <div>
            <div>
                <h2>{user.firstname + " " + user.name}</h2>
                <p>Membre depuis le {dayjs(user.dateSignup).format("DD/MM/YYYY")}</p>
                <p>Numéro perso {user.phoneNumber}</p>
                <p>Numéro pro {user.phonePro} </p>
                <p>Habite à {user.actualLocation}</p>
                <p>De {user.birthLocation}</p>
            </div>
            <div>
                <h3>Biographie</h3>
                <p>{user.biography}</p>
            </div>

            {
                dataUser
                    ? null
                    :
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

                        <button onClick={handleDeconnexion}>Se déconnecter</button>
                    </div>
            }
        </div >
    );
};

export default ProfileDescription;