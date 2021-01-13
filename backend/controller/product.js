
const db=require("../Model/db");
const Product=db.productss;
const Category=db.categorys;
const Card=db.cards;
const Recipe=db.Recipes;
const Carded=db.maincards;
//const user=db.users;
const Op = db.Sequelize.Op;




//add item
exports.create= async(req, res) => {
  // console.log(req.file.filename);

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
        console.log(err);

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
    res.json(err);
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
        res.json(err);
    }
  };

  //select id one item
  exports.findOne =async (req, res) => {
      try{
    const id = req.params.id;
  
 const onedata=await  Product.findByPk(id);

 const getgood=onedata.good;
 const getbad=onedata.bad;
 const getgood1=getgood.split(",");
 const getbad1=getbad.split(",");
 var stringArray = new Array();
 var stringArrays = new Array();
for(var i =0; i < getgood1.length; i++){
    stringArray.push(getgood1[i]);
}
for(var i =0; i < getbad1.length; i++){
  stringArrays.push(getbad1[i]);
}
 
 res.json({data:onedata,weig:stringArray,bads:stringArrays});
      }
      catch(err){
          res.json(err);
      }
     
  };

  


//get all category item
exports.findcate = async(req, res) => {
    try{
 const items=await Category.findAll()

 res.json(items);
    }

    catch(err){
        res.json(err);
    }
     
  };

 //get all item
exports.findAllItem = async(req, res) => {
    try{
 const itemss=await Product.findAll()

 res.json(itemss);
 //console.log(itemss);
    }

    catch(err){
        res.json(err);
    }
     
  };


  //add card
  exports.addcard=async(req,res)=>{
     try{
          req.body.item_id=req.params.id;
         
        
     const datas=await Card.create(req.body);
        res.json(datas);
       

    }
catch(err){
    console.log(err);

}

  }

  //rating base retrive data
  exports.ratings=async(req,res)=>{
    try{
      const ans=await Product.findAll({where:{rating:{[Op.gte]: 4.0}}})

      res.json(ans);
  
  
    }
    catch(err){
      res.json(err);
    }
  }

  //get all card
  exports.cards=async(req,res)=>{
    try{
      
      const getcard=await Card.findAll();
      res.json(getcard);

    }
    catch(err){
      res.json(err);
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
      res.json(err);

    }
  }

  exports.allrecipes = async(req, res) => {
    try{
 const items=await Recipe.findAll()

 res.json(items);
    }

    catch(err){
        res.json(err);
    }
     
  };

 // add card to card details 