
import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';

const auth = getAuth(app);

const Orders = () => {
    const [user] = useAuthState(auth);
    return (
        <div className='container'>
            <h2 className='text-center text-success mt-2'>Order Page</h2>

            Customer Name: <h5>{user ? user.displayName : 'No body'}</h5>
        </div>
    );
};

export default Orders;