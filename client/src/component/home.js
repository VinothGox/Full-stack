import React,{useEffect,useContext, useState} from "react";
import {Link,useHistory} from "react-router-dom";
import axios from "axios";
import {productcontext} from "../ContextApi/contextapi";
import "./home.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Details} from "./details";
import { faCartPlus,faHeart,faBan } from '@fortawesome/free-solid-svg-icons'


export const Home=()=>{
   
    const main=useContext(productcontext);
    const [recipess,setRecipe]=useState([]);
    const [items,setItems]=useState([]);
    const [selling,setSelling]=useState([]);
    const [category,setCotegory]=useState([]);
    const [details,setDetails]=main.detail;
    const [searchs,setSearchs]=main.search;
    const [cook,setCook]=main.cook;
    const [query,setQuery]=useState("chicken"); 

    const history=useHistory();

    useEffect(()=>{
      getRecipe();
      getproduct();
      topselling();
      getcategory();
      
      }, []);
      
      const getcategory=async()=>{
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

const topselling=async()=>{
  const gettop=await axios.get(`http://localhost:8002/getrating`);
  setSelling(gettop.data);

}

        const  onSubmit=async(e)=>{
            e.preventDefault();
        
            //console.log(searchs);
        //setMessage("submit Successfully ");
        history.push("/search");
        }
        const linksearch=(name)=>{
            setSearchs(name);
            history.push("/search");
        }

        const cooksearch=(label)=>{
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

    return(
        <div>
       <div><br></br>
       


<div className="row">

                    <div className="col">
                   
                        <div className="navitem">
     
<div
   style={{fontSize:"12px",marginLeft:"10px",marginTop:"9px",fontFamily:"San Francisco"}}>MONDAY,24 OCTOBER
  <h5 className="chamgename" style={{marginLeft:"2px",fontFamily:"San Francisco"}}><b>Good Morning,Peter</b></h5>
</div>
<img className="rounf" src="https://images.pexels.com/photos/4355346/pexels-photo-4355346.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""></img>
</div>
</div>
</div>

<div className="container p-2">
                <div className="row">
                    <div className="col">                      
                    <div className="navitem">
                            <button className=" btn btn-cools" ><i className="fas fa-bars fa-lg" style={{fontSize:"14px",justifyItems:"center"}}></i></button>&nbsp;&nbsp;
                            <div className="d-flex justify-content-center">
                            <form onSubmit={onSubmit} class="form-inline">
                            <div class="scan" style={{position:"absolute",top:"28px",right:"30px"}}></div>
                            <div class="scans" style={{position:"absolute",top:"35px",right:"28.5px"}}></div>
                            <div class="scaned" style={{position:"absolute",top:"35.87876px",right:"28.5px"}}></div>
                           
                             <i className="fa fa-search" style={{fontSize:"15px",position:"absolute",top:"28px",left:"70px",width:"15px",height:"15px",color:"#A8A8A8"}}></i>
                           <input type="text" style={{borderRadius:"25px",backgroundColor:"#F3F3F3", height:"38.19px",border:"#F3F3F3"}} className="form-control my-3"  onChange={(e)=>setSearchs(e.target.value)} id="titless" placeholder="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Search"></input>
   
  
 </form>
 </div>
                           
     </div>                      
                      
      </div>             


      
</div>
</div>
<hr style={{top:"100px"}}></hr>

                </div>
                <div className="slide">
<div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators" style={{position:"absolute",left:"-150px",right:"0px"}}>
    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://image.freepik.com/free-vector/garden-care-gardening-people-fruits-trees-summer-harvesting-cartoon-illusrtration-gardeners-collecting-fruits_109709-756.jpg" id="slideimg" style={{width:"300px"}}  alt="..."/>
     
      <div className="back1" style={{position:"absolute",marginLeft:"2px",top:"15px"}}>Freshfood from Foam</div>
        <div className="back2" style={{position:"absolute",marginLeft:"2px",top:"57px"}}>pick your food!</div>
        <button className="btn-carousels"><div className="back3">Shopping Now</div></button>
   
     
    </div>
    <div class="carousel-item">
      <img src="https://d2skuhm0vrry40.cloudfront.net/2020/articles/2020-03-23-18-00/animal-crossing-fruit-how-long-grow-back-eating-fruit-tree-7018-1584986409499.jpg/EG11/resize/1200x-1/animal-crossing-fruit-how-long-grow-back-eating-fruit-tree-7018-1584986409499.jpg" id="slideimg" style={{width:"300px"}} alt="..."/>
      
        <div className="back1" style={{position:"absolute",marginLeft:"2px",top:"15px"}}>Freshfood from Foam</div>
        <div className="back2" style={{position:"absolute",marginLeft:"2px",top:"57px"}}>pick your food!</div>
        <button className="btn-carousels"><div className="back3">Shopping Now</div></button>
    </div>
    <div class="carousel-item">
      <img src="https://3.bp.blogspot.com/-NkrrvJW2DuQ/UrRR7fyRquI/AAAAAAAA5i8/iuAxJQXZzC8/s1600/Cartoon+garden+wallpapers+(1).png" id="slideimg" style={{width:"300px"}}  alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5 className="back">Be happy Eat Healthy</h5>
        </div>
    </div>
  </div>
  
</div>
</div>
               
  
<br></br><br></br>
<h3 style={{marginLeft:"19px",position:"absolute",top:"385px",fontFamily:"San Francisco"}} className="heades">Category</h3>
<i className="fas fa-angle-right fa-lg" style={{fontSize:"18px",color:"black",position:"absolute",right:"6px",top:"385px"}} ></i>

<div className="carddecks" style={{marginLeft:"-15px"}}> 

{category.map(item=>(
      <div class="col-sm-2">
     <div className="keyss" key={item.name} >
          
     <div className="card cardItem cardSpace" style={{width:"9rem"}}>
        <img className="card-img-top img-fluid" src={`http://localhost:8002/${item.images}`} alt="" />
            <div className="card-body" style={{height:"89px"}}>
                        
                        <h1 style={{marginLeft:"-10px",marginTop:"-10px",fontFamily:"San Francisco"}} id="category">{item.name}</h1>
<button onClick={() => cate(item.name)} style={{ fontSize:"8px",width:"32px",height:"32px",position:"absolute",right:"8px",top:"120px"  ,backgroundColor:"#3DAB85",borderRadius:"9px",marginTop:"14px"}} className="btn btn-poko-right"><i className="fas fa-angle-right fa-lg" style={{fontSize:"18px"}} ></i></button>

                            
              </div>
             
        </div> 

 </div>
 </div>
    ))} 
   
   
    </div>

     
<br></br><br></br>


<h3 style={{marginLeft:"11px",position:"absolute",top:"640px",left:"4px",fontFamily:"San Francisco"}} className="heades"><b>Recommand</b></h3>
<i className="fas fa-angle-right fa-lg" style={{fontSize:"18px",color:"black",position:"absolute",right:"6px",top:"640px"}} ></i>

<div className="carddecks" style={{marginLeft:"-15px",marginTop:"-20px"}}> 
  
  {items.map(item=>(
      <div class="col-sm-2">
       
     <div className="keyss" key={item.name} >
       <div className="cardItem">
     <div className="card cardItem cardSpace" style={{width:"9rem"}}>
        <img className="card-img-top img-fluid" src={`http://localhost:8002/${item.images}`} alt="" />
            <div className="card-body">
                        <text style={{marginLeft:"-10px",marginTop:"-6px"}} className="texts">{item.weight}r</text>
                        <h6 style={{marginRight:"-14px",marginTop:"-6px",fontSize:"11px",position:"absolute",right:"20px"}} className="badge badge-success"><i className="fas fa-star fa-sm" style={{ fontSize:"11px"}}></i>{item.rating}</h6><br></br>
                            
            <Link onClick={() => detail(item.item_id)}> 
              <h1 style={{position:"absolute",left:"10px",marginTop:"10px",position:"absolute",top:"130px",fontFamily:"San Francisco"}} id="category">{item.title}</h1></Link><br></br><br></br>
             
                <div className="row">
                   
                        <div style={{marginLeft:"-14px",position:"absolute",left:"23px",top:"192px",fontFamily:"San Francisco"}} id="changesprice" className="text-left">{item.price}d</div>
      
         <button className=" btn btn-cools" style={{ fontSize:"8px",width:"32px",height:"32px",position:"absolute",right:"6px",top:"165px"  ,backgroundColor:"#3DAB85",borderRadius:"9px",marginTop:"14px"}}><FontAwesomeIcon icon={faCartPlus} onClick={() => detail(item.item_id)} style={{color:"white",position:"absolute", width:"17.75px",height:"19.92px",left:"15.33%",top:"12.5%",bottom:"33.33%"}} /></button>
        
         
       
                            
            </div>
                  </div>
                
              </div>
             
        </div> 
     

 </div>
 </div>
    ))} 
   
    </div>
     
<br></br><br></br>
  

  <h3 style={{padding:"11px",position:"absolute",top:"915px",left:"4px",fontFamily:"San Francisco"}} className="heades"><b>Top selling</b></h3>
  <i className="fas fa-angle-right fa-lg" style={{fontSize:"18px",color:"black",position:"absolute",right:"6px",top:"928px"}} ></i>

  <div className="carddecks" style={{marginLeft:"-15px",marginTop:"-20px"}}> 
  
  {selling.map(item=>(
      <div class="col-sm-2">
       
     <div className="keyss" key={item.name} >
       <div className="cardItem">
     <div className="card cardItem cardSpace" style={{width:"9rem"}}>
        <img className="card-img-top img-fluid" src={`http://localhost:8002/${item.images}`} alt="" />
            <div className="card-body">
                        <p style={{marginLeft:"-10px",marginTop:"-6px"}} className="texts">{item.weight}r</p>
                        <h6 style={{marginRight:"-14px",marginTop:"-6px",fontSize:"11px",position:"absolute",right:"20px"}} className="badge badge-success"><i className="fas fa-star fa-sm" style={{ fontSize:"11px"}}></i>{item.rating}</h6>
            

            <Link onClick={() => detail(item.item_id)}> 
              <h1 style={{position:"absolute",left:"10px",marginTop:"10px",position:"absolute",top:"123px",fontFamily:"San Francisco"}} id="category">{item.title}</h1></Link><br></br>
              
                <div className="row">
               <h2 style={{fontSize:"12px",fontWeight:"600px",lineHeight:"18px",fontStyle:"normal",width:"53px",height:"14px"}}> <del style={{marginLeft:"-14px",position:"absolute",left:"23px",top:"170px",color:" #CACACA",fontFamily:"San Francisco"}}  className="text-left">24.000d</del></h2>
    
                    <h2 style={{marginLeft:"-14px",position:"absolute",left:"23px",top:"192px",fontFamily:"San Francisco"}} id="changesprice" className="text-left">{item.price}d</h2>
      
         <button className=" btn btn-cools" style={{ fontSize:"8px",width:"32px",height:"32px",position:"absolute",right:"6px",top:"160px"  ,backgroundColor:"#3DAB85",borderRadius:"9px",marginTop:"14px"}}><FontAwesomeIcon icon={faCartPlus} onClick={() => detail(item.item_id)} style={{color:"white",position:"absolute", width:"17.75px",height:"19.92px",left:"15.33%",top:"12.5%",bottom:"33.33%"}} /></button>
        
         
       
                            
            </div>
                  </div>
                
              </div>
              
             
        </div> 

 </div><br></br>
 </div>
    ))} 
   
    </div>
<br></br><br></br>

<h3 style={{marginLeft:"11px",position:"absolute",top:"1230px",left:"4px",fontFamily:"San Francisco"}} className="heades"><b>Daily Recipe</b></h3>
<i className="fas fa-angle-right fa-lg" style={{fontSize:"18px",color:"black",position:"absolute",right:"6px",top:"1230px"}} ></i>

<div className="carddecks" style={{marginLeft:"-15px",marginTop:"-30px"}}>    

  {recipess.map(item=>(
     <div class="col-sm-2">
       
     <div className="keyss" key={item.name} >
       <div className="cardItem">
     <div className="card cardItem cardSpace" style={{width:"9rem"}}>
        <img className="card-img-top" src={item.images}  style={{width:"158px",borderTopLeftRadius:"12px",borderTopRightRadius:"12px"}} alt="" />
            <div className="card-body" style={{height:"89px",width:"158px"}}>
                          <h6 style={{marginRight:"-14px",marginTop:"-6px",fontSize:"11px",position:"absolute",right:"10px",top:"12px"}} className="badge badge-success"><i className="fas fa-star fa-sm" style={{ fontSize:"11px"}}></i>{item.rating}</h6>
            
                <div style={{position:"absolute",left:"10px",marginTop:"-6px",position:"absolute",top:"123px",fontFamily:"San Francisco"}} id="timedaily">{item.time}min-Lunch</div>
           
              <h1 style={{position:"absolute",left:"10px",marginTop:"10px",position:"absolute",top:"133px",fontFamily:"San Francisco"}} id="dailytitle">{item.title}</h1><br></br>
              
                <div className="row">
               
                 
         <button className=" btn btn-cools" style={{ fontSize:"8px",width:"32px",height:"32px",position:"absolute",right:"3px",top:"140px"  ,backgroundColor:"#3DAB85",borderRadius:"9px",marginTop:"14px"}}><i className="fas fa-angle-right fa-lg" style={{fontSize:"18px",color:"white"}} ></i></button>
        
         
       
                            
            </div>
                  </div>
                
              </div>
              
             
        </div> 

 </div><br></br>
 </div>
    ))} 
    </div><br></br><br></br><br></br>
    
   
  </div>



     
     
     
            
        
    )
} 




