const Book = require('../models/book');
exports.retrieveBooks = retrieveBooks = (req,res) =>{
    console.log(req.params.id)
    res.status(200).send()
}