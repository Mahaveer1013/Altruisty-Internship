import { auth, googleProvider } from '../firebaseConfig';
import { signInWithPopup, signOut } from 'firebase/auth';
import React from 'react';

const GmailLogin = () => {

    const signInWithGoogle = async () => {
        try {
            googleProvider.addScope('email');
            googleProvider.addScope('profile');
            const result = await signInWithPopup(auth, googleProvider);
            const userDataEmail = result.user.email;
            const userProviderEmail = result.user.providerData[0].email;
            const userEmail = userDataEmail === null ? userProviderEmail : userDataEmail;
            console.log(userEmail);
        } catch (error) {
            console.error(error);
        }
    };

    const logout = async () => {
        try {
            await signOut(auth);
            console.log("User signed out");
        } catch (error) {
            console.error(error);
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
