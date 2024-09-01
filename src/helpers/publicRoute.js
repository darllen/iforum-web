import React from 'react';
import { Navigate } from 'react-router-dom';
import {getUser} from "./authStore";

function isAuthenticated() {
    const user = getUser();

    return !!user;
}

function PublicRoute({ children }) {
    return isAuthenticated() ? <Navigate to="/home" /> : children;
}

export default PublicRoute;
