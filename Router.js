const express = require("express");
const InfoRouter = require("./infoSchema");
const router = express.Router();


router.post ("/", async(req,res) => {
        console.log(req.body);
        var data = new InfoRouter({
        Name:req.body.Name,
        Age :req.body.Age,
        City:req.body.City
    });
      await data.save();
      res.json(data);
})

router.get("/",async (req,res) => {
    var findData = await InfoRouter.find();
    res.json(findData);
})

router.put("/update", async (req,res) =>{
    var update = await InfoRouter.updateOne({_id:req.body._id},{$set:{
        name:req.body.name,
        age :req.body.age,
        city:req.body.city
    }});
    res.json(update);
})


router.delete("/del/:id", async (req,res) =>{
    var delData = await InfoRouter.findByIdAndRemove(req.params.id).then( e => {
        res.json ({message:"delete succsessfully"})
    })
 
})


router.get("/",(req,res) =>{
    res.json("i am from router file");
})

module.exports = router;