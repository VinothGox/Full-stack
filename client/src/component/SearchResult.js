import React,{useContext,useEffect, useState} from "react";
import {productcontext} from "../ContextApi/contextapi";
import axios from "axios";
import "./search.css";
import {Link,useHistory} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus,faHeart,faBan } from '@fortawesome/free-solid-svg-icons'

export const Search=(props)=>{

    const main=useContext(productcontext);

  const history=useHistory();
    const [searchs,setSearchs]=main.search;
    const [details,setDetails]=main.detail;
    const [result,setResult]=useState([]);
    const [sellings,setSellings]=useState([]);
    const [serachitem,setSearchitem]=useState(props.location.name);
    useEffect(()=>{
        searchproduct();
        topselling();
       
        
        }, []);
        
        const searchproduct=async()=>{
          const response=await axios.get(`http://localhost:8002/all?title=${serachitem}`);
         
         
         setResult(response.data);
          //console.log(response.data);
          
        }
     
        const topselling=async()=>{
          const gettop=await axios.get(`http://localhost:8002/getrating`);
          setSellings(gettop.data);
        
        }
     
        const gotohomed=()=>{
            history.push("/");
        }
        const detail=(item_id)=>{
    setDetails(item_id);
    history.push("/details");

        }


    return(

        <div>
    <div className="container p-2">
                <div className="row">
                    <div className="col">
                        <div className="navitem">
                          
                            <button onClick={gotohomed} style={{ fontSize:"12px",backgroundColor:"white",borderColor:"black",borderRadius:"9px",marginTop:"14px"}} className="btn btn-pokos"><i className="fas fa-arrow-left fa-lg" style={{ fontSize:"15px"}} ></i></button>
                          <button className=" btn btn-cools" style={{ fontSize:"12px",backgroundColor:"white",borderColor:"black",borderRadius:"9px",marginTop:"14px"}}><FontAwesomeIcon icon={faCartPlus} style={{ fontSize:"13px"}} /></button>
        
         </div>
                    </div>
                </div>
            </div>
<br></br>

<h3 style={{marginLeft:"11px"}} className="heades"><b>Your result: {serachitem}</b></h3>

        
     
<div className="carddecks"> 
  
  {result.map(item=>(
      <div class="col-sm-2">
     <div className="keyss" key={item.name} >
       <div className="cardItem">
     <div className="card cardItem cardSpace" style={{width:"9rem"}}>
        <img className="card-img-top img-fluid" src={`http://localhost:8002/${item.images}`} alt="" />
            <div className="card-body">
            <text style={{marginLeft:"-10px",marginTop:"-6px"}} className="texts">{item.weight}r</text>
                        <h6 style={{marginRight:"-14px",marginTop:"-6px",fontSize:"11px",position:"absolute",right:"20px"}} className="badge badge-success"><i className="fas fa-star fa-sm" style={{ fontSize:"11px"}}></i>{item.rating}</h6><br></br>
                            
            <Link onClick={() => detail(item.item_id)}> 
              <h1 style={{position:"absolute",left:"10px",marginTop:"10px",position:"absolute",top:"130px"}} id="category">{item.title}</h1></Link><br></br><br></br>
             
                <div className="row">
                   
                        <div style={{marginLeft:"-14px",position:"absolute",left:"23px",top:"192px"}} id="changesprice" className="text-left">{item.price}d</div>
      
         <button className=" btn btn-cools" style={{ fontSize:"8px",width:"32px",height:"32px",position:"absolute",right:"6px",top:"165px"  ,backgroundColor:"#3DAB85",borderRadius:"9px",marginTop:"14px"}}><FontAwesomeIcon icon={faCartPlus} onClick={() => detail(item.item_id)} style={{color:"white",position:"absolute", width:"17.75px",height:"19.92px",left:"15.33%",top:"12.5%",bottom:"33.33%"}} /></button>
        
         
       
                            
            </div>
                  </div>
                
              </div>
             
        </div> 

 </div>
 </div>
    ))} 
   
    </div>
     <br></br>
  
    <h3 style={{marginLeft:"11px"}} className="heades"><b>Top selling</b></h3>
    <div className="carddecks"> 
  
  {sellings.map(item=>(
      <div class="col-sm-2">
     <div className="keyss" key={item.name} >
       <div className="cardItem">
     <div className="card cardItem cardSpace" style={{width:"9rem"}}>
        <img className="card-img-top img-fluid" src={`http://localhost:8002/${item.images}`} alt="" />
            <div className="card-body">
            <p style={{marginLeft:"-10px",marginTop:"-6px"}} className="texts">{item.weight}r</p>
                        <h6 style={{marginRight:"-14px",marginTop:"-6px",fontSize:"11px",position:"absolute",right:"20px"}} className="badge badge-success"><i className="fas fa-star fa-sm" style={{ fontSize:"11px"}}></i>{item.rating}</h6>
            

            <Link onClick={() => detail(item.item_id)}> 
              <h1 style={{position:"absolute",left:"10px",marginTop:"10px",position:"absolute",top:"123px"}} id="category">{item.title}</h1></Link><br></br>
              
                <div className="row">
               <h2 style={{fontSize:"12px",fontWeight:"600px",lineHeight:"18px",fontStyle:"normal",width:"53px",height:"14px"}}> <del style={{marginLeft:"-14px",position:"absolute",left:"23px",top:"170px",color:" #CACACA"}}  className="text-left">24.000d</del></h2>
    
                    <h2 style={{marginLeft:"-14px",position:"absolute",left:"23px",top:"192px"}} id="changesprice" className="text-left">{item.price}d</h2>
      
         <button className=" btn btn-cools" style={{ fontSize:"8px",width:"32px",height:"32px",position:"absolute",right:"6px",top:"160px"  ,backgroundColor:"#3DAB85",borderRadius:"9px",marginTop:"14px"}}><FontAwesomeIcon icon={faCartPlus} onClick={() => detail(item.item_id)} style={{color:"white",position:"absolute", width:"17.75px",height:"19.92px",left:"15.33%",top:"12.5%",bottom:"33.33%"}} /></button>
        
         
       
                            
            </div>
                  </div>
                
              </div>
             
        </div> 

 </div>
 </div>
    ))} 
   
    </div>
     <br></br><br></br><br></br><br></br>
        </div>
    )

}