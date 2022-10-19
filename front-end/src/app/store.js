import { configureStore } from "@reduxjs/toolkit";
//Mes slices export de features
import { usersSlice } from "../features/usersSlice";


export const store = configureStore({
    reducer: {
        userStore: usersSlice.reducer,
    },
});