const mongoose = require('mongoose');

// const TaskSchema = require 
const TaskSchema = new mongoose.Schema({
    name: {
        type:String,
        required: [true,"Must Provide a Name"],
        trim:true,
        maxlength:[20,'name cannot exceed 20 characters']
    }, 
    completed:{
        type:Boolean,
        default:false,
    }
})

module.exports = mongoose.model('Tasks', TaskSchema)
 