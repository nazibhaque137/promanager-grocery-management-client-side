import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
import app from "../../firebase.init";
import { useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';


const auth = getAuth(app);

const Register = () => {
    const [user, setUser] = useState({});

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [registered, setRegistered] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();

    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }

    const handleRegisteredChange = event => {
        setRegistered(event.target.checked)
    }

    const handleFormSubmit = event => {
        if (registered) {
            signInWithEmailAndPassword(auth, email, password)
                .then((result) => {
                    const user = result.user;
                    console.log(user);
                })
                .catch((error) => {
                    console.log(error);
                });
        }

        else {
            createUserWithEmailAndPassword(auth, email, password)
                .then((result) => {
                    const user = result.user;
                    console.log(user);
                })
                .catch((error) => {
                    console.log(error);
                })
        }
        event.preventDefault();
    }


    const navigateToLogin = () => {
        navigate('/login');
    }

    return (
        <div className="register-container">
            <h1 className='text-primary text-center m-5'>Register</h1>
            <form onSubmit={handleFormSubmit}>
                <input onBlur={handleEmailBlur} type="email" placeholder="Your email" required />
                <br />
                <input onBlur={handlePasswordBlur} type="password" name="" id="" placeholder="Your password" required />
                <br />

                <input type="submit" value="Register" className="btn btn-primary m-2"/>

            </form>
            <SocialLogin></SocialLogin>
            <p>Already have an account? <span className="text-danger navigate-btn" onClick={navigateToLogin}>Login</span></p>

        </div>
    );
};

export default Register;