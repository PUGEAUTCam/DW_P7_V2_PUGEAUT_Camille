import React, { useState } from 'react';
import axios from "axios";
import { useLocalStorage } from '../../hooks/useLocalStorage';
import Text from "../Text"
import { Link, useNavigate } from 'react-router-dom';
import { API_ROUTES } from '../../API';

const LoginForm = () => {

    const [token, setToken] = useLocalStorage("TOKEN", []);
    const [form, setForm] = useState({
        email: '',
        password: '',
        error: '',
    });

    const navigate = useNavigate();

    const handleSubmit = () => {

        axios.post(API_ROUTES.login, {
            email: form.email,
            password: form.password,
        })
            .then((res) => {
                setToken(res.data.token);
                navigate('/')
            })

            .catch(({ response }) => {
                setForm({ ...form, error: response?.status === 500 ? 'Notre serveur est actuellement indisponible' : response?.data?.message })
            });
    };

    return (
        <div>
            <input
                id="email"
                label="Email"
                type='text'
                placeholder='Adresse Email'
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value, error: '' })}
            />

            <input
                id="Password"
                label="Mot de passe"
                type='password'
                placeholder='Mot de passe'
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value, error: '' })}
            />

            <div onClick={handleSubmit}>Connexion</div>

            <Text>Vous n’avez pas de compte ? <Link to="/signup">Inscrivez-vous</Link></Text>
            <div>{form.error}</div>
        </div>


    );
};

export default LoginForm;

