const jwt = require('jsonwebtoken');
const User = require('../models/user');

exports.createUserAccount = async(req,res) => {
    const user = new User(req.body);
    try{
        await user.save();
        const token = await user.generateAuthToken();
        res.status(201).send({user, token});
    } catch(e) {
        res.status(400).send(e.message);
    }
}

exports.authenticateUser = async(req,res)=>{
    try{
        const {email, password} = req.body
        const user = await User.findByCredentials(email,password);
        if(!user){
            res.status(401).send({error: "Authentication failed, please try again"});
        }
        res.status(200).send(user);
    }catch(e){
        res.status(400).send({error: e.message});
    }
}