import React, { useContext } from 'react';
import AuthContext from '../../context/auth/authContext';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

    const authContext = useContext(AuthContext);

    const { isAuthenticated, loading } = authContext;

    if (loading) {
        return <h1>Loading...</h1>;
    }

    return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;