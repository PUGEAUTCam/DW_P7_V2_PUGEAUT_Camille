import React from 'react';
import Header from '../../components/Header';
import ProfileCover from '../../components/ProfileCover';
import ProfileDescription from '../../components/ProfileDescription';
import ProfilePosts from '../../components/ProfilePosts';

const ProfilePage = () => {
    return (
        <div>
            <Header />
            <ProfileCover />
            <ProfileDescription />
            <ProfilePosts />
        </div>
    );
};

export default ProfilePage;