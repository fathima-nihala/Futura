const Jwt=require('jsonwebtoken')

const verifyToken=(req,res,next)=>{
console.log("###",req);
console.log("req.heqders.token",req.headers.token);
let authHeader=req.headers.token

if (authHeader) {
    const token=authHeader.split(" ")[1];
    console.log('sprt token',token);
     
    Jwt.verify(token,process.env.Jwt_sec,(err,user)=>{
        if (err) {
            console.log('^^',err);
            return res.status(403).json("token is not valid")
        }
        req.user=user;
        console.log('user^^',user);
        next()
    });
} else {
   return res.status(401).json({error:"token not found"})
}
};

const verifyTokenAndAuthorization=(req,res,next)=>{
    verifyToken(req,res,(data)=>{
        console.log(data);
        console.log("user id",req.user.id);
        console.log("params id",req.params.id);

        if (req.user.id === req.params.id ) {
            next()
        } else {
            res.status(403).json("u r not allowed")
        }
    })
}

module.exports={verifyToken,verifyTokenAndAuthorization}
