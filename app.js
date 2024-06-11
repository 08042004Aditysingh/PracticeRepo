import express from "express";
import collection from "./mongo.js";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());


app.post("/",async(req,res)=>{
    const {email,password}=req.body;
    try{
        const check = await collection.findOne({email:email});
        if(check){
            res.json("Exist")
        }
        else{
            res.json("Doesntexist")
        }

    }
    catch(e) {
        res.json("Doesntexist")


    }

})

app.post("/signup",async(req,res)=>{
    const {email,password}=req.body;
    const data = {
        email:email,
        password:password
    }
    try{
        const check = await collection.findOne({email:email});
        if(check){
            res.json("Exist")
        }
        else{
            res.json("Doesntexist")
            await collection.insertMany([data]);
        }

    }
    catch(e) {
        res.json("Doesntexist")


    }

})

app.listen(8000,()=>{
    console.log("Server is running");
})