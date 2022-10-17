import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupPage from "./views/signupPage";
import LoginPage from "./views/loginPage";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/" element={() => null} />
                <Route path="/profil" element={() => null} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
