import React from 'react';
import SignupForm from '../../components/SignupForm';
import { LogoLogin } from '../../components/StyleDefinition/picture';

const SignupPage = () => {
    return (
        <div>
            <div style={{ textAlign: 'center', marginBottom: 24 }}>
                <LogoLogin src="./icon-left-font-monochrome-white.svg" alt="Groupomania-logo" style={{ marginTop: 25 }} />
                <SignupForm />
            </div>

        </div>
    );
};

export default SignupPage;



