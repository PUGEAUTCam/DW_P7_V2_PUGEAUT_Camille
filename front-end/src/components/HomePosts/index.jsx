import React, { useEffect } from 'react';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getPost } from '../../features/postsSlice';
import Posts from '../Posts';

const HomePosts = () => {

    const postsStore = useSelector((state) => state.postsStore);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPost())
    }, [])



    return (
        <div>
            {postsStore.posts?.map((post, index) =>
                <Posts
                    key={index}
                    post={post}
                    onUpdate={() => dispatch(getPost())}
                />)}
        </div>
    );
}

export default HomePosts;