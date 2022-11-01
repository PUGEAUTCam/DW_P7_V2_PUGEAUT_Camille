import { configureStore } from "@reduxjs/toolkit";
//Mes slices export de features
import { usersSlice } from "../features/usersSlice";
import { postsSlice } from "../features/postsSlice";


export const store = configureStore({
    reducer: {
        userStore: usersSlice.reducer,
        postsStore: postsSlice.reducer,


    },
});