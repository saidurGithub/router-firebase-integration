
import { getAuth } from 'firebase/auth';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';

const auth = getAuth(app);
const Login = () => {

    const [signInWithGoogle, user,] = useSignInWithGoogle(auth);

    return (
        <div className='container'>
            <h2 className='text-center text-success mt-4'>Please Login</h2>

            <form className='w-50 mx-auto'>

                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" placeholder='Your Email' />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" placeholder='Your Password' />
                </div>

                <button type="submit" className="btn btn-primary me-2">Login</button>
            </form>

            <div className='w-50 mx-auto mt-2 '>
                <button onClick={() => signInWithGoogle()} className='btn btn-primary'> Sign In Google </button>
            </div>

        </div>
    );
};

export default Login;