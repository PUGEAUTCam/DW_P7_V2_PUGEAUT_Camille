import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import axios from "axios";
import { API_ROUTES } from "../API";


//Initialize the state value
const initialState = {
    user: null,
};

export const usersSlice = createSlice({
    name: 'userStore',

    initialState,

    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        }

    }
});

export const getUserAsync = async (dispatch) => {
    let token = localStorage.getItem('TOKEN');

    if (token) {
        axios.get(API_ROUTES.me, {
            headers: { authorization: `bearer ${JSON.parse(token)}` }
        })
            .then((res) => {
                dispatch(setUser(res.data.user))
            })
            .catch((error) => console.log(error))
    }
}




//export les fonctions / actions pour les fichiers
export const { addUser, setUser } = usersSlice.actions;

//Exporter la slice en entier pour le store
export default usersSlice.reducer;

