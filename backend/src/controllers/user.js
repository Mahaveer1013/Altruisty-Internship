// ==========> User route <===========
export const checkUserRoute = async (req, res) => {
    if (req.user.user_type !== 2) {
      res.status(401).json({ message: 'Unauthorized User' });
    } else {
      res.send('You Are User');
    }
};
