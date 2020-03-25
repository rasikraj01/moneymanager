const mongoose = require('mongoose');


const transactionSchema = new mongoose.Schema({
    user :{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    title : {
        type: String,
        required: true,
        max: 255
    },
    date : {
        type : Date,
        required: true
    },
    catergory : {
        type: String,
        required: true
    },
    type : {
        type : String,
        required : true
    },
    amount : {
        type : Number,
        required : true
    },
    desc : {
        type : String,
        required : true
    }
});

module.exports = mongoose.model('Transcation', transactionSchema);