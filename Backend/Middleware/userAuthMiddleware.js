const jwt = require('jsonwebtoken')
//function for verifying the token
module.exports = function verifyToken(req,res,next){
    const Btoken = req.headers['authorization']
    
  if (!Btoken || typeof Btoken !== 'string') {
    return res.status(403).json({ error: 'No Token Provided' });
  }
    let token = Btoken.split(' ')[1]
    if(!token){
      return res.status(403).json({error:"No Token Provided"})
   }

    // console.log(token)
    jwt.verify(token,process.env.USER_ACCESS_TOKEN_SECRET,(err,decoded)=>{
        if(err){
            return res.status(401).json({error:" user unathorized"})
        }
        next();
        
    })
}





