import { OAuth2Client } from 'google-auth-library';
import dotenv from 'dotenv';
dotenv.config()

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID); // Replace with your own client ID

async function verifyGoogleToken(token) {
  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,  // Replace with your own client ID
    });
    const payload = ticket.getPayload();
    
    // Optionally, you can perform additional validation here
    // Verify that the token is meant for your application

    return payload;
  } catch (error) {
    console.error('Error verifying Google token:', error);
    throw new Error('Failed to verify Google token');
  }
}

export default verifyGoogleToken