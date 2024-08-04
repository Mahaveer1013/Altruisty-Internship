import { auth, googleProvider } from '../firebaseConfig';
import { signInWithPopup } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import api from '../api';

const GmailLogin = () => {
    // State for storing responses
    const [userResponse, setUserResponse] = useState(null);
    const [adminResponse, setAdminResponse] = useState(null);
    const [checkUserResponse, setCheckUserResponse] = useState(null);
    const [currentUser, setCurrentUser] = useState(null);
    const [communityName, setCommunityName] = useState('');

    useEffect(() => {
        const fetchCurrentUser = async () => {
            try {
                const user = api.get('/user');
                console.log(user);
                setCurrentUser(user);
            } catch (error) {
                console.error('Error fetching current user:', error);
            }
        };

        fetchCurrentUser();
    }, []);

    const signInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            let email = result.user.email;
            if (!email) {
                email = result.user.providerData[0].email;
            }
            const response = await api.post('/firebase-login', { email: email }, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            });

            // Extract the data from the response
            const data = response.data;
            console.log(data);
        } catch (error) {
            console.error('Error during sign-in:', error);
        }
    };

    const checkUser = async () => {
        try {
            const response = await api.get('/user', {
                withCredentials: true
            });

            // Extract the data from the response and update state
            const data = response.data;
            setUserResponse(data);
        } catch (error) {
            console.error('Error during check user:', error);
        }
    };

    const adminProtectedRoute = async () => {
        try {
            const response = await api.get('/check-admin', {
                withCredentials: true
            });

            // Extract the data from the response and update state
            const data = response.data;
            setAdminResponse(data);
        } catch (error) {
            console.error('Error during admin protected route:', error);
        }
    };

    const userProtectedRoute = async () => {
        try {
            const response = await api.get('/check-user', {
                withCredentials: true
            });

            // Extract the data from the response and update state
            const data = response.data;
            setCheckUserResponse(data);
        } catch (error) {
            console.error('Error during user protected route:', error);
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

    const handleSendCommunityData = async () => {        
        if (communityName ) {
            try {
                const response = await api.post('/create-community', {
                    communityName,
                }, {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    withCredentials: true
                });

                // Handle the response
                const data = response.data;
                console.log('Community data sent:', data);
            } catch (error) {
                console.error('Error sending community data:', error);
            }
        } else {
            console.error('Community name or user information is missing.');
        }
    };

    return (
        <div className="container mx-auto p-4">
            <div className="flex flex-wrap justify-center mb-4 space-x-2">
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    onClick={signInWithGoogle}
                >
                    Sign in via Gmail
                </button>
                <button
                    className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                    onClick={logout}
                >
                    Log out
                </button>
                <button
                    className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600"
                    onClick={checkUser}
                >
                    Check User
                </button>
                <button
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    onClick={adminProtectedRoute}
                >
                    For Admin
                </button>
                <button
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                    onClick={userProtectedRoute}
                >
                    For User
                </button>
            </div>

            {/* Display responses */}
            <div className="mt-4">
                {userResponse && (
                    <div className="bg-gray-100 p-4 rounded mb-4">
                        <h3 className="text-lg font-semibold">User Response:</h3>
                        <pre>{JSON.stringify(userResponse, null, 2)}</pre>
                    </div>
                )}
                {adminResponse && (
                    <div className="bg-gray-100 p-4 rounded mb-4">
                        <h3 className="text-lg font-semibold">Admin Response:</h3>
                        <pre>{JSON.stringify(adminResponse, null, 2)}</pre>
                    </div>
                )}
                {checkUserResponse && (
                    <div className="bg-gray-100 p-4 rounded mb-4">
                        <h3 className="text-lg font-semibold">Check User Response:</h3>
                        <pre>{JSON.stringify(checkUserResponse, null, 2)}</pre>
                    </div>
                )}
            </div>
            <div className="mb-4">
                <label className="block text-lg font-medium mb-2" htmlFor="communityName">
                    Community Name:
                </label>
                <input
                    id="communityName"
                    type="text"
                    value={communityName}
                    onChange={(e) => setCommunityName(e.target.value)}
                    className="border border-gray-300 p-2 rounded w-full"
                    placeholder="Enter community name"
                />
                <button
                    onClick={handleSendCommunityData}
                    className="bg-blue-500 text-white px-4 py-2 rounded mt-2 hover:bg-blue-600"
                >
                    Send Community Data
                </button>
            </div>
        </div>
    );
}

export default GmailLogin;
