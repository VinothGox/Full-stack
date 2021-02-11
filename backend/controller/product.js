
const db=require("../Model/db");
const Product=db.productss;
const Category=db.categorys;
const Card=db.cards;
const Recipe=db.Recipes;
const Carded=db.maincards;
const User=db.user;
const Op = db.Sequelize.Op;




//add item
exports.create= async(req, res) => {


    try{
      const fileName =  req.file.filename;
    
        const producted = {
            title: req.body.title,
            description: req.body.description,
            price:req.body.price, 
            images:fileName,
            weight:req.body.weight,
            rating:req.body.rating,
            good:req.body.good,
            bad:req.body.bad,
            category_id:req.body.category_id
          };
         const datas=await Product.create(producted);
            res.json(datas);
           
    }
    catch(err){
      res.status(500).json({error:err});
    }
  };
// categoryy
/*exports.create=async(req,res)=>{
  
  try{
    const fileName =  req.file.filename;
  
      const cate = {
          name: req.body.name, 
          images:fileName,
          details:req.body.details,
          rating:req.body.rating,
          
        };
      console.log(cate);
       const categoryss=await Category.create(cate);
          res.json(categoryss);
         
  }
  catch(err){
    res.status(500).json({error:err});
;
  }
}*/
  

//select title based item
exports.findAll = async(req, res) => {
    try{
    const title = req.query.title;
    var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  
   const alldata=await Product.findAll({ where: condition });
   res.json(alldata);
   
    }
    catch(err){
      res.status(500).json({error:err});
    }
  };

  //select id one item
  exports.findOne =async (req, res) => {
      try{
    const id = req.params.id;
 const onedata=await  Product.findByPk(id);
 const getGood=onedata.good;
 const getBad=onedata.bad;
 const getGood1=getGood.split(",");
 const getBad1=getBad.split(",");
 var stringArray = new Array();
 var stringArrays = new Array();
for(var i =0; i < getGood1.length; i++){
    stringArray.push(getGood1[i]);
}
for(var i =0; i < getBad1.length; i++){
  stringArrays.push(getBad1[i]);
}
 res.json({data:onedata,weig:stringArray,bads:stringArrays});
      }
      catch(err){
        res.status(500).json({error:err});
      }
  };

  


//get all category item
exports.findcate = async(req, res) => {
    try{
 const items=await Category.findAll()
 res.json(items);
    }
    catch(err){
      res.status(500).json({error:err});
    }
  };

  
 //get all item
exports.findAllItem = async(req, res) => {
    try{
 const itemss=await Product.findAll()

 res.json(itemss);
    }

    catch(err){
      res.status(500).json({error:err});
    }
  };


  //add card
  exports.addcard=async(req,res)=>{
     
 
      const getBody=req.body;

      const getTitle=getBody.title;
      const getCardsId=getBody.cards_id;
      const getPrice=getBody.price;
      console.log(getTitle);
      console.log(getCardsId)
    
      const getCardUser=await Card.findOne({ where: {cards_id:getCardsId,title: getTitle} });
      let finalAmount=0;
      if(getCardUser){
        var a=parseFloat(getCardUser.price);
        var b=parseFloat(getPrice);
         finalAmount=a+b;
         finalAmount=finalAmount.toFixed(3);
         const finalAns=finalAmount.toString();
         var changeQuantity=getCardUser.quantity+1;

       
    const updatePrice=await Card.update({price:finalAns,quantity:changeQuantity},{where: {cards_id:getCardsId,title: getTitle}});
      // console.log(updatePrice);
      res.json({message:"already add the card"});
    }
    else{
        req.body.item_id=req.params.id;  
     const datas=await Card.create(req.body);
        res.json("success");
      }

    }  
  //user Create the card
exports.userCart=async(req,res)=>{
  try{
      const carted={
        email:req.body.email,
      }
     const getEmail=await Carded.findOne({ where: {email:carted.email} });
     if(getEmail){
       res.json(getEmail);
     }
     else{
      const final=await Carded.create(carted);
      res.json(final);
 
     }
 
       }
  catch(err){
    res.json(err);
  }
}

 //update price and quantity
 exports.updateQuantity=async(req,res)=>{
     try{
      const getReqBody=req.body;
      const getPricess=getReqBody.price;
      const getQuantitys=getReqBody.quantity;
      const getCarded_Id=getReqBody.cards_id;
      const getTitless=getReqBody.title;
      const updateAmount=await Card.update({price:getPricess,quantity:getQuantitys},{where: {cards_id:getCarded_Id,title: getTitless}});
       res.json(updateAmount);
     
     }
     catch(err){
       res.json(err);
     }

 } 

  //rating base retrive data
  exports.ratings=async(req,res)=>{
    try{
      const ans=await Product.findAll({where:{rating:{[Op.gte]: 4.0}}})
      res.json(ans);
    }
    catch(err){
      res.status(500).json({error:err});

    }
  }

  //get all card
  exports.cards=async(req,res)=>{
    try{
      
      const getcard=await Card.findAll();
      res.json(getcard);
    }
    catch(err){
      res.status(500).json({error:err});
    }
  }

   //get one card
   exports.getone=async(req,res)=>{
   
    try{
      const id = req.params.id;
    
   const onedatas=await  Card.findByPk(id);
   res.json(onedatas);


  }
  catch(err){
    res.json(err);
  }
}
  
//get card
exports.getUserCard=async(req,res)=>{
  try{
    const id=req.params.id;
    const getcards=await Card.findAll({where :{cards_id:id}});
    res.json(getcards);
  }
  catch(err){
    res.status(500).json({error:err});
  }
}

  //delete card
  exports.deletecard=async(req,res)=>{
    try{
      const id=req.params.id;
      const ans=await Card.destroy({
        where: { card_id: id }
      });
      res.json("delet the card!!");
    }
    catch(err)
    {
      res.status(500).json({error:err});
    }
  }
//allrecipe
  exports.allrecipes = async(req, res) => {
    try{
 const items=await Recipe.findAll()

 res.json(items);
    }
    catch(err){
      res.status(500).json({error:err});
    }
     
  };

