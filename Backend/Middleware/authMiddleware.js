const jwt = require('jsonwebtoken');

module.exports = function verifyToken(req, res, next) {
    const Btoken = req.headers['authorization'];
    
    if (!Btoken || typeof Btoken !== 'string') {
        return res.status(403).json({ error: 'No Token Provided' });
    }

    const token = Btoken.split(' ')[1];
    if(!token){
        return res.status(403).json({error:"No Token Provided"})
     }

    jwt.verify(token, process.env.ADMIN_ACCESS_TOKEN_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ error: 'Unauthorized' });
        }
        next();
    });
};





