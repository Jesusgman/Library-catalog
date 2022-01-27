const {Schema, model} = require('mongoose');

const editorialSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50,
        unique: true
    },
    location: {
        type: String, 
        required: true,
        minlength: 2,
        maxlength: 50
    }
});

editorialSchema.methods.toJSON = function(){
    const editorialObj = this.toObject();
    delete editorialObj._id;
    delete editorialObj.__v;
    return editorialObj; //Remember to always return the object when using toJSON
}

const Editorial = model('Editorial',editorialSchema);
module.exports = Editorial;

