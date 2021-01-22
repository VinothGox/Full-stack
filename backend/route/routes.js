const express=require('express');
const router=express.Router();

const upload=require("../middleware/upload");

const {create,ratings,allrecipes,getone,deletecard,cards,findcate,findAll,findOne,findAllItem,addcard} =require("../controller/product");

router.post("/add",upload.single('images'),create);

router.get("/all",findAll);
router.get("/get/:id",findOne);
router.get("/getall",findAllItem);
router.get("/allcategory",findcate);
router.post("/addcard/:id",addcard);
router.get("/getrating",ratings);
router.get("/allcards",cards);
router.delete("/deletecard/:id",deletecard);
router.get("/getonecard/:id",getone);
router.get("/allrecipe",allrecipes);



   

module.exports=router;