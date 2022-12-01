import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs';
import CreateIcon from '@mui/icons-material/Create';
import { Background, ContainerBio, ModalInputContainer } from './style';
import { profileUpdate } from '../../API';
import { useDispatch } from "react-redux";
import { deleteUser, getUser } from '../../features/usersSlice';
import { useNavigate } from 'react-router-dom';
import { ButtonDeco, ButtonTurquoise, InputModal, TextArea2 } from '../ButtonStyle/style';
import { ContainerBtn, Label } from '../ProfileDescription/style';
import Modal from 'react-modal';
import colors from "../StyleDefinition/colors"

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
        dispatch(deleteUser())
        navigate('/login')
    }

    const customStyles = {
        content: {
            borderRadius: 10,
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: colors.bg1
        },
        overlay: {
            zIndex: 999
        }
    };

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
                                />}
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
                <Modal style={customStyles} isOpen={open} onRequestClose={() => setOpen(false)}>
                    <ModalInputContainer>
                        <Label htmlFor="actual-location">Poste occupé</Label>
                        <InputModal
                            type="tel"
                            id="phoneperso"
                            value={form.phoneNumber}
                            onChange={(e) => setForm({ ...form, phoneNumber: e.target.value })}
                        />
                        <Label htmlFor="actual-location">Numéro de téléphone</Label>
                        <InputModal
                            type="tel"
                            id="phonepro"
                            value={form.phonePro}
                            onChange={(e) => setForm({ ...form, phonePro: e.target.value })}
                        />

                        <Label htmlFor="actual-location">Habite à</Label>
                        <InputModal
                            type="text"
                            id="actualLocation"
                            value={form.actualLocation}
                            onChange={(e) => setForm({ ...form, actualLocation: e.target.value })}
                        />

                        <Label htmlFor="birth-location">De</Label>
                        <InputModal
                            type="text"
                            id="birthLocation"
                            value={form.birthLocation}
                            onChange={(e) => setForm({ ...form, birthLocation: e.target.value })}
                        />

                        <Label htmlFor="biography">Biographie</Label>
                        <TextArea2
                            type="text"
                            id="biography"
                            value={form.biography}
                            onChange={(e) => setForm({ ...form, biography: e.target.value })}
                        />
                    </ModalInputContainer>
                    <ContainerBtn>
                        <ButtonTurquoise onClick={handleSubmit}>Enregistrer</ButtonTurquoise>
                        <ButtonTurquoise onClick={() => setOpen(false)}>Retour</ButtonTurquoise>
                    </ContainerBtn>
                </Modal>
            </div>

        </div >
    );
};

export default ProfileDescription;