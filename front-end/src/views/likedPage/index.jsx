import React from 'react';
import Header from '../../components/Header';
import LikedPosts from '../../components/LikedPosts';

const LikedPage = () => {
    return (
        <div>
            <Header />
            <h1 style={{ textAlign: "center", color: "rgb(213 23 23)", fontWeight: 400 }}>Groupost' Favoris</h1>
            <LikedPosts />
        </div>
    );
};

export default LikedPage;