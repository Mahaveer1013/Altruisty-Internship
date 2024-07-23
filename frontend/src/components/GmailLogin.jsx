import { auth, googleProvider } from '../firebaseConfig';
import { signInWithPopup, signOut } from 'firebase/auth';
import React from 'react';
import axios from 'axios'

const GmailLogin = () => {

    const signInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const idToken = await result.user.getIdToken();
        
            // Send the ID token to your server
            const response = await axios.post('http://localhost:5000/authenticate', { idToken }, {
                headers: {
                  'Content-Type': 'application/json'
                }
              });
          
              // Extract the data from the response
              const data = response.data;
              console.log('User Email:', data.email);
              console.log('User ID:', data.uid);
            
          } catch (error) {
            console.error('Error during sign-in:', error);
          }
    };

    const logout = async () => {
        try {
            const response = await axios.get('http://localhost:5000/check', {
                withCredentials:true
              });
          
              // Extract the data from the response
              const data = response.data;
              console.log('User Email:', data.email);
              console.log('User ID:', data.uid);
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
        </>
    );
}

export default GmailLogin;
