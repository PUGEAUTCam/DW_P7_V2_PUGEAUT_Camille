import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_ROUTES, header } from "../API";


//Initialize the state value
const initialState = {
    user: null,
    loading: false,
    error: null
};

export const usersSlice = createSlice({
    name: 'userStore',

    initialState,

    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        deleteUser: (state, action) => {
            state.user = initialState.user;
        }
    },

    extraReducers(builder) {
        builder.addCase(getUser.fulfilled, (state, action) => {
            state.user = action.payload.user;
        })
    }
});


export const getUser = createAsyncThunk("user/getUser", async () => {
    let res = await axios.get(API_ROUTES.me, header())
        .then((res) => res)
        .catch((error) => console.log(error))
    return res.data
})

//export les fonctions / actions pour les fichiers
export const { setUser, deleteUser } = usersSlice.actions;

//Exporter la slice en entier pour le store
export default usersSlice.reducer;

