import { createRequire } from "module";
const require = createRequire(import.meta.url);
const mongoose= require('mongoose');
const Schema=mongoose.Schema;
const bcrypt=require('bcryptjs');
const saltRounds=10;
const userSchema=new mongoose.Schema({
    id:String,
    name:String,
    email:String,
    password:String
})

userSchema.pre('save',function(next){
    var user=this;

    if(user.isModified('password')){
    bcrypt.genSalt(saltRounds,function(err,salt){
        if(err) return next(err)

        bcrypt.hash(user.password,salt,function(err,hash){
            if(err)return next(err);
            user.password=hash
            next();
        })
    })}
    else{
        next()
    }
})

userSchema.methods.comparePassword=function(plainPassword,cb){
    bcrypt.compare(plainPassword,this.password,function(err,isMatch){
        if(err) return cb(err);
        cb(null,isMatch)
    })
}

//mongoose module is used to create a collection of a particular database of MongoDB.
const User=new mongoose.model("User",userSchema)
export default User