const express =require("express")
const app = express()
const cors = require("cors")

app.use(cors())
app.use(express.json())
const db = require("./Model/db");
const path=require("path");


const addproduct=require("./route/routes");
app.use(express.static("uploads"));




//route
app.use("/",addproduct)


//db
db.sequelize.sync({ force: false }).then(() => {

    console.log("Drop and re-sync db.");
    
    });


//port setup    
app.listen(8003,()=>{
    console.log("Server Started")
})