const mongoose = require('mongoose');
const dbConnection = process.env.LOCAL_CONNECTION ? process.env.LOCAL_DB_CONNECTION : process.env.DB_CONNECTION;

const options = {
    useNewUrlParser:true,
    useUnifiedTopology: true
}

mongoose.connect(dbConnection,options,(error)=>{
    if(error){
        console.log(error)
    }
    console.log('DB connected successfully');
});

/* const userSchema = new mongoose.Schema({
    name: String,
    age: Number
});

const User = mongoose.model('User',userSchema);

const newUser = new User({name: 'Jesus',age:24})
newUser.save(); */
