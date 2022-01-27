const jwt = require('jsonwebtoken');
const User = require('../models/user');

exports.validateAuth = async(req,res,next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ','');
        const decoded = jwt.decode(token,process.env.JWT_SECRET);
        const user = await User.findOne({_id: decoded._id,'tokens.token': token});
        if(!user){
            return res.status(403).send({"message": "Trying to perform an action when you're not authenticated"});
        }
        req.user = user;
        req.token = token;
        next();
    } catch(e){
        res.status(401).send({error:"Please ensure you\'re authenticated"});
    }
}