const jwt = require('jsonwebtoken');
const User = require('../models/user');

exports.validateAuth = async(req,res,next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ','');
        const decoded = jwt.decode(token,process.env.JWT_SECRET);

        const user = await User.find({_id: decoded._id,'tokens.token': token});
        if(!user){
            throw new Error();
        }
        req.user = user;
        req.token = token;
        next();
    } catch(e){
        req.status(401).send({error:"Please ensure you\'re authenticated"});
    }
}