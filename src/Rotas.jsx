import React from 'react';
import { Route, Routes } from "react-router-dom";

import Inicio from './views/usuario/Inicio';
import Login from './views/usuario/Login';
import Cadastro from './views/usuario/Cadastro';
import Home from './views/home/Home';
import Pergunta from './views/pergunta/Pergunta';
import PrivateRoute from "./helpers/privateRoute";
import PublicRoute from "./helpers/publicRoute";

function Rotas() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="login" element={
                    <PublicRoute>
                        <Login />
                    </PublicRoute>
                } />
                <Route path="cadastro" element={
                    <PublicRoute>
                        <Cadastro />
                    </PublicRoute>
                } />
                <Route path="home" element={
                    <PrivateRoute>
                        <Home />
                    </PrivateRoute>
                } />
                <Route path="pergunta" element={
                    <PrivateRoute>
                        <Pergunta />
                    </PrivateRoute>
                } />
            </Routes>
        </>
    )
}

export default Rotas;
