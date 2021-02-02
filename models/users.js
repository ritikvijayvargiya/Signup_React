const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
   lastname :{
        type:String,
        required:true

    },
    dateofbirth:{
        type:Date,
        required:true,
        default:Date.now

    },
    age:{
        type:Number,
        required:true
    },
   address :{
        type:String,
        required:true

    },
    pincode :{
        type:String,
        required:true

    }

})

module.exports=mongoose.model('User',userSchema)