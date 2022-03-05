const mongoose = require('mongoose');

const Animal =new mongoose.Schema({
    Name:{type:String,required:true},
    Birth:{type:String, required:true},
    CellNumber:{type:Number,required:true},
    Gender:{type:String,required:true},
    Breed:{type:String,required:true}
},
{timestamps:true}
)
module.exports = mongoose.model('Animal',Animal)

