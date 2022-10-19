import React from 'react';
import { useDispatch, useSelector } from "react-redux";

const HomePage = (props) => {
    const userStore = useSelector((state) => state.userStore)


    return (
        <div>
            <h1>Bonjour {userStore.user.firstname}</h1>

        </div>
    );
};

export default HomePage;