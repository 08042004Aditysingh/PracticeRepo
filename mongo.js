import mongoose from 'mongoose';
mongoose.connect("mongodb://localhost:27017/my_db")
.then(()=>{
    console.log("Connection successful");
})
.catch((err)=>{
    console.log("failed");
});


const newSchema = new mongoose.Schema({
    eamil:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    }
});

const collection = mongoose.model("collection",newSchema);

export default collection;