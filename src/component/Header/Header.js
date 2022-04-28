
import { getAuth, signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import app from '../../firebase.init';
import './Header.css';

const auth = getAuth(app);
const Header = () => {
    const [user] = useAuthState(auth);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <span className='navbar-brand fw-bold'>
                    <img className='logo' src="https://i.pinimg.com/1200x/b2/cd/b9/b2cdb90972813a0c278a8589ffe70ba8.jpg" alt="" />
                    Avira
                </span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item mx-2">
                            <Link to='/home' className='nav-link'>Home</Link>
                        </li>

                        <li className="nav-item mx-2">
                            <Link to='/products' className='nav-link'>Products</Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link to='/orders' className='nav-link'>Orders</Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link to='/signup' className='nav-link'>Sign Up</Link>
                        </li>
                        <li className="nav-item mx-2">
                            <span>{user?.displayName && user.displayName}</span>
                            {
                                user?.uid ?
                                    <button onClick={() => signOut(auth)} className='btn btn-primary'>Sign Out</button>
                                    :
                                    <Link to='/login' className='nav-link'>Login</Link>
                            }
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;