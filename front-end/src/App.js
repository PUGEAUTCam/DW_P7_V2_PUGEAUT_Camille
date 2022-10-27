import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignupPage from "./views/signupPage";
import LoginPage from "./views/loginPage";
import HomePage from "./views/homePage";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./features/usersSlice";
import ProfilePage from "./views/profilePage";
import PostsLiked from "./views/postsLiked";

function App() {
    const [ready, setReady] = useState(false)
    const dispatch = useDispatch();
    const userStore = useSelector((state) => state.userStore)

    useEffect(() => {
        dispatch(getUser())
            .then(() => setReady(true))
    }, [])

    const requiredLogged = (props) => {
        let logged = userStore.user !== null
        return logged ? props.view : <Navigate to="/login" replace />
    }

    if (!ready) {
        return null;
    }

    return (
        <BrowserRouter>
            <Routes>

                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />

                <Route
                    path="/"
                    element={requiredLogged({
                        view: <HomePage />
                    })}
                />

                <Route
                    path="/profile"
                    element={requiredLogged({
                        view: <ProfilePage />
                    })}
                />

                <Route
                    path="/postsLiked"
                    element={requiredLogged({
                        view: <PostsLiked />
                    })}
                />

            </Routes>
        </BrowserRouter>
    );
}

export default App;

