import React from 'react';
import CreatePost from '../../components/CreatePost';
import HomePosts from '../../components/HomePosts';
import Layout from '../../components/layout';

const HomePage = (props) => {

    return (
        <Layout>
            <CreatePost />
            <HomePosts />
        </Layout>
    );
};

export default HomePage;