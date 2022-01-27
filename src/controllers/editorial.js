const Editorial = require('../models/editorial');

exports.createEditorial = async(req,res) => {
    try{
        const editorial = new Editorial(req.body);
        await editorial.save();
        res.status(201).send(editorial);
    }catch(e){
        res.status(500).send({message: e.message})
    }
}

exports.deleteEditorial = async(req,res) => {
    try {
        const editorial = await Editorial.findOneAndDelete({name: req.params.name});
        if(editorial){
            return res.send({message: "Editorial successfully deleted!", editorial})
        }
        res.status(404).send({message: "Resource not found"})
    } catch(e) { 
        res.status(500).send({message: e.message})
    }
}