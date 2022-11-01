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
            state.posts = action.payload;
        })
    }
});


export const getPost = createAsyncThunk("posts/getPost", async () => {
    let res = await getAllPosts()
    return res.data
})

//export les fonctions / actions pour les fichiers
export const { setPost } = postsSlice.actions;

//Exporter la slice en entier pour le store
export default postsSlice.reducer;
