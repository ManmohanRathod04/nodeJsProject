const express = require("express");
const path=require("path");
// var bodyParser = require('body-parser');
const app =express();
const hbs=require("hbs");
require("./models/database");
const {json}=require("express");
const Controller=require("./controllers/controller");


const port=process.env.PORT || 4000;

const static_path =path.join(__dirname,"../public");
const template_path =path.join(__dirname,"../templates/views");
const partial_path =path.join(__dirname,"../templates/partials");

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static(static_path));
app.set("view engine","hbs");
app.set("views",template_path);
hbs.registerPartials(partial_path);



app.listen(port,()=>{
    console.log(`server is running at port no ${port}`);
})

app.use("/",Controller)