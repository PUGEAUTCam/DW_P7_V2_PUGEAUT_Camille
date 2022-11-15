import React, { useEffect } from 'react';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getPost, updatePostStore, likePostStore, deletePostStore } from '../../features/postsSlice';
import Post from '../Post';
import InfiniteScroll from "react-infinite-scroll-component";
import CreatePost from '../CreatePost';

const HomePosts = () => {

    const postsStore = useSelector((state) => state.postsStore);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPost(1))
    }, [])

    return (
        <InfiniteScroll
            dataLength={postsStore.posts?.docs?.length || 0}
            next={() => postsStore.posts?.hasNextPage && dispatch(getPost(postsStore.posts?.nextPage))}
            loader={<h4>Loading...</h4>}
            hasMore={postsStore.posts?.hasNextPage}
            endMessage={<CreatePost />}
        >
            {postsStore.posts?.docs?.map((post, index) =>
                <Post
                    key={index}
                    post={post}
                    onUpdate={(updatedPost) => dispatch(updatePostStore(updatedPost))}
                    onLike={(likedPost) => dispatch(likePostStore(likedPost))}
                    onDelete={(deletedPost) => dispatch(deletePostStore(deletedPost))}
                />)}
        </InfiniteScroll>
    );
}

export default HomePosts;