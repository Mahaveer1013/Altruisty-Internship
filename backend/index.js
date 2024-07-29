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
import CryptoJS from 'crypto-js';
import bcrypt from 'bcryptjs';

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


const decryptData = (data) => {
  const bytes = CryptoJS.AES.decrypt(data, process.env.SECRET_KEY);
  const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  return decryptedData;
};

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
  const { encrypted_email } = req.body;
  console.log(encrypted_email);
  const email = decryptData(encrypted_email)
  console.log(email);
  try {
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

app.post('/credential-login', async (req, res) => {
  try {
    const { encrypted_username, encrypted_password } = req.body;
    const username = decryptData(encrypted_username);
    const password = decryptData(encrypted_password);

    // Fetch user data from MongoDB
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ msg: 'Invalid Credentials' });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ msg: 'Invalid Credentials' });
    }

    // Create a payload for the JWT token
    const tokenPayload = { id: user._id, username: user.username };
    const accessToken = generateAccessToken(tokenPayload);
    const refreshToken = generateRefreshToken(tokenPayload);

    // Set cookies
    res.cookie('accessToken', accessToken, { httpOnly: true, secure: process.env.NODE_ENV === 'production' });
    res.cookie('refreshToken', refreshToken, { httpOnly: true, secure: process.env.NODE_ENV === 'production' });

    res.json({ msg: 'Login successful' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: 'Server Error' });
  }
});

// Registration route
app.post('/credential-signup', async (req, res) => {
  try {
    const { encrypted_username, encrypted_password } = req.body;
    const username = decryptData(encrypted_username);
    const password = decryptData(encrypted_password);

    // Check if the user already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create a new user
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ msg: 'User registered successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: 'Server Error' });
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
