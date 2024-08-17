import React, { useState } from 'react';
import encryptApi from '../encryptApi.js';

const CredentialLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isSignup, setIsSignup] = useState(false); // State to toggle between login and signup forms

    const handleSubmit = async (e, type) => {
        e.preventDefault();
        const url = type === 'signup' ? '/credential-signup' : '/credential-login';
        try {
            const response = await encryptApi.post(url, {
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

    return (
        <div className="flex flex-col items-center mt-5">
            <div className="mb-4">
                <button
                    className={`px-4 py-2 rounded ${!isSignup ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-gray-300 text-gray-700'}`}
                    onClick={() => setIsSignup(false)}
                >
                    Login
                </button>
                <button
                    className={`px-4 py-2 rounded ${isSignup ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-gray-300 text-gray-700'}`}
                    onClick={() => setIsSignup(true)}
                >
                    Sign Up
                </button>
            </div>

            {isSignup ? (
                <form onSubmit={(e) => handleSubmit(e, 'signup')} className="w-full max-w-sm bg-white p-6 rounded shadow-md">
                    <h2 className="text-xl font-semibold mb-4">Sign Up</h2>
                    <div className="mb-4">
                        <label htmlFor="signupUsername" className="block text-sm font-medium mb-1">Username:</label>
                        <input
                            id="signupUsername"
                            type="text"
                            className="w-full border border-gray-300 px-3 py-2 rounded"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="signupPassword" className="block text-sm font-medium mb-1">Password:</label>
                        <input
                            id="signupPassword"
                            type="password"
                            className="w-full border border-gray-300 px-3 py-2 rounded"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                        Sign Up
                    </button>
                </form>
            ) : (
                <form onSubmit={(e) => handleSubmit(e, 'login')} className="w-full max-w-sm bg-white p-6 rounded shadow-md">
                    <h2 className="text-xl font-semibold mb-4">Login</h2>
                    <div className="mb-4">
                        <label htmlFor="loginUsername" className="block text-sm font-medium mb-1">Username:</label>
                        <input
                            id="loginUsername"
                            type="text"
                            className="w-full border border-gray-300 px-3 py-2 rounded"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="loginPassword" className="block text-sm font-medium mb-1">Password:</label>
                        <input
                            id="loginPassword"
                            type="password"
                            className="w-full border border-gray-300 px-3 py-2 rounded"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                        Login
                    </button>
                </form>
            )}
        </div>
    );
};

export default CredentialLogin;
