import React,{useEffect,useContext, useState} from "react";
import {useHistory} from "react-router-dom";
import axios from "axios";
import {productcontext} from "../ContextApi/contextapi";
import "./home.css";

import 'antd/dist/antd.css';
import { Card } from 'antd';
import {Button} from "antd";
import {RightOutlined,ShoppingCartOutlined} from "@ant-design/icons";

import {Typography } from 'antd';





export const Home=()=>{
   
    const main=useContext(productcontext);
    const [recipess,setRecipe]=useState([]);
    const [items,setItems]=useState([]);
    const [selling,setSelling]=useState([]);
    const [category,setCotegory]=useState([]);
    const [details,setDetails]=main.detail;
    const [searchs,setSearchs]=main.search;
    const [cook,setCook]=main.cook;
   

    const history=useHistory();

    useEffect(()=>{
      getRecipe();
      getproduct();
      getTopSelling();
      getCategory();
      
      }, []);
      
      const getCategory=async()=>{
        const getCategory=await axios.get(`http://localhost:8002/allcategory`);
       
       // setRecipe(data.hits);
       setCotegory(getCategory.data);
       // console.log(response.data);
        
      }
        
        const getproduct=async()=>{
          const getproduct=await axios.get(`http://localhost:8002/getall`);
         
         // setRecipe(data.hits);
         setItems(getproduct.data);
         // console.log(response.data);
          
        }
        


const getRecipe=async()=>{
  const response=await axios.get(`http://localhost:8002/allrecipe`);
 
 //console.log(response.data);
  setRecipe(response.data);
}

const getTopSelling=async()=>{
  const gettop=await axios.get(`http://localhost:8002/getrating`);
  setSelling(gettop.data);

}

        const  onSubmit=async(e)=>{
            e.preventDefault();
        
            //console.log(searchs);
        //setMessage("submit Successfully ");
        history.push("/search");
        }
        const linkSearch=(name)=>{
            setSearchs(name);
            history.push("/search");
        }

        const cookSearch=(label)=>{
            setCook(label);
            history.push("/dailyCook")
        }
        const detail=(item_id)=>{
          setDetails(item_id);
          history.push("/details");

        }
       const cate=(name)=>{
        history.push({pathname:'/search',name:name});

       
       }
      const {Title} =Typography;
    

    return(
      <div>
      <div><br></br>
      <h1
  style={{fontSize:"11px",fontFamily:"San Francisco",lineHeight:"13px",color:"#1A051D",paddingLeft:"14px"}}>MONDAY,24 OCTOBER
</h1>
<h2 style={{fontSize:"22px",fontFamily:"San Francisco",lineHeight:"28px",fontWeight:"600",color:"#1A051D",paddingLeft:"14px"}}>Good Morning,Peter</h2>
<img className="rounf" src="https://images.pexels.com/photos/4355346/pexels-photo-4355346.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""></img>
<button className=" btn btn-cools" style={{paddingLeft:"10px",marginLeft:"14px",position:"absolute",top:"90px"}}><i className="fas fa-bars fa-lg" style={{fontSize:"14px",justifyItems:"center"}}></i></button>

                            <form onSubmit={onSubmit} style={{position:"absolute",top:"75px",paddingLeft:"59px"}} class="form-inline">
                            <div class="scan" style={{position:"absolute",top:"28px",right:"30px"}}></div>
                            <div class="scans" style={{position:"absolute",top:"35px",right:"28.5px"}}></div>
                            <div class="scaned" style={{position:"absolute",top:"35.87876px",right:"28.5px"}}></div>
                           
                             <i className="fa fa-search" style={{fontSize:"15px",position:"absolute",top:"28px",left:"70px",width:"15px",height:"15px",color:"#A8A8A8"}}></i>
                           <input type="text" style={{borderRadius:"25px",backgroundColor:"#F3F3F3",width:"300px", height:"38.19px",border:"#F3F3F3",paddingTop:"10px"}} className="form-control my-3"  onChange={(e)=>setSearchs(e.target.value)} id="titless" placeholder="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Search"></input>
   
  
 </form><br></br><br></br><br></br><br></br><br></br>

 <div className="slide">
<div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators" style={{position:"absolute",left:"-150px",right:"0px"}}>
    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://image.freepik.com/free-vector/garden-care-gardening-people-fruits-trees-summer-harvesting-cartoon-illusrtration-gardeners-collecting-fruits_109709-756.jpg" id="slideimg" style={{width:"348px"}}  alt="..."/>
     
      <div className="back1" style={{position:"absolute",marginLeft:"2px",top:"15px"}}>Freshfood from Foam</div>
        <div className="back2" style={{position:"absolute",marginLeft:"2px",top:"57px"}}>pick your food!</div>
        <button className="btn-carousels"><div className="back3">Shopping Now</div></button>
   
     
    </div>
    <div class="carousel-item">
      <img src="https://d2skuhm0vrry40.cloudfront.net/2020/articles/2020-03-23-18-00/animal-crossing-fruit-how-long-grow-back-eating-fruit-tree-7018-1584986409499.jpg/EG11/resize/1200x-1/animal-crossing-fruit-how-long-grow-back-eating-fruit-tree-7018-1584986409499.jpg" id="slideimg" style={{width:"348px"}} alt="..."/>
      
        <div className="back1" style={{position:"absolute",marginLeft:"2px",top:"15px"}}>Freshfood from Foam</div>
        <div className="back2" style={{position:"absolute",marginLeft:"2px",top:"57px"}}>pick your food!</div>
        <button className="btn-carousels"><div className="back3">Shopping Now</div></button>
    </div>
    <div class="carousel-item">
      <img src="https://3.bp.blogspot.com/-NkrrvJW2DuQ/UrRR7fyRquI/AAAAAAAA5i8/iuAxJQXZzC8/s1600/Cartoon+garden+wallpapers+(1).png" id="slideimg" style={{width:"348px"}}  alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5 className="back">Be happy Eat Healthy</h5>
        </div>
    </div>
  </div>
  
</div>
</div><br></br><br></br>

<h3 style={{marginLeft:"19px",position:"absolute",top:"372px",fontFamily:"San Francisco",fontSize:"17px"}} className="heades">Category</h3>
<i className="fas fa-angle-right fa-lg" style={{fontSize:"18px",color:"black",position:"absolute",right:"6px",top:"372px"}} ></i>
 
<div>
<div className="carddecks" style={{marginLeft:"-15px"}}> 
{category.map(item=>(
      
      <div class="col-sm-2">
      <div className="keyss" key={item.name} >
           
      <div className="card cardItem cardSpace" style={{width:"9rem"}}>
     
          
    
   
     <Card
    
    style={{ width: "158px",height:"184px",borderRadius:"12px",border:"#f3f3f3;"}}
    bodyStyle={{backgroundColor:"#f3f3f3",border:"0px",height:"89px",borderBottomLeftRadius:"12px",borderBottomRightRadius:"12px"}}
   cover={<img alt="example" src={`http://localhost:8002/${item.images}`} style={{borderTopRightRadius:"12px",borderTopLeftRadius:"12px"}}/>}
  >
    <h1 style={{marginLeft:"-10px",fontSize:"14px",lineHeight:"28px",fontWeight:"600",fontFamily:"San Francisco"}} >{item.name}</h1>
    <div style={{paddingRight:"10px",position:"absolute",left:"70%",height:"32px",width:"32px",top:"140px"}}>
     
     <Button type="primary" onClick={() => cate(item.name)} style={{borderRadius:"10px",backgroundColor:"#3DAB85",border:"#3DAB85"}} icon={<RightOutlined />} ></Button>
     </div>
  </Card>
             </div>
         </div>

</div>
    ))} 
    </div>
    </div><br></br>

    <h3 style={{marginLeft:"19px",position:"absolute",top:"620px",fontFamily:"San Francisco",fontSize:"17px"}} className="heades">Recommed</h3>
<i className="fas fa-angle-right fa-lg" style={{fontSize:"18px",color:"black",position:"absolute",right:"6px",top:"620px"}} ></i>
 
<div>
<div className="carddecks" style={{marginLeft:"-15px"}}> 
{items.map(item=>(
      
      <div class="col-sm-2">
      <div className="keyss" key={item.name} >
           
      <div className="cardItem cardSpace" style={{width:"7.4rem"}}>
     
          
    
   
     <Card
    
    style={{ width:"132px",height:"220px",borderRadius:"12px",border:"#f3f3f3;"}}
    bodyStyle={{backgroundColor:"#f3f3f3",border:"0px",height:"112px",width:"132px",borderBottomLeftRadius:"12px",borderBottomRightRadius:"12px"}}
    cover={<img alt="example" src={`http://localhost:8002/${item.images}`} style={{borderTopRightRadius:"12px",borderTopLeftRadius:"12px",height:"108px",width:"132px"}}/>}
  >
   <text style={{marginLeft:"-14px",fontSize:"11px",lineHeight:"18px" ,marginTop:"-14px",fontFamily:"San Francisco"}} className="texts">{item.weight}r</text>
                        <h6 style={{marginRight:"-14px",marginTop:"-14px",fontSize:"11px",position:"absolute",right:"20px"}} className="badge badge-success"><i className="fas fa-star fa-sm" style={{ fontSize:"11px"}}></i>{item.rating}</h6><br></br>
         <h1             
     style={{marginLeft:"-14px",marginTop:"-10px",fontFamily:"San Francisco",fontSize:"14px",lineHeight:"28px",fontWeight:"600"}}>{item.title}</h1>
    <h2 style={{marginLeft:"-14px",position:"absolute",left:"23px",top:"192px",fontFamily:"San Francisco"}} id="changesprice" className="text-left">{item.price}d</h2>
    <div style={{paddingRight:"10px",position:"absolute",left:"70%",height:"32px",width:"32px",top:"180px"}}>
    
     <Button onClick={() => detail(item.item_id)} type="primary" style={{borderRadius:"10px",backgroundColor:"#3DAB85",border:"#3DAB85"}} icon={<ShoppingCartOutlined />} ></Button>
     </div>
  </Card>
             </div>
         </div>

</div>
    ))} 
    </div>
    </div><br></br>
    <h3 style={{marginLeft:"19px",position:"absolute",top:"900px",fontFamily:"San Francisco",fontSize:"17px"}} className="heades">Top Selling</h3>
<i className="fas fa-angle-right fa-lg" style={{fontSize:"18px",color:"black",position:"absolute",right:"6px",top:"900px"}} ></i>
 
<div>
<div className="carddecks" style={{marginLeft:"-15px"}}> 
{selling.map(item=>(
      
      <div class="col-sm-2">
      <div className="keyss" key={item.name} >
           
      <div className="cardItem cardSpace" style={{width:"7.4rem"}}>
     
          
    
   
     <Card
    
    style={{ width:"132px",height:"220px",borderRadius:"12px",border:"#f3f3f3;"}}
    bodyStyle={{backgroundColor:"#f3f3f3",border:"0px",height:"112px",width:"132px",borderBottomLeftRadius:"12px",borderBottomRightRadius:"12px"}}
    cover={<img alt="example" src={`http://localhost:8002/${item.images}`} style={{borderTopRightRadius:"12px",borderTopLeftRadius:"12px",height:"108px",width:"132px"}}/>}
  >
   <text style={{marginLeft:"-14px",fontSize:"11px",lineHeight:"18px" ,marginTop:"-14px",fontFamily:"San Francisco"}} className="texts">{item.weight}r</text>
                        <h6 style={{marginRight:"-14px",marginTop:"-14px",fontSize:"11px",position:"absolute",right:"20px"}} className="badge badge-success"><i className="fas fa-star fa-sm" style={{ fontSize:"11px"}}></i>{item.rating}</h6><br></br>
                       
    <h1 
     style={{marginLeft:"-14px",marginTop:"-13px",fontFamily:"San Francisco",fontSize:"14px",lineHeight:"28px",fontWeight:"600"}}>{item.title}</h1>
    <Title level={2} style={{fontSize:"12px",fontWeight:"600px",lineHeight:"18px",fontStyle:"normal",width:"53px",height:"14px"}}> <del style={{marginLeft:"-14px",position:"absolute",left:"23px",top:"170px",color:" #CACACA",fontFamily:"San Francisco"}}  className="text-left">24.000d</del></Title>
    
    <h2 style={{marginLeft:"-14px",position:"absolute",left:"23px",top:"192px",fontFamily:"San Francisco"}} id="changesprice" className="text-left">{item.price}d</h2>
<div style={{paddingRight:"10px",position:"absolute",left:"70%",height:"32px",width:"32px",top:"180px"}}>
    
     <Button onClick={() => detail(item.item_id)} type="primary" style={{borderRadius:"10px",backgroundColor:"#3DAB85",border:"#3DAB85"}} icon={<ShoppingCartOutlined />} ></Button>
     </div>
  </Card>
             </div>
         </div>

</div>
    ))} 
    </div>
    </div><br></br>
    
    <h3 style={{marginLeft:"19px",position:"absolute",top:"1180px",fontFamily:"San Francisco",fontSize:"17px"}} className="heades">Daily Recipes</h3>
<i className="fas fa-angle-right fa-lg" style={{fontSize:"18px",color:"black",position:"absolute",right:"6px",top:"1180px"}} ></i>
 
<div>
<div className="carddecks" style={{marginLeft:"-15px"}}> 
{recipess.map(item=>(
      
      <div class="col-sm-2">
      <div className="keyss" key={item.name} >
           
      <div className="card cardItem cardSpace" style={{width:"9rem"}}>
     
          
    
   
     <Card
    
    style={{ width: "158px",height:"184px",borderRadius:"12px",border:"#f3f3f3;"}}
    bodyStyle={{backgroundColor:"#f3f3f3",border:"0px",height:"89px",borderBottomLeftRadius:"12px",borderBottomRightRadius:"12px"}}
    cover={<img alt="example" src={item.images} style={{borderTopRightRadius:"12px",borderTopLeftRadius:"12px"}}/>}
  >
      <h6 style={{marginRight:"-4px",marginTop:"-6px",fontSize:"11px",position:"absolute",right:"10px",top:"12px"}} className="badge badge-success"><i className="fas fa-star fa-sm" style={{ fontSize:"11px"}}></i>{item.rating}</h6>
            
     <div style={{position:"absolute",left:"10px",marginTop:"-6px",top:"120px",fontFamily:"San Francisco"}} id="timedaily">{item.time}min-Lunch</div>
           
     <h1 style={{position:"absolute",left:"10px",marginTop:"10px",top:"133px",fontFamily:"San Francisco"}} id="dailytitle">{item.title}</h1><br></br>
              <div style={{paddingRight:"10px",position:"absolute",left:"70%",height:"32px",width:"32px",top:"150px"}}>
     
     <Button type="primary" style={{borderRadius:"10px",backgroundColor:"#3DAB85",border:"#3DAB85"}} icon={<RightOutlined />} ></Button>
     </div>
  </Card>
             </div>
         </div>

</div>
    ))} 
    </div>
    </div>
    <br></br><br></br><br></br><br></br><br></br>






    
  
   
   
  







              </div>
             
  
 </div>
     
            
        
    )
};




