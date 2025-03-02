const mongoose= require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose=require("passport-local-mongoose");

const userSchema= new Schema({ //username and password , passportlocalmongose khud define karta hai
    email:{
        type:String,
        required:true,
    }
})

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);