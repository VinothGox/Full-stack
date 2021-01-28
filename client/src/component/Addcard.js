import React, { useState,useEffect } from "react";
import {useHistory}  from "react-router-dom";
import axios from "axios";
import "./addcard.css";
import {Row,Col} from "antd";
import { Card ,Space} from 'antd';
import {Button} from "antd";
import {RightOutlined,ShoppingOutlined,DeleteOutlined} from "@ant-design/icons";

export const AddCard=()=>{
    const [finals,setFinals]=useState([]);
    const history=useHistory();
   
 useEffect(()=>{
    getcards();
        
        }, []);
        
        const getcards=async()=>{
          const response=await axios.get(`http://localhost:8004/allcard`);
         
         
         setFinals(response.data);
          //console.log(response.data);
          
        }
        const deleteCards=async(card_id)=>{
         try{
            const ans=await axios.delete(`http://localhost:8004/deletecard/${card_id}`);
            console.log("successfully delete it!");
           history.push("/");
            
         }
         catch(err){
             console.log(err);
         }

        }
        const goBuy=(card_id,price)=>{
          console.log(card_id)
            history.push({pathname:'/buycard',id:card_id,Price:price});

        }
        const mainPage=()=>{
          history.push("/");
        }
        
        
       

    return(
        <div>
            
          
            <div><br></br>
            <div style={{paddingLeft:"10px"}}>
  <button onClick={mainPage} style={{ fontSize:"12px",backgroundColor:"white",borderColor:"black",borderRadius:"9px",marginTop:"14px",position:"absolute",top:"10px"}} className="btn btn-pokos"><i className="fas fa-arrow-left fa-lg" style={{ fontSize:"15px"}} ></i></button>
  </div>
  <img className="rounfeding" src="https://images.pexels.com/photos/4355346/pexels-photo-4355346.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""></img>

            <div>
                   <h1 className="font-weight-normal mt-2 text-center">Your Cart</h1>
                   <div className="container">
                   <h5>Total.No.of.Products:{finals.length}</h5>
                   </div>
  
                   {finals.map(item=>(
      
     
      <div className="keyss" key={item.name} >
         <div className="d-flex justify-content-center">
        <Space direction="vertical">
       
     <Card
    
    style={{ width:"232px",height:"220px",borderRadius:"12px",border:"#f3f3f3;",backgroundColor:"#f3f3f3"}}
    bodyStyle={{backgroundColor:"#f3f3f3",border:"0px",height:"112px",width:"132px",borderBottomLeftRadius:"12px",borderBottomRightRadius:"12px"}}
    cover={
      <div className="d-flex justify-content-center"><img alt="example" src={`http://localhost:8004/${item.images}`} style={{borderTopRightRadius:"12px",borderTopLeftRadius:"12px",height:"108px",width:"232px"}}/></div>}
  >
   <text style={{marginLeft:"-14px",fontSize:"11px",lineHeight:"18px" ,marginTop:"-14px",fontFamily:"San Francisco"}} className="texts">{item.weight}r</text>
                        <h6 style={{marginRight:"-14px",marginTop:"-14px",fontSize:"11px",position:"absolute",right:"20px"}} className="badge badge-success"><i className="fas fa-star fa-sm" style={{ fontSize:"11px"}}></i>{item.rating}</h6><br></br>
         <h1             
     style={{marginLeft:"-14px",marginTop:"-10px",fontFamily:"San Francisco",fontSize:"14px",lineHeight:"28px",fontWeight:"600"}}>{item.title}</h1>
     <div style={{paddingRight:"10px",position:"absolute",left:"78%",height:"32px",width:"32px",top:"150px"}}>
    <h2 style={{fontFamily:"San Francisco", marginRight:"10px"}} id="changesprice">{item.price}d</h2>
    </div>
    <div style={{paddingRight:"10px",position:"absolute",left:"65%",height:"32px",width:"32px",top:"150px",left:"80%"}}>
   
    <h1             
     style={{marginLeft:"-175px",textAlign:"left",marginTop:"26px",fontFamily:"San Francisco",fontSize:"14px",lineHeight:"28px",fontWeight:"600"}}>quantity: {item.quantity}</h1>
     </div>
  
  
    <Row gutter={0}>
    <div style={{paddingRight:"10px",position:"absolute",left:"60%",height:"32px",width:"32px",top:"180px"}}>
   
      <Col className="gutter-row" span={6}>
      <Button  type="danger" onClick={() =>{if(window.confirm('Are you sure to delete this record?')) {deleteCards(item.card_id)};}} style={{borderRadius:"10px",border:"#3DAB85"}} icon={<DeleteOutlined />} ></Button>
    </Col>
    </div>
    <div style={{paddingRight:"10px",position:"absolute",left:"84%",height:"32px",width:"32px",top:"180px"}}>
   
     <Col className="gutter-row" span={6}>
     <Button  type="primary" onClick={()=>goBuy(item.card_id,item.price)} style={{borderRadius:"10px",backgroundColor:"#3DAB85",border:"#3DAB85"}} icon={<ShoppingOutlined />} ></Button>
      </Col>
      </div>
    </Row>
      
  </Card><br></br>
  
  </Space>
  </div>
  
             
             </div>
   
    ))} 

             </div>
            </div><br></br><br></br><br/><br/><br/>
            </div>
         
         



  




       
    )
}