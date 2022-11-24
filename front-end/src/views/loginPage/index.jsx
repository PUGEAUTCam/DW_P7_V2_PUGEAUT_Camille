import React from 'react';
import LoginForm from '../../components/LoginForm';

const LoginPage = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: "25px", marginBottom: 24 }}>
            <img src="./icon-left-font-monochrome-white.svg" alt="Groupomania-logo" />
            <LoginForm />
        </div>
    );
};

export default LoginPage;