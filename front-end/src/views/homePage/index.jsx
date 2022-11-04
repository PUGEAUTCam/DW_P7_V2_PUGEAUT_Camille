import React from 'react';
import CreatePost from '../../components/CreatePost';
import Header from '../../components/Header';
import HomePosts from '../../components/HomePosts';

const HomePage = (props) => {

    return (
        <div>
            <Header />
            <CreatePost />
            <HomePosts />
        </div>
    );
};

export default HomePage;