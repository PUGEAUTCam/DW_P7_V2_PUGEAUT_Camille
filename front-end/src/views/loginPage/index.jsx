import React from 'react';
import LoginForm from '../../components/LoginForm';
import { LogoLogin, LottieDiv } from '../../components/StyleDefinition/picture';
import Lottie from "lottie-react";
import officeWork from "../../components/lottieAnimations/77389-office-work.json"

const LoginPage = () => {
    return (
        <div style={{ textAlign: 'center', marginBottom: 24 }}>
            <LogoLogin src="./icon-left-font-monochrome-white.svg" alt="Groupomania-logo" style={{ marginTop: 25 }} />
            <LoginForm />
            <LottieDiv>
                <Lottie animationData={officeWork} style={{ width: "30%" }} />
            </LottieDiv>
        </div>
    );
};

export default LoginPage;