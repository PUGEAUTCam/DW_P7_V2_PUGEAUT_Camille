import React from 'react';
import SignupForm from '../../components/SignupForm';
import { LogoLogin, LottieDiv } from '../../components/StyleDefinition/picture';
import Lottie from "lottie-react";
import SignupAnimation from "../../components/lottieAnimations/101236-login (1).json"


const SignupPage = () => {
    return (
        <div>
            <div style={{ textAlign: 'center', marginBottom: 24 }}>
                <LogoLogin src="./icon-left-font-monochrome-white.svg" alt="Groupomania-logo" style={{ marginTop: 25 }} />
                <SignupForm />
                <LottieDiv>
                    <Lottie animationData={SignupAnimation} style={{ width: "25%" }} />
                </LottieDiv>
            </div>

        </div>
    );
};

export default SignupPage;



