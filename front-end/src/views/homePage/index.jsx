import React from 'react';
import CreatePost from '../../components/CreatePost';
import Header from '../../components/Header';
import PostContainer from '../../components/PostContainer';

const HomePage = (props) => {



    return (
        <div>
            <Header />
            <CreatePost />
            <PostContainer />
        </div>
    );
};

export default HomePage;