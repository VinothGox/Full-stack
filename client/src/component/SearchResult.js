import React,{useContext,useEffect, useState} from "react";
import {productcontext} from "../ContextApi/contextapi";
import axios from "axios";
import "./search.css";
import {useHistory} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { Card } from 'antd';
import {Typography } from 'antd';
import {Button} from "antd";
import {ShoppingCartOutlined} from "@ant-design/icons";
export const Search=(props)=>{

    const main=useContext(productcontext);

  const history=useHistory();
   
    const [details,setDetails]=main.detail;
    const [result,setResult]=useState([]);
    const [sellings,setSellings]=useState([]);
    const [serachitem,setSearchitem]=useState(props.location.name);
    const {Text,Title} =Typography;
    
    useEffect(()=>{
      searchProduct();
      getTopSellings();
       
        
        }, []);
        
        const searchProduct=async()=>{
          const response=await axios.get(`http://localhost:8002/all?title=${serachitem}`);
         
         
         setResult(response.data);
          //console.log(response.data);
          
        }
     
        const getTopSellings=async()=>{
          const gettop=await axios.get(`http://localhost:8002/getrating`);
          setSellings(gettop.data);
        
        }
     
        const goToMainPage=()=>{
            history.push("/");
        }
        const detail=(item_id)=>{
    setDetails(item_id);
    history.push("/details");

        }


    return(

        <div>
   <div>
<br></br>
<div>
<div style={{paddingLeft:"10px"}}>
  <button onClick={goToMainPage} style={{ fontSize:"12px",backgroundColor:"white",borderColor:"black",borderRadius:"9px",marginTop:"14px",position:"absolute",top:"10px"}} className="btn btn-pokos"><i className="fas fa-arrow-left fa-lg" style={{ fontSize:"15px"}} ></i></button>
  </div>
                      <button className=" btn btn-cools" style={{ fontSize:"12px",backgroundColor:"white",borderColor:"black",borderRadius:"9px",marginTop:"14px",position:"absolute",left:"87%",top:"8px"}}><FontAwesomeIcon icon={faCartPlus} style={{ fontSize:"13px",marginLeft:"-4px"}} /></button><br></br><br></br>
        
                      </div><br></br>
<h3 style={{marginLeft:"18px",fontFamily:"San Francisco",position:"absolute",top:"74px"}} className="heades">Found {result.length} Result</h3>

        
     
<div>
<div className="carddecks" style={{marginLeft:"-15px"}}> 
{result.map(item=>(
      
      <div class="col-sm-2">
      <div className="keyss" key={item.name} >
           
      <div className="cardItem cardSpace" style={{width:"8rem"}}>
     
          
    
   
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
    </div>
     <br></br>
  
     <h3 style={{marginLeft:"19px",position:"absolute",top:"357px",fontFamily:"San Francisco",fontSize:"17px"}} className="heades">Top Selling</h3>
<i className="fas fa-angle-right fa-lg" style={{fontSize:"18px",color:"black",position:"absolute",right:"6px",top:"357px"}} ></i>
 
<div>
<div className="carddecks" style={{marginLeft:"-15px"}}> 
{sellings.map(item=>(
      
      <div class="col-sm-2">
      <div className="keyss" key={item.name} >
           
      <div className="cardItem cardSpace" style={{width:"8rem"}}>
     
          
    
   
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
     <br></br><br></br><br></br><br></br>
        </div>
        </div>
    )

}

