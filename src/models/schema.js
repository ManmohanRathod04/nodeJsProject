const mongoose=require("mongoose");

const customerSchema=new mongoose.Schema({

    name:{
        type:String,
        required:"Name is required."
    },
    mobile:{
        type:Number
    },
    email:{
        type:String
    },
    message:{
        type:String
    }
});

// custom validation for email
customerSchema.path('email').validate(val=>{
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(val);
}, 'Invalid Email');

    
mongoose.model("Customer",customerSchema);