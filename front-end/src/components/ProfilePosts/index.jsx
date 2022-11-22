import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getuserPosts } from '../../API';
import Post from '../Post';


const ProfilePosts = ({ id }) => {
    console.log(id)
    const location = useLocation()
    const [data, setData] = useState(null);
    const [ready, setReady] = useState(false);

    const getData = async () => {
        if (id) {
            await getuserPosts(id).then((res) => setData(res.data));
        } else {
            await getuserPosts().then((res) => setData(res.data));
        }
        setReady(true);
    }

    useEffect(() => {
        getData()
    }, [location])

    if (!ready) {
        return null;
    }

    return (
        <div>
            {data?.map((post, index) =>
                <Post
                    key={index}
                    post={post}
                    onUpdate={getData}
                    onDelete={getData}
                    onLike={getData}
                    onComment={getData}
                />
            )}
        </div>
    );
};
export default ProfilePosts;