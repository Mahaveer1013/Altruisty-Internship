import express from 'express'
import admin from 'firebase-admin'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'

dotenv.config()
const serviceAccount = process.env.GOOGLE_APPLICATION_CREDENTIALS

const app = express();
app.use(cors({
  origin: true,
  credentials: true
}))
app.use(bodyParser.json());
app.use(cookieParser())


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

app.post('/authenticate', async (req, res) => {
  const idToken = req.body.idToken;

  try {
    // Verify and decode the ID token
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    const email = decodedToken.email;
    const uid = decodedToken.uid;

    const cookieOptions = {
      httpOnly: true,
      secure: false, // Uncomment when in production
      sameSite: 'None'
    };
    console.log(email, uid);
    res.cookie('email', email, cookieOptions);
    res.cookie('uid', uid, cookieOptions);
    res.json({ email, uid });
  } catch (error) {
    console.error('Error verifying ID token:', error);
    res.status(401).send('Unauthorized');
  }
});

app.get('/check', async (req, res) => {
  console.log(req);
  console.log(req.cookies.email);
  res.json({ cookies: req.cookies });
});


app.listen(5000, () => {
  console.log(`Server is running on port http://localhost:5000`);
});