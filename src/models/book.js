const {Schema, model} = require("mongoose");

const bookSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        validate(value){
            return value.length > 5;
        }
    },
    author: {
        type: Schema.Types.ObjectId, ref: 'User',
        required: true
    },
    publicationDate: {
        type: Date,
        required: true
    },
    editorial: {
        type: Schema.Types.ObjectId, ref: 'Editorial'
    }
})

const Book = model('Book',bookSchema)

module.exports = Book;