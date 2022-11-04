import React, { useEffect, useState } from 'react';
import { getuserPosts } from '../../API';
import Posts from '../Posts';



const ProfilePosts = () => {

    const [data, setData] = useState(null);

    useEffect(() => {
        getuserPosts().then((res) => setData(res.data))
    }, [])

    return (
        <div>
            {data?.map((post, index) =>
                <Posts
                    key={index}
                    post={post}
                    onUpdate={() => { getuserPosts().then((res) => setData(res.data)) }}
                />)}
        </div>
    );
};

export default ProfilePosts;