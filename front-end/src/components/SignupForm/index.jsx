import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { API_ROUTES } from '../../API';
import axios from "axios";
import { validEmail, validFirstname, validName, validPassword } from '../../utils/formCheck';
import { Button, InputForm } from '../ButtonStyle/style';

const SignupForm = () => {

    const [form, setForm] = useState({
        name: '',
        firstname: '',
        email: '',
        password: '',
        error: '',
    });

    const navigate = useNavigate()

    const handleSubmit = () => {

        if (
            validName(form.name).isValid &&
            validFirstname(form.firstname).isValid &&
            validEmail(form.email).isValid &&
            validPassword(form.password).isValid
        ) {
            axios.post(API_ROUTES.signup, {
                name: form.name,
                firstname: form.firstname,
                email: form.email,
                password: form.password,
            })
                .then((res) => {
                    navigate('/')
                })

                .catch(({ response }) => {
                    setForm({ ...form, error: response?.status === 500 ? 'Erreur serveur' : response?.data?.message })
                });
        }

    };

    return (
        <div>
            <InputForm
                type="text"
                id='name'
                placeholder='Nom'
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
            <div>{form.password.length >= 1 ? validPassword(form.password).message : null}</div>


            <Button onClick={handleSubmit} style={{ marginLeft: 0, marginTop: 61 }}>S'inscrire</Button>

            <p style={{ marginTop: 48 }}>Vous avez déjà un compte ? <Link to='/' style={{ color: "#24b6a9" }}>Connectez-vous</Link></p>
        </div>
    );
};

export default SignupForm;

