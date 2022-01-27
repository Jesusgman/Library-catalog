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
        const {email, password} = req.body;
        const user = await User.findByCredentials(email,password);
        if(!user){
            return res.status(401).send({error: "Authentication failed, please try again"});
        }
        const token = await user.generateAuthToken(); //New token needs to be generated for the session
        res.status(200).send({user, token});
    }catch(e){
        res.status(400).send({error: e.message});
    }
}

exports.getAccountInformation = async(req,res)=>{
    try{
        const user = await User.findById(req.user._id);
        if(user){
            return res.send(user)
        }
        res.status(404).send({error: "User doesn't exist!"})
    }catch(e){
        res.status(500).send({error: e.message})
    }
}

exports.deleteAccount = async(req,res)=>{
    try{
        const user = await User.findByIdAndDelete(req.user._id);
        if(user){
            return res.send({message: "User successfuly deleted", user});
        }
        res.status(404).send({error: "User doesn't exist!"})
    }catch(e){
        res.status(500).send({error: e.message});
    }
}

exports.logout = async(req,res)=>{
    try{
        const user = await User.findById(req.user._id);
        user.tokens = user.tokens.filter(token=>token.token!==req.token);
        await user.save();
        res.send({message: "Successfully logged out"});
    }catch(e){
        res.status(500).send({error: e.message})
    }
}