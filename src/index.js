require('dotenv').config();
require('./db/mongoose.js');
const app = require("./app")
const fs = require('fs');
const port = process.env.PORT;

const https = require('https')
https.createServer({
    cert: fs.readFileSync('./certs/cert.pem'),
    key: fs.readFileSync('./certs/key.pem'),
    passphrase: process.env.PASSPHRASE
},app).listen(port,()=>{
    console.log('server up and running')
})

/* const book = new Book({title: "Sangre de campeon", author: "Carlos Cuahtemoc", publicationDate: Date.now()});
book.save(); */