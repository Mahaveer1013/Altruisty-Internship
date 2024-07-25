// backend/index.js
import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import admin from 'firebase-admin';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import { User } from './models/user.js'; // Import your Mongoose model
import loginRequired from './middlewares/middleware.js';

dotenv.config();

const app = express();
app.use(cors({
  origin: true,
  credentials: true
}));
app.use(bodyParser.json());
app.use(cookieParser());

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.applicationDefault(),
});

export function generateAccessToken(payload) {
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
}
export function generateRefreshToken(payload) {
  return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '30d' });
}

app.get('/user', loginRequired , async (req, res) => {
  res.json(req.user);
});
  
  
app.post('/firebase-login', async (req, res) => {
  const { idToken } = req.body;
  console.log(idToken);

  try {
    // Verify and decode the Firebase ID token
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    const email = decodedToken.email;
    console.log(decodedToken,'\n\n');

    // Fetch user data from MongoDB
    const user = await User.findOne({ email: email });

    if (!user) {
      user = await User.create({ email });
    }

    // Create a payload for the JWT token
    const tokenPayload = {
      email: user.email,
      user_type: user.user_type,
    };

    const accessToken = generateAccessToken(tokenPayload);
    const refreshToken = generateRefreshToken(tokenPayload);

    // Set the token in a cookie
    res.cookie('accessToken', accessToken, {
      httpOnly: true,
      maxAge: 3600000, // 1 hour
      secure: true,   // Set to true in production with HTTPS
      sameSite: 'None' // Set 'SameSite' to 'None' for cross-site cookies
    });
    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      maxAge: 259200000,
      secure: true,   // Set to true in production with HTTPS
      sameSite: 'None' // Set 'SameSite' to 'None' for cross-site cookies
    });

    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error('Error during Firebase login:', error);
    res.status(401).json({ message: 'Unauthorized' });
  }
});

app.get('/admin-route', loginRequired, async (req, res) => {
  console.log(req.user.user_type);
  if (req.user.user_type !== 1) {
    res.status(401).json({message: 'Unauthorized User'})
  }
  else {
    res.send('You Are Admin')
  }
})

app.get('/user-route', loginRequired, async (req, res) => {
  if (req.user.user_type !== 2) {
    res.status(401).json({message: 'Unauthorized User'})
  }
  else {
    res.send('You Are User')
  }
})

app.get('/logout', async (req, res) => {
  res.cookie('accessToken', null, {
    httpOnly: true,
    maxAge: -1, // 1 hour
    secure: true,   // Set to true in production with HTTPS
    sameSite: 'None' // Set 'SameSite' to 'None' for cross-site cookies
  });
  res.cookie('refreshToken', null, {
    httpOnly: true,
    maxAge: -1,
    secure: true,   // Set to true in production with HTTPS
    sameSite: 'None' // Set 'SameSite' to 'None' for cross-site cookies
  });
  res.send({message:'logout successfull'})
})

mongoose.connect(process.env.MONGOURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(5000, () => {
      console.log('Server is running on port http://localhost:5000');
    });
  })
  .catch(error => {
    console.error('Database connection error:', error);
  });
