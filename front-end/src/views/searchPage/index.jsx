import React from 'react';
import Lottie from "lottie-react";
import Detective from "../../components/lottieAnimations/96262-detective-search.json"
import Layout from '../../components/layout';
import SearchBar from '../../components/SearchBar';

const SearchPage = () => {
    return (
        <Layout>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Lottie animationData={Detective} style={{ width: "30%" }} />
                <SearchBar />
            </div>
        </Layout>
    );
};

export default SearchPage;
