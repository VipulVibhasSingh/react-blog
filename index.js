import mongoose from "mongoose"
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const express =require('express')
const app=express()
mongoose.connect('mongodb://localhost:27017/gamingrealm',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("DB connected");
})
.catch((e)=>console.log(e))

app.get('/',(req,res)=>{
    res.send("Hello World");
})
app.listen(5000)