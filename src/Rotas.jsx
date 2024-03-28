import React from 'react';
import { Route, Routes } from "react-router-dom";

import Login from './views/usuario/Login';
import Cadastro from './views/usuario/Cadastro';
import Home from './views/home/Home';


function Rotas() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="login" element={<Login />} />
                <Route path="cadastro" element={<Cadastro />} />
            </Routes>
        </>
    )
}

export default Rotas
