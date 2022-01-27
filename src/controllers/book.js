const Book = require('../models/book');
const Editorial = require('../models/editorial');

exports.registerNewBook = async(req,res)=>{
    try{
        const editorial = await Editorial.findOne({name:req.body.editorial});
        const {title, publicationDate} = req.body;
        const book = new Book({author: req.user._id,editorial: editorial._id, title, publicationDate});
        await book.populate("author editorial");
        await book.save();
        res.status(201).send(book);
    } catch(e){
        res.status(500).send({message: e.message})
    }
}


exports.retrieveBooks = async (req,res) =>{
    const books = await Book.find();
    res.status(200).send(books)
}