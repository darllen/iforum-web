import React from 'react';
import { Route, Routes } from "react-router-dom";

import Inicio from './views/usuario/Inicio';
import Login from './views/usuario/Login';
import Cadastro from './views/usuario/Cadastro';
import Home from './views/home/Home';
import Pergunta from './views/pergunta/Pergunta'


function Rotas() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="login" element={<Login />} />
                <Route path="cadastro" element={<Cadastro />} />
                <Route path="home" element={<Home />} />
                <Route path="pergunta" element={<Pergunta />} />
            </Routes>
        </>
    )
}

export default Rotas
