import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useLocation, Navigate } from 'react-router';
import auth from '../firebase.init';
import Loading from '../Loading/Loading';
const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    let location = useLocation();
    if (loading) {
        <Loading />
    }
    else if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
};
export default RequireAuth;