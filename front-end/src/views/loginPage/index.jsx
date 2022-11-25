import React from 'react';
import LoginForm from '../../components/LoginForm';

const LoginPage = () => {
    return (
        <div style={{ textAlign: 'center', marginBottom: 24 }}>
            <img src="./icon-left-font-monochrome-white.svg" alt="Groupomania-logo" style={{ marginTop: 25 }} />
            <LoginForm />
        </div>
    );
};

export default LoginPage;