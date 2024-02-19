import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Cadastro from "./Pages/Cadastro";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Menu from "./Pages/Menu";
import { isAuthenticated } from "./services/auth";

const PrivateRoute = ({ element }) => {
    const location = useLocation();
    if (!isAuthenticated()) {
        return <Navigate to="/login" state={{ from: location }} />;
    }
    return element;
};

function Rotas() {
    return(
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/*" element={<UserMenu />} />
            </Routes>
        </Router>
    );
}

function UserMenu() {
    return(
        <Menu>
            <Routes>
                <Route path="/home" element={<PrivateRoute element={<Home />} />} />
                <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
        </Menu>
    );
}

export default Rotas;
