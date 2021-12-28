const JWT_Secret="RadhaBallabhSriHarivansh";
var jwt = require('jsonwebtoken');

const fetchuser = (req,res,next) => {

   // console.log("Running Middle Ware");

   const token=req.header('auth-token');
   if(!token) res.status(401).send({ error: "Please authenticate using a valid token" });
   try{
      const data=jwt.verify(token,JWT_Secret);
      req.user=data;
      // console.log("From Middle Ware:"+req.user);
      next(); 
   }catch{
    res.status(401).send({ error: "Please authenticate using a valid token" });
   }
 
}


module.exports=fetchuser;