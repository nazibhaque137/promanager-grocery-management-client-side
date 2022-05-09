import React, { useRef } from 'react';
import { useSignInWithGoogle, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';
import { getAuth } from 'firebase/auth';
import { useLocation, useNavigate } from 'react-router-dom';

const auth = getAuth(app);

const SocialLogin = () => {

    //Google Sign In
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const location = useLocation();
    const navigate = useNavigate();

    if (loading) {
        return 'Loading...';
    }

    let errorElement;

    if (error) {
        errorElement = <p className='text-danger'>Error: {error.message}</p>;
    }

    let from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(() => {
                navigate(from, { replace: true })
            })
    }
    //Google Sign In


    if (user) {
        navigate(from, { replace: true })
    }

    return (
        <div>
            <button className="btn btn-primary m-2" onClick={handleGoogleSignIn}>Sign In with Google</button>
        </div>
    );
};

export default SocialLogin;