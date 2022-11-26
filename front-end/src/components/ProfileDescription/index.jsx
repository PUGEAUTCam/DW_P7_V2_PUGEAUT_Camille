import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs';
import CreateIcon from '@mui/icons-material/Create';
import HyperModal from 'react-hyper-modal';
import { ContainerBio, ModalInputContainer } from './style';
import { profileUpdate } from '../../API';
import { useDispatch } from "react-redux";
import { getUser } from '../../features/usersSlice';
import { useNavigate } from 'react-router-dom';
import { Button, ButtonDeco, Input } from '../ButtonStyle/style';
import { ContainerBtn } from '../PostUpdateModal/style';

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
        <div style={{ marginTop: 82 }}>

            <ContainerBio>
                <div style={{ width: "100%" }}>
                    <h2 style={{ color: 'rgb(215 78 78)' }}>{user.firstname + " " + user.name}</h2>
                    <p><span>Membre depuis le </span>{dayjs(user.dateSignup).format("MM / YYYY")}</p>
                    <p><span>Poste occupé : </span>{user.phoneNumber}</p>
                    <p><span>Numéro pro : </span>{user.phonePro} </p>
                    <p><span>Habite à </span>{user.actualLocation}</p>
                    <p><span>De </span>{user.birthLocation}</p>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <h3>Biographie</h3>
                        {
                            dataUser
                                ? null
                                : <CreateIcon
                                    style={{ marginLeft: 10, fontSize: 21, marginBottom: 4, cursor: "pointer" }}
                                    onClick={() => setOpen(true)}
                                />
                        }
                    </div>
                    <p style={{ marginTop: 0 }}>{user.biography}</p>
                </div>
                {
                    dataUser
                        ? null
                        : <ButtonDeco onClick={handleDeconnexion}>Déconnexion</ButtonDeco>
                }
            </ContainerBio>

            <div>
                <HyperModal isOpen={open} requestClose={() => setOpen(false)}>
                    <ModalInputContainer>
                        <label htmlFor="actual-location">Poste occupé</label>
                        <Input
                            type="tel"
                            id="phoneperso"
                            value={form.phoneNumber}
                            onChange={(e) => setForm({ ...form, phoneNumber: e.target.value })}
                        />
                        <label htmlFor="actual-location">Numéro de téléphone</label>
                        <Input
                            type="tel"
                            id="phonepro"
                            value={form.phonePro}
                            onChange={(e) => setForm({ ...form, phonePro: e.target.value })}
                        />

                        <label htmlFor="actual-location">Habite à</label>
                        <Input
                            type="text"
                            id="actualLocation"
                            value={form.actualLocation}
                            onChange={(e) => setForm({ ...form, actualLocation: e.target.value })}
                        />

                        <label htmlFor="birth-location">De</label>
                        <Input
                            type="text"
                            id="birthLocation"
                            value={form.birthLocation}
                            onChange={(e) => setForm({ ...form, birthLocation: e.target.value })}
                        />

                        <label htmlFor="biography">Biographie</label>
                        <Input
                            type="text"
                            id="biography"
                            value={form.biography}
                            onChange={(e) => setForm({ ...form, biography: e.target.value })}
                        />
                    </ModalInputContainer>
                    <ContainerBtn>
                        <Button onClick={handleSubmit}>Enregistrer</Button>
                        <Button onClick={() => setOpen(false)}>Retour</Button>
                    </ContainerBtn>
                </HyperModal>
            </div>

        </div >
    );
};

export default ProfileDescription;