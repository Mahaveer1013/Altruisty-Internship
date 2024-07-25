import { auth, googleProvider } from '../firebaseConfig';
import { signInWithPopup, signOut } from 'firebase/auth';
import React from 'react';
import axios from 'axios'

const GmailLogin = () => {

    const signInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const idToken = await result.user.getIdToken();
            console.log(idToken);
            console.log(result.user.email);
            // Send the ID token to your server
            const response = await axios.post('http://localhost:5000/firebase-login', { idToken }, {
                headers: {
                  'Content-Type': 'application/json'
                },
                withCredentials:true
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
            const response = await axios.get('http://localhost:5000/user', {
                withCredentials:true
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
            const response = await axios.get('http://localhost:5000/admin-route', {
                withCredentials:true
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
            const response = await axios.get('http://localhost:5000/user-route', {
                withCredentials:true
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
            const response = await axios.get('http://localhost:5000/logout', {
                withCredentials:true
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
