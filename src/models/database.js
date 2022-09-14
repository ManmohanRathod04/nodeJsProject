const mongoose=require('mongoose');

mongoose.connect("mongodb://localhost:27017/LoanDB",{useNewUrlParser:true},(err)=>{
    if(!err){
        console.log("MongoDb Connection Succeeded.")
    }else{
        console.log("Error in DB connection : "+err)
    }
})

require("./schema");





