import React, { useRef } from 'react';
import { useSignInWithEmailAndPassword, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';
import { getAuth } from 'firebase/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import './Login.css'
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const auth = getAuth(app);
const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const location = useLocation();
    const navigate = useNavigate();

    if (loading||sending) {
        return 'Loading...';
    }
    let errorElement;

    if (error) {
        errorElement = <p className='text-danger'>Error: {error.message}</p>;
    }

    //Email-Pass Sign In

    let from = location.state?.from?.pathname || "/";

    const handleSubmit = (event) => {
    event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email,password);
    }
    //Email-Pass Sign In

    
    if (user) {
        navigate(from, { replace: true })
    }

    //navigate to register if new user 

    const navigateToRegister = () => {
        navigate('/register');
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if(email){
        await sendPasswordResetEmail(auth, email);
        toast('Password reset email sent');
        }
        else{
            toast('Password enter email');
        }
    }

    return (
        <div className="login-container">
            <h1 className='text-primary text-center m-5'>Login</h1>
            <form onSubmit={handleSubmit}>
                <input ref={emailRef} type="email" placeholder="Your email" required/>
                <br />
                <input ref={passwordRef} type="password" name="" id="" placeholder="Your password" required />
                <br />
                <input type="submit" value="Login" className="btn btn-primary m-2" />
            </form>
            <SocialLogin></SocialLogin>
            <p>Don't have an account? <span className="text-danger navigate-btn" onClick={navigateToRegister}>Register</span></p>
            <button className="btn btn-primary m-2" onClick={resetPassword}>Forgot password? Click here!</button>
            <ToastContainer></ToastContainer>
            {errorElement}
        </div>
    );
};

export default Login;