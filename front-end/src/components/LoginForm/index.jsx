import React, { useState } from 'react';
import axios from "axios";
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { Link, useNavigate } from 'react-router-dom';
import { API_ROUTES } from '../../API';
import { useDispatch } from "react-redux";
import { getUser } from "../../features/usersSlice";
import { Button, InputForm } from '../ButtonStyle/style';
import { ContainerLogin } from './style';

const LoginForm = () => {
    // eslint-disable-next-line 
    const [token, setToken] = useLocalStorage("TOKEN", []);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [form, setForm] = useState({
        email: '',
        password: '',
        error: '',
    });

    const handleSubmit = () => {
        axios.post(API_ROUTES.login, {
            email: form.email,
            password: form.password,
        })
            .then(async (res) => {
                setToken(res.data.token);
                await dispatch(getUser())
                navigate('/')
            })

            .catch(({ response }) => {
                setForm({ ...form, error: response?.status === 500 ? 'Notre serveur est actuellement indisponible' : "Votre email et / ou mot de passe est incorrect" })
            });
    };

    return (
        <div>
            <ContainerLogin>
                <InputForm
                    id="email"
                    label="Email"
                    type='text'
                    autoFocus={true}
                    placeholder='Adresse mail'
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value, error: '' })}
                />
                <InputForm
                    id="Password"
                    label="Mot de passe"
                    type='password'
                    placeholder='Mot de passe'
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value, error: '' })}
                />

                <Button onClick={handleSubmit} style={{ marginLeft: 0, marginTop: 61 }}>Connexion</Button>
                <div style={{ marginTop: 28 }}>{form.error}</div>
            </ContainerLogin>

            <p style={{ marginTop: 48, textAlign: "unset" }}>
                Vous n’avez pas de compte ? <Link to="/signup" style={{ color: "#24b6a9" }}>Inscrivez-vous</Link>
            </p>
        </div>
    );
};

export default LoginForm;

