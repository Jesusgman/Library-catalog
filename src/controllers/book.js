const Book = require('../models/book');
exports.retrieveBooks = retrieveBooks = async (req,res) =>{
    const books = await Book.find();
    res.status(200).send(books)
}