import React, { useState } from 'react';
// import CryptoJS from 'crypto-js';
// import api from '../api.js';
import api from '../api.js';

const CredentialLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isSignup, setIsSignup] = useState(false); // State to toggle between login and signup forms

    const handleSubmit = async (e, type) => {
        e.preventDefault();
        const url = type === 'signup' ? '/credential-signup' : '/credential-login';
        try {
            const response = await api.post(url, {
                username: username,
                password: password
            }, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            });

            // Extract the data from the response
            const data = response.data;
            console.log(data);

            // Handle response here (e.g., redirect, display a message, etc.)
        } catch (error) {
            console.error(`Error during ${type}:`, error);
        }
    };

    const logout = async () => {
        try {
            const response = await api.get('/logout', {
                withCredentials: true
            });

            // Extract the data from the response
            const data = response.data;
            console.log(data);
        } catch (error) {
            console.error('Error during logout:', error);
        }
    };

    const checkUser = async () => {
        try {
            const response = await api.get('/user', {
                withCredentials: true
            });

            // Extract the data from the response
            const data = response.data;
            console.log(data);
        } catch (error) {
            console.error('Error during check user:', error);
        }
    };

    const adminProtectedRoute = async () => {
        try {
            const response = await api.get('/check-admin', {
                withCredentials: true
            });

            // Extract the data from the response
            const data = response.data;
            console.log(data);
        } catch (error) {
            console.error('Error during admin route access:', error);
        }
    };

    const userProtectedRoute = async () => {
        try {
            const response = await api.get('/check-user', {
                withCredentials: true
            });

            // Extract the data from the response
            const data = response.data;
            console.log(data);
        } catch (error) {
            console.error('Error during user route access:', error);
        }
    };

    return (
        <div style={{ marginTop: '190px' }}>
            <button onClick={() => setIsSignup(false)}>Login</button>
            <button onClick={() => setIsSignup(true)}>Sign Up</button>

            {isSignup ? (
                <form onSubmit={(e) => handleSubmit(e, 'signup')}>
                    <h2>Sign Up</h2>
                    Username:
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit">Sign Up</button>
                </form>
            ) : (
                <form onSubmit={(e) => handleSubmit(e, 'login')}>
                    <h2>Login</h2>
                    Username:
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit">Login</button>
                </form>
            )}

            <button onClick={logout}>Logout</button>
            <div onClick={checkUser}>
                Check User
            </div>
            <div onClick={adminProtectedRoute}>
                For Admin
            </div>
            <div onClick={userProtectedRoute}>
                For User
            </div>
        </div>
    );
};

export default CredentialLogin;
