import React, { useEffect, useState } from 'react';
import { getuserPosts, deletePost } from '../../API';
import Post from '../Post';


const ProfilePosts = () => {

    const [data, setData] = useState(null);

    useEffect(() => {
        getuserPosts().then((res) => setData(res.data))
    }, [])

    return (
        <div>
            {data?.map((post, index) =>
                <Post
                    key={index}
                    post={post}
                    onUpdate={() => { getuserPosts().then((res) => setData(res.data)) }}
                    onDelete={() => { deletePost().then((res) => setData(res.data)) }}
                />
            )}
        </div>
    );
};
export default ProfilePosts;