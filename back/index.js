import express from "express"
import cors from "cors"//cross origin resource sharing
import mongoose from "mongoose"
import User from "./Model/User.js"
import { createRequire } from "module";
const require = createRequire(import.meta.url);
var nodemailer = require('nodemailer');
const jwt = require("jsonwebtoken");
import config  from "./config/key.js"
import path from "path"
import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);
const bcrypt = require("bcryptjs");
const __dirname = path.dirname(__filename);
//var ObjectID = require('mongodb').ObjectId;

const app=express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())
app.set("view engine","ejs");
//app.use('/api/v1/media',router);
app.use(express.urlencoded({extended:false}))
const JWT_SECRET =
  "hvdvay6ert72839289()aiyg8t87qt72393293883uhefiuh78ttq3ifi78272jbkj?[]]pou89ywe";

//connection creation and creating a new db
// mongodb://localhost:27017/gamingrealm
mongoose.connect(config.mongoURI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("DB connected");
})
.catch((e)=>console.log(e))


//Routes
app.post("/login",(req,res)=>{
    const{email,password}=req.body
    User.findOne({email:email},(err,user)=>{
        if(user){
            user.comparePassword(password,(err,isMatch)=>{
                if(!isMatch){
                    res.send({message:"Password did'nt match"})
                }
                else{
                    res.send({message:"Login Successfull",user:user})
                }
            })
        }
        else{
            res.send({message:"User not Registered"})
        }
    })
})

app.post("/signup",(req,res)=>{
    const {name,email,password}=req.body
    User.findOne({email:email},(err,user)=>{
        if(user){
            res.send({message:"User already Registered"})
        }
        else{
            const user=new User({
                name,
                email,
                password
            })
            user.save(err=>{
                if(err){
                    res.send(err)
                }
                else{
                    res.send({message:"Successfully Registered!Please Login now."})
                }
            })
        }
    })
    
})

app.post("/forgot",(req,res)=>{
    const{email}=req.body
    // res.send({email})
    console.log(email)
    User.findOne({email:email},(err,user)=>{
        if(user){
                res.send({message:"An reset link is sent to your email."})
                const secret = JWT_SECRET + user.password;
    const token = jwt.sign({ email: user.email, id: user._id }, secret, {
      expiresIn: "5m",
    });
    const link = `http://localhost:5000/reset-password/${user._id}/${token}`;
    console.log(link);
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'rsidali9@gmail.com',
          pass: 'tdzufbfybxllqckt'
        }
      });
      
      var mailOptions = {
        from: 'rsidali9@gmail.com',
        to: user.email,
        subject: 'Password Reset',
        text: link
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
        }
        else{
            res.send({message:"User not Registered"})
        }
    })
})

app.get("/reset-password/:id/:token", async (req, res) => {
    const { id, token } = req.params;
    console.log(req.params);
    User.findOne({_id:id},(err,user)=>{
        if(user){
            const secret = JWT_SECRET + user.password;
        try {
        const verify = jwt.verify(token, secret);
        res.render("index", { email: verify.email, status: "verified" });
        } catch (error) {
        console.log(error);
        res.send("Not Verified");
        }
        }
        else{
            res.send({message:"User not Registered"})
        }
    })
});

app.post("/reset-password/:id/:token",async (req, res) => {
    const { id, token } = req.params;
    const{password}=req.body;
    console.log(req.params);
    console.log(password);
    User.findOne({_id:id},async (err,user)=>{
         if(user){
            const secret = JWT_SECRET + user.password;
        const verify = jwt.verify(token, secret);
        //const encryptedPassword =await bcrypt.hash(password, 10);
        try{
        await User.updateOne(
          {
            _id:id,
          },
          {
            $set: {
              password: password,
            },
          }
        );
    //    res.json({status:"password updated"})
       res.render("index", { email: verify.email, status: "Verified" });
        } catch (error) {
        console.log(error);
        res.json({status:"Not Verified"});
        }
        }
        else{
            res.send({message:"User not Registered"})
        }
    })
});



app.listen(5000,()=>{
    console.log("BE started at port 5000")
})