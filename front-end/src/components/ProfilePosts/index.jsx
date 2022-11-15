import React, { useEffect, useState } from 'react';
import { getuserPosts } from '../../API';
import Post from '../Post';


const ProfilePosts = () => {

    const [data, setData] = useState(null);

    useEffect(() => {
        getData()
    }, [])

    const getData = () => getuserPosts().then((res) => setData(res.data));

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