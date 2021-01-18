const mongoose=require("mongoose");
const passportLocalMongoose=require("passport-local-mongoose");

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
       
    },
    password:{
        type:String

    }
   
})

userSchema.plugin(passportLocalMongoose);

module.exports=mongoose.model("User",userSchema);