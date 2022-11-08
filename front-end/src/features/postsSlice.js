import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllPosts } from "../API";

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
        }
    },

    extraReducers(builder) {
        builder.addCase(getPost.fulfilled, (state, action) => {
            if (state.posts === null) {
                state.posts = action.payload
            } else {
                state.posts = { ...action.payload, docs: [...state.posts.docs, ...action.payload.docs] }
            }
        })
    }
});


export const getPost = createAsyncThunk("posts/getPost", async (page, thunkAPI) => {
    let res = await getAllPosts(page)
    return res.data
})

//export les fonctions / actions pour les fichiers
export const { setPost } = postsSlice.actions;

//Exporter la slice en entier pour le store
export default postsSlice.reducer;
