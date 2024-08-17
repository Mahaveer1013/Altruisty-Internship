import { credentialLogin, credentialSignup, firebaselogin, getUser, logout } from '../controllers/auth.js';
import { checkIsAdmin, loginRequired } from '../middlewares/middleware.js';
import express from 'express';
import { checkAdminRoute } from '../controllers/admin.js';
import { createCommunity } from '../controllers/community.js';
import { getAllDomainData, registerInternship, updateInternProgress } from '../controllers/internship.js';

const router = express.Router();

// ===========> get current user initally in react <==========
router.get('/user', loginRequired, getUser);
router.get('/', (req,res)=>{
    res.send('Connected');
});

// ===========> Login routes <===============
router.post('/firebase-login', firebaselogin);
router.post('/credential-login', credentialLogin);
router.post('/credential-signup', credentialSignup);
router.get('/logout', logout);

// ===========> admin routes <==============
router.get('/check-admin', loginRequired, checkIsAdmin, checkAdminRoute);

// ===========> community routes <=============
router.post('/create-community', loginRequired, createCommunity); //other functions are in socketRouter.js


// ===========> internship routes <=============
router.post('/register-internship',loginRequired, registerInternship)
router.get('/get-all-domain',loginRequired, getAllDomainData)
router.post('/internship-progress',loginRequired, updateInternProgress)


export default router;
