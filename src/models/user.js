const {Schema, model} = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trime: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        validate(value){
            return value.length > 5;
        }
    }, 
    password :{        
        type: String,
        required: true,
        trim: true,
        validate(value){
            if(value.toLowerCase().includes('password')){
                throw new Error('Password can\'t contain the word password in it')
            }
        }
    },
    tokens: [{
        token:{
            type: String,
            reequired: true
        }
    }]
})

userSchema.pre('save',async function(next){
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password,8);
    }
    next();
});

userSchema.methods.generateAuthToken = async function(){
    const token = jwt.sign({'_id':this._id.toString()},process.env.JWT_SECRET,{expiresIn: '1 day'});

    this.tokens = this.tokens.concat({token});
    await this.save();
    return token;
}

userSchema.methods.toJSON = function (){
    const userObject = this.toObject();
    delete userObject.password;
    delete userObject.tokens;

    return userObject;
}

userSchema.statics.findByCredentials = async(email,password)=>{
    const user = await User.findOne({email});
    if(user){
        const samePwd = await bcrypt.compare(password,user.password);
        if(!samePwd){
            throw new Error('Authentication failed');
        }
        return user;
    } else {
        throw new Error('User doesn\'t exists!')
    }
}

const User = model('User', userSchema); //This needs to go at the end

module.exports = User;