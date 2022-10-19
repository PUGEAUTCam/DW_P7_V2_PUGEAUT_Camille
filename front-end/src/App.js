import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignupPage from "./views/signupPage";
import LoginPage from "./views/loginPage";
import HomePage from "./views/homePage";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserAsync } from "./features/usersSlice";

function App() {
    const dispatch = useDispatch();
    const [ready, setReady] = useState(false)

    useEffect(() => {
        console.log('coucou');
        getUserAsync(dispatch)
        setReady(true)
    }, [])

    const RequiredLogged = (props) => {
        let logged = useSelector((state) => state.userStore)
        return logged.user ? props.children : <Navigate to="/login" replace />
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
                    element={
                        <RequiredLogged>
                            <HomePage />
                        </RequiredLogged>
                    }
                />

                <Route path="/profil" element={() => null} />

            </Routes>
        </BrowserRouter>
    );
}

export default App;

