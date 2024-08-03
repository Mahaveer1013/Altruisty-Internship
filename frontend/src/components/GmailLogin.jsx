import { auth, googleProvider } from '../firebaseConfig';
import { signInWithPopup, signOut } from 'firebase/auth';
import React from 'react';
import api from '../api';
// import api from '../api';

const GmailLogin = () => {

    const signInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            let email = result.user.email
            if (!email) {
                email = result.user.providerData[0].email
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

            // Extract the data from the response
            const data = response.data;
            console.log(data);
        } catch (error) {
            console.error('Error during sign-in:', error);
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
            console.error('Error during sign-in:', error);
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
            console.error('Error during sign-in:', error);
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
            console.error('Error during sign-in:', error);
        }
    };

    return (
        <>
            <div onClick={signInWithGoogle}>
                Sign in via Gmail
            </div>
            <div onClick={logout}>
                Log out
            </div>
            <div onClick={checkUser}>
                Check User
            </div>
            <div onClick={adminProtectedRoute}>
                For admin
            </div>
            <div onClick={userProtectedRoute}>
                For User
            </div>
        </>
    );
}

export default GmailLogin;
