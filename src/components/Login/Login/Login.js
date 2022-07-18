import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import useFirebase from '../../../hooks/useFirebase';

const Login = () => {
    const{signInUsingGoogle} = useAuth()
    const location = useLocation()
    const navigate = useNavigate()
    const redirect_uri = location.state?.from || '/home';
    const googleSignIn = () =>{
        signInUsingGoogle()
            .then(result => {
                navigate(redirect_uri)
            })
    }
    return (
        <div>
            <h1>Log in here</h1>
            <button onClick={googleSignIn}>Google Sign In</button>
        </div>
    );
};

export default Login;