import React from 'react';
import Header from '../../components/Header';
import Layout from '../../components/layout';
import LikedPosts from '../../components/LikedPosts';

const LikedPage = () => {
    return (
        <Layout>
            <h1 style={{ textAlign: "center", color: "rgb(213 23 23)", fontWeight: 400 }}>Groupost' Favoris</h1>
            <LikedPosts />
        </Layout>
    );
};

export default LikedPage;