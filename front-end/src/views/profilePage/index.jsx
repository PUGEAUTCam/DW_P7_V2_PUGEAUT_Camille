import React, { useEffect, useState } from 'react';
import { getOneUser } from '../../API';
import Header from '../../components/Header';
import ProfileCover from '../../components/ProfileCover';
import ProfileDescription from '../../components/ProfileDescription';
import ProfilePosts from '../../components/ProfilePosts';
import { useLocation } from 'react-router-dom';
import Layout from '../../components/layout';
import { TextEnd } from '../../components/HomePosts/style';

const ProfilePage = () => {
    const location = useLocation();
    const [dataUser, setDataUser] = useState(null);
    const [ready, setReady] = useState(false);

    let params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    const checkId = async () => {
        if (id) {
            await getOneUser(id).then((res) => setDataUser(res.data.user))
        } else if (dataUser) {
            setDataUser(null)
        }
        setReady(true);
    }

    useEffect(() => {
        checkId()
    }, [location])

    if (!ready) {
        return null;
    }

    return (
        <Layout>
            <ProfileCover dataUser={dataUser} />
            <ProfileDescription dataUser={dataUser} />
            <ProfilePosts id={id} />
            <TextEnd>Groupost' personnels</TextEnd>
        </Layout>
    );
};

export default ProfilePage; 