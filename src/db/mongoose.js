const mongoose = require('mongoose');
const dbConnection = process.env.DB_CONNECTION;

const options = {
    useNewUrlParser:true,
    useUnifiedTopology: true
}

console.log(dbConnection)

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
