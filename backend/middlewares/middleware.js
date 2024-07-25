import dotenv from 'dotenv'
import { User } from '../models/user.js';
import { generateAccessToken } from '../index.js';
dotenv.config()
import jwt from 'jsonwebtoken'


const loginRequired = async (req, res, next) => {
    const { accessToken, refreshToken } = req.cookies;
  
    try {
      // Verify the access token
      jwt.verify(accessToken, process.env.JWT_SECRET, async (err, decoded) => {
        if (err && err.name === 'TokenExpiredError' && refreshToken) {
          // If access token expired and refresh token exists
          jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, async (refreshErr, refreshDecoded) => {
            if (refreshErr) {
              return res.status(401).json({ message: 'Refresh token invalid or expired' });
            }
  
            // Find the user by email from refresh token
            const user = await User.findOne({ email: refreshDecoded.email });
            if (!user) {
              return res.status(404).json({ message: 'User not found' });
            }
  
            // Generate a new access token
            const newAccessToken = generateAccessToken({
              email: user.email,
              user_type: user.user_type
            });
  
            res.cookie('accessToken', newAccessToken, {
              httpOnly: true,
              maxAge: 3600000, // 1 hour
              secure: false,   // Set to true in production with HTTPS
              sameSite: 'None' // Set 'SameSite' to 'None' for cross-site cookies
            });
            
            // Continue to the protected route
              req.user = user; // Attach user to request object
            next();
          });
        } else if (err) {
          return res.status(401).json({ message: 'Invalid access token' });
        } else {
          // If access token is valid
          const user = await User.findOne({ email: decoded.email });
            req.user = user; // Attach decoded token to request object
            console.log(user);
          next();
        }
      });
    } catch (error) {
      console.error('Error in authentication middleware:', error);
      res.status(500).json({ message: 'Server error' });
    }
};
  
export default loginRequired