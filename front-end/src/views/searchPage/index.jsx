import React from 'react';
import Lottie from "lottie-react";
import Puzzle from "../../components/lottieAnimations/puzzle.json"
import Header from '../../components/Header';
import Layout from '../../components/layout';

const SearchPage = () => {
    return (
        <Layout>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Lottie animationData={Puzzle} style={{ width: "40%" }} />
                <h2>Page en cours de développement</h2>
            </div>
        </Layout>
    );
};

export default SearchPage;
