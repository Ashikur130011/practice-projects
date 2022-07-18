import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

export default function RequireAuth({children}){
    const {users} = useAuth()
    const location = useLocation()
    if(!users.email){
        return <Navigate to="/login" state={{ from: location }} replace />
    }
    return children
    
}

