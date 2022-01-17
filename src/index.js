require('dotenv').config();
require('./db/mongoose.js');
const express = require('express');
const bodyParser = require('body-parser')
const bookRoutes = require('./routers/book')
const fs = require('fs');
const app = express();
const port = process.env.PORT;

app.use(bookRoutes);
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.status(200).send('hey');
});

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