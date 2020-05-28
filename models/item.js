const mongoose =require('mongoose');

const itemSchema =new mongoose.Schema({

    description: {
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    category:{
        type:String,
        required:true
    }//can i delete ur contact lust from robo3tyeS

});

const Item = mongoose.model('Item',itemSchema);

module.exports=Item;