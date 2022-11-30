import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { API_ROUTES } from '../../API';
import axios from "axios";
import { getUser } from "../../features/usersSlice";
import { useDispatch } from "react-redux";
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { validEmail, validFirstname, validName, validPassword } from '../../utils/formCheck';
import { Button, InputForm } from '../ButtonStyle/style';

const SignupForm = () => {
    // eslint-disable-next-line
    const [token, setToken] = useLocalStorage("TOKEN", []);
    const dispatch = useDispatch();


    const [form, setForm] = useState({
        name: '',
        firstname: '',
        email: '',
        password: '',
        error: '',
    });

    const navigate = useNavigate()

    const handleSubmit = async () => {

        if (
            validName(form.name).isValid &&
            validFirstname(form.firstname).isValid &&
            validEmail(form.email).isValid &&
            validPassword(form.password).isValid
        ) {
            await axios.post(API_ROUTES.signup, {
                name: form.name,
                firstname: form.firstname,
                email: form.email,
                password: form.password,
            })
                .then((res) => res)
                .catch(({ response }) => {
                    setForm({ ...form, error: response?.status === 500 ? 'Erreur serveur' : response?.data?.message })
                });

            let res = await axios.post(API_ROUTES.login, {
                email: form.email,
                password: form.password,
            })
                .then(async (res) => res)
                .catch(({ response }) => {
                    setForm({ ...form, error: response?.status === 500 ? 'Notre serveur est actuellement indisponible' : "Votre email et / ou mot de passe est incorrect" })
                });
            setToken(res.data.token);
            await dispatch(getUser())
            navigate('/')
        }
    };

    return (
        <div>
            <InputForm
                type="text"
                id='name'
                placeholder='Nom'
                autoFocus="true"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <div>{form.name.length >= 1 ? validName(form.name).message : null}</div>
            <InputForm
                type="text"
                id='firstname'
                placeholder='Prénom'
                value={form.firstname}
                onChange={(e) => setForm({ ...form, firstname: e.target.value })}
            />
            <div>{form.firstname.length >= 1 ? validFirstname(form.firstname).message : null}</div>
            <InputForm
                type="text"
                id='email'
                placeholder='Adresse mail'
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <div>{form.email.length >= 1 ? validEmail(form.email).message : null}</div>
            <InputForm
                type="password"
                id='password'
                placeholder='Mot de passe'
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
            <div style={{ marginTop: 6 }}>{form.password.length >= 1 ? validPassword(form.password).message : null}</div>

            <Button onClick={handleSubmit} style={{ marginLeft: 0, marginTop: 61 }}>S'inscrire</Button>

            <p style={{ marginTop: 48, textAlign: "unset" }}>Vous avez déjà un compte ? <Link to='/' style={{ color: "#24b6a9" }}>Connectez-vous</Link></p>
        </div>
    );
};

export default SignupForm;

