import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Cadastro from "./Pages/Cadastro";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Menu from "./Pages/Menu";

function Rotas() {
    return(
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/*" element={<UserMenu />} /> 
                {/* wrong urls redirect to login page */}
            </Routes>
        </Router>
    );
}

function UserMenu() {
    return(
        <Menu>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
        </Menu>
    );
}

export default Rotas;