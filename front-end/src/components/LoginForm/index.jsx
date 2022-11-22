import React, { useState } from 'react';
import axios from "axios";
import { useLocalStorage } from '../../hooks/useLocalStorage';
import Text from "../Text"
import { Link, useNavigate } from 'react-router-dom';
import { API_ROUTES } from '../../API';
import { useDispatch } from "react-redux";
import { getUser } from "../../features/usersSlice";

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
                setForm({ ...form, error: response?.status === 500 ? 'Notre serveur est actuellement indisponible' : "Votre email ou mot de passe est incorrect" })
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

            <button onClick={handleSubmit}>Connexion</button>

            <p>Vous n’avez pas de compte ? <Link to="/signup">Inscrivez-vous</Link></p>
            <div>{form.error}</div>
        </div>


    );
};

export default LoginForm;

