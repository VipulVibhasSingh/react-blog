import mongoose from "mongoose"
import { createRequire } from "module";
const require = createRequire(import.meta.url);
import Uzer from "./model/user.js";
const express =require('express')
const bodyParser=require('body-parser');
const cookieParser=require('cookie-parser');
const app=express()
//kXwvhLWLltPNpnQB

mongoose.connect('mongodb+srv://vipulsingh080603:kXwvhLWLltPNpnQB@cluster0.ejsamkw.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("DB connected");
})
.catch((e)=>console.log(e))

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.send("hello world");
})
app.post('/api/users/register',(req,res)=>{
    const user=new Uzer(req.body)

    user.save((err,userData)=>{
        if(err) return res.json ({success:false,err})
        return res.status(200).json({success:true})
    })
    
})

app.listen(5000)
