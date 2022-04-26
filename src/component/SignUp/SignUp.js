
import React from 'react';

const SignUp = () => {
    return (
        <div className='container'>
            <h2 className='text-center text-success mt-4'>Please Sign Up</h2>

            <form className='w-50 mx-auto'>
                <div className="mb-3">
                    <label className="form-label">Your Name</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" />
                </div>

                <button type="submit" className="btn btn-primary me-2">Sign Up</button>
                <button className='btn btn-primary'> Sign In Google </button>
            </form>
        </div>
    );
};

export default SignUp;