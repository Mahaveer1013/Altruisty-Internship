import { auth, googleProvider } from '../firebaseConfig';
import { signInWithPopup, signOut } from 'firebase/auth';
import React from 'react';
import axios from 'axios'
import CryptoJS from 'crypto-js';

const GmailLogin = () => {

    const Encrypted = (data) => {
        const enc = CryptoJS.AES.encrypt(JSON.stringify(data), process.env.REACT_APP_SECRET_KEY).toString()
        return enc;
    }
    
      const Decrypted = (data) => {
        const bytes = CryptoJS.AES.decrypt(data, process.env.REACT_APP_SECRET_KEY);
        const dec = JSON.parse(bytes.toString(CryptoJS.enc.Utf8))
        return dec;
      } // may useful in further process

    const signInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            let email = result.user.email
            if (!email) {
                email = result.user.providerData[0].email
            }
            const response = await axios.post('http://localhost:5000/firebase-login', { encrypted_email : Encrypted(email) }, {
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
