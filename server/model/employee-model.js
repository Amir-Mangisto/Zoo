const mongoose = require('mongoose');

const Employee =new mongoose.Schema({
    Name:{type:String,required:true},
    Position:{type:String, required:true},
    Email:{type:String,required:true},
    Phone:{type:Number,required:true},
},
{timestamps:true}
)
module.exports = mongoose.model('Employee',Employee)