const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        validate(value){
            return value.length > 5;
        }
    },
    author: {
        type: String,
        required: true,
        validate(value){
            return value.length > 10;
        }
    },
    publicationDate: {
        type: Date,
        required: true
    }
})

const Book = mongoose.model('Book',bookSchema)

module.exports = Book;