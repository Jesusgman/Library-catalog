const express = require('express');
const bookRoutes = require('./routers/book');
const userRoutes = require('./routers/user');
const editorialRoutes = require('./routers/editorial');
const app = express();

app.use(express.json());
app.use(bookRoutes);
app.use(userRoutes);
app.use(editorialRoutes);

app.get('/',(req,res)=>{
    res.status(200).send('hey');
});

module.exports = app;