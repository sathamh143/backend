const express = require("express");
const app = express();
const Router = express.Router();
const mongoose = require ("mongoose");
const morgan = require ("morgan");

app.use (morgan ("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const infoRouter = require("./Router");
app.use("/info",infoRouter);


app.listen (3000, () => {
    console.log("server start 3000");
})

mongoose.set('strictQuery', false);
mongoose.connect('mongodb://127.0.0.1:27017/test', {useNewUrlParser:true,useUnifiedTopology:true},(err)=>{
    if(!err)
    {console.log("mongodb connected success");}
})
