import React, { useEffect } from 'react';
import { getOneUser } from '../../API';
import Header from '../../components/Header';
import ProfileCover from '../../components/ProfileCover';
import ProfileDescription from '../../components/ProfileDescription';
import ProfilePosts from '../../components/ProfilePosts';

const ProfilePage = () => {
    let params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    if (id) {
        console.log(id);
        let res = getOneUser(id)
        console.log(res);
    }




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