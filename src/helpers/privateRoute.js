import React from 'react';
import { Navigate } from 'react-router-dom';
import {getUser} from "./authStore";


function isAuthenticated() {
    const user = getUser();
    return !!user;
}

function PrivateRoute({ children }) {
    return isAuthenticated() ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
