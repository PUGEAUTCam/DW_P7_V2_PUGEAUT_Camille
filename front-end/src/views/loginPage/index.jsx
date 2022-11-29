import React from 'react';
import LoginForm from '../../components/LoginForm';
import { LogoLogin } from '../../components/StyleDefinition/picture';

const LoginPage = () => {
    return (
        <div style={{ textAlign: 'center', marginBottom: 24 }}>
            <LogoLogin src="./icon-left-font-monochrome-white.svg" alt="Groupomania-logo" style={{ marginTop: 25 }} />
            <LoginForm />

        </div>
    );
};

export default LoginPage;