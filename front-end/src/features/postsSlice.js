import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllPosts } from "../API";
// eslint-disable-next-line 
import { current } from '@reduxjs/toolkit'

const initialState = {
    posts: null,
    loading: false,
    error: null
};

export const postsSlice = createSlice({
    name: 'postsStore',

    initialState,

    reducers: {
        setPost: (state, action) => {
            state.posts = action.payload;
        },
        addPost: (state, action) => {
            console.log(action.payload);
            state.posts = { ...state.posts, docs: [action.payload, ...state.posts.docs] }
        },
        updatePostStore: (state, action) => {
            let index = state.posts.docs.findIndex(e => e._id === action.payload.id);
            state.posts.docs[index] = { ...state.posts.docs[index], ...action.payload.post }
        },
        likePostStore: (state, action) => {
            let index = state.posts.docs.findIndex(e => e._id === action.payload.postId);
            if (state.posts.docs[index].usersLiked.length === 0 || !state.posts.docs[index].usersLiked.includes(action.payload.user)) {
                state.posts.docs[index].likes = state.posts.docs[index].likes + 1;
                state.posts.docs[index].usersLiked.push(action.payload.user)
            } else if (state.posts.docs[index].usersLiked.includes(action.payload.user)) {
                state.posts.docs[index].likes = state.posts.docs[index].likes - 1;
                let userArrayIndex = state.posts.docs[index].usersLiked.findIndex(c => c.userId === action.payload.user)
                state.posts.docs[index].usersLiked.splice(userArrayIndex, 1)
            }
        },
        deletePostStore: (state, action) => {
            let index = state.posts.docs.findIndex(e => e._id === action.payload.postId);
            state.posts.docs.splice(index, 1)
        },
    },

    extraReducers(builder) {
        builder.addCase(getPost.fulfilled, (state, action) => {
            if (state.posts === null || action.payload.page === 1) {
                state.posts = action.payload
            } else {
                state.posts = { ...action.payload, docs: [...state.posts.docs, ...action.payload.docs] }
            }
        })
    }
});

export const getPost = createAsyncThunk("posts/getPost", async (page) => {
    let res = await getAllPosts(page)
    return res.data
})

//export les fonctions / actions pour les fichiers
export const { setPost, addPost, updatePost, likePostStore, deletePostStore, updatePostStore } = postsSlice.actions;

//Exporter la slice en entier pour le store
export default postsSlice.reducer;
