import React,{useContext,useEffect,useState} from "react"
import {productcontext} from "../ContextApi/contextapi";
import {useHistory} from "react-router-dom";
import axios from "axios";
import "./details.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus,faHeart } from '@fortawesome/free-solid-svg-icons'

import { Row, Col } from 'antd';
import { Card } from 'antd';
import {Button,message} from "antd";
import {RightOutlined,ShoppingCartOutlined} from "@ant-design/icons";



export const Details=()=>{


    const history=useHistory();
    const main=useContext(productcontext);
    const [details,setDetails]=main.detail;
    const [temp,setTemp]=useState([]);
    const [temps,setTemps]=useState([]);
    const [results,setResults]=useState([]);
    const [recipess,setRecipe]=useState([]);
    const [items,setItems]=useState([]);
    const [demo,setDemo]=useState(2);
    const [quantityed,setQuantityed]=useState(1);
    
    const initialState = { 
      title:'',
      description:'',
      price:'',
      images:'',
      weight:'',
      rating:'',
      good:'',
      bad:'' 
    }
  
  
    
    

    useEffect(()=>{
   getDetails();
   getproducts();
   getRecipe();
 
   
    

     },[]);

    const getDetails=async()=>{
        const getdetail=await axios.get(`http://localhost:8004/get/${details}`);
       setResults(getdetail.data.data);
       
        setTemp(getdetail.data.weig);
        setTemps(getdetail.data.bads);
      }

     
      
     
const getRecipe=async()=>{
  const response=await axios.get(`http://localhost:8004/allrecipe`);
 
 //console.log(response.data);
  setRecipe(response.data);
}


      const getproducts=async()=>{
        const getproduct=await axios.get(`http://localhost:8004/getall`);
       
       
       setItems(getproduct.data);
      
        
      }
      const detail=(item_id)=>{
        setDetails(item_id);
        history.push("/details");

      }
      const AddCard=async()=>{

       // const ans=await axios.get(`http://localhost:8002/get/${item_id}`);

        //setArticle(ans.data);
       // console.log(article);

        const produ={
          title:results.title,
          description:results.description,
          price:results.price,
          images:results.images,
          weight:results.weight,
          rating:results.rating,
          good:results.good,
          bad:results.bad,
          quantity:quantityed,
          cards_id:demo
        }
       
       


       const ans1=await axios.post(`http://localhost:8004/addcard/${results.item_id}`,produ);
        console.log(ans1);
        if(ans1.data.message==="already add the card"){
        message.success("already add the cart!!!")
        history.push("/addcard");
        }
        else{
          message.success("Sucessfully add the cart")
        }
      //  history.push("/addcard");
       
      

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
                      <button className=" btn btn-cools" style={{ fontSize:"12px",backgroundColor:"white",borderColor:"black",borderRadius:"9px",marginTop:"14px",position:"absolute",left:"87%",top:"8px"}}><FontAwesomeIcon icon={faCartPlus} style={{ fontSize:"13px",marginLeft:"-4px"}} /></button><br></br><br></br>
        
                         
       
      
      <div className="d-flex justify-content-center">
        
<div className="detailed">
    <img src={`http://localhost:8004/${results.images}`} className="card-img-top  rounded" alt="..." width="100px"/>
   
       <div className="card-bodys"><br></br>
                           <div className="puttitle" style={{marginLeft:"10px",fontFamily:"San Francisco"}}>{results.title}</div>
                          <button className="btn btn-heardd" style={{ fontSize:"10px",fontFamily:"San Francisco"}}> <FontAwesomeIcon icon={faHeart}  className="cooled"/></button>
         
                         <h6 className="badge badge-success" style={{ fontSize:"11px",position:"absolute",top:"400px",marginLeft:"10px"}}><i className="fas fa-star fa-sm" style={{ fontSize:"11px"}}></i>{results.rating}</h6>
         
                       
                         <Row gutter={0}>
      <Col className="gutter-row" span={6}>
      <div className="packeg" style={{marginTop:"0px",marginLeft:"5px",fontFamily:"San Francisco",position:"absolute",top:"76px"}}>1 Package - {results.weight}</div> 
                         </Col>
     <Col className="gutter-row" span={6}>
     <div style={{marginTop:"40px",fontSize:"20px",fontWeight:"600px",fontFamily:"San Francisco"}}><del className="delchange" style={{fontFamily:"San Francisco",position:"absolute",top:"76px",left:"146px"}}>2.000d</del>&ensp;
     <div className="pricechange" style={{position:"absolute",fontFamily:"San Francisco",position:"absolute",top:"76px",left:"200px"}}>{results.price}d</div></div><br></br>
         
                       </Col>
    </Row>
         <hr className="detailscode"></hr>
        
             <h4 className="h5chamge" style={{fontFamily:"San Francisco"}}>Description</h4>
             <div className="demoss" style={{fontFamily:"San Francisco", marginRight:"7px"}}>{results.description}</div>
            <br></br>
            <Row gutter={0}>
      <Col className="gutter-row" span={6}>
      <h4 className="h5chamge" style={{fontFamily:"San Francisco"}}>Nutritions </h4>&nbsp;
      </Col>
     <Col className="gutter-row" span={6}>
      <div className="nutweight" style={{fontFamily:"San Francisco"}}>{results.weight}</div>   
      </Col>
    </Row>
    <table style={{padding:"10px"}}>
  <tr style={{width:"348px",display:"block"}}>
  <td className="tabl1" style={{textAlign:"left",fontFamily:"San Francisco",height:"18px",width:"221px"}}>Clories (kcal)</td>
  <td style={{left:"76%",fontSize:"15px",fontFamily:"San Francisco",top:"690px",position:"absolute",lineHeight:"20px"}}>120-150</td>
 
  </tr>
  <tr style={{width:"348px",display:"block"}}>
  <td className="tabl1" style={{textAlign:"left",fontFamily:"San Francisco",height:"18px",width:"221px"}}>Protein (g)</td>
  <td style={{left:"83%",fontSize:"15px",position:"absolute",top:"725px",fontFamily:"San Francisco",lineHeight:"20px"}}>1.1</td>
 
  </tr>
  <tr style={{width:"348px",display:"block"}}>
  <td className="tabl1" style={{textAlign:"left",fontFamily:"San Francisco",height:"18px",width:"221px"}}>Vitamin K (ug)</td>
  <td style={{left:"83%",fontSize:"15px",position:"absolute",top:"760px",fontFamily:"San Francisco",lineHeight:"20px"}}>0.5</td>
  
  </tr>
  <tr style={{width:"348px",display:"block"}}>
  <td  className="tabl1" style={{textAlign:"left",fontFamily:"San Francisco",height:"18px",width:"221px"}}>Fat (g)</td>
  <td style={{left:"83%",fontSize:"15px",position:"absolute",top:"795px",lineHeight:"20px"}}>0.3</td>
  
  </tr>
  <tr style={{width:"348px",display:"block"}}>
  <td className="tabl1" style={{textAlign:"left",fontFamily:"San Francisco",height:"18px",width:"221px"}}>Water (%)</td>
  <td style={{left:"83%",fontSize:"15px",position:"absolute",top:"831px",fontFamily:"San Francisco",lineHeight:"20px"}}>75</td>
 
  </tr>
  <tr style={{width:"348px",display:"block"}}>
  <td className="tabl1" style={{textAlign:"left",fontFamily:"San Francisco",height:"18px",width:"221px"}}>Fiber (g)</td>
  <td style={{left:"83%",fontSize:"15px",position:"absolute",top:"867px",fontFamily:"San Francisco",lineHeight:"20px"}}>3.2</td>
 
  </tr>
</table> <br></br><br></br>
<div className="d-flex justify-content-center">
              <div className="row">
                <div style={{minWidth:"148px"}}>
                <div className="sholudbe" style={{marginLeft:"-14px",fontFamily:"San Francisco"}}>should use</div>
                
                </div>
                <div className="bagdesd" style={{position:"absolute",left:"29%",marginLeft:"4px",marginTop:"-3px",color:"white",fontSize:"11px",fontWeight:"600px"}}><div className="badgename" style={{fontFamily:"San Francisco"}}>Good</div></div>&ensp;
                <div style={{minWidth:"148px"}}>
                <div className="shouldnd" style={{marginLeft:"9px",fontFamily:"San Francisco"}}>shouldn't use</div></div>
                <div className="redbagdesd" style={{position:"absolute",left:"83%",marginLeft:"0px",marginTop:"-3px",color:"white",fontSize:"11px",fontWeight:"600px"}}><div className="badgename" style={{fontFamily:"San Francisco"}}>Bad</div></div>&ensp;
             
              </div>
              </div>
            <div className="d-flex justify-content-center">
             <div className="row">
           
             <div className="good">
             {temp.map(item=>(
              <div className="goodchange" style={{fontFamily:"San Francisco"}}> {item}</div>
             ))}
              </div>&ensp;         
                
             <div className="bad">
            
             {temps.map(item=>(
              <div className="badchange" style={{fontFamily:"San Francisco"}}> {item}</div>
             ))}
             </div>
             </div>
             </div>
            <br></br>
            <div className="d-flex justify-content-center">
             <button onClick={()=>AddCard(results.item_id)}  style={{width:"100%",marginLeft:"8px",borderRadius:"8px",backgroundColor:"#3DAB85",fontFamily:"San Francisco"}} className="btn btn-successeddsd">
             <div className="container p-1">
                <div className="row">
                    <div className="col">
                        <div className="navitem">
                          
                        <div className="buttonadds" style={{fontFamily:"San Francisco"}}>Add to Card</div>
                        <div className="buttonadd" style={{fontFamily:"San Francisco"}}>{results.price}d</div>
         </div>
                    </div>
                </div>
            </div>
             </button>
       
             </div>
          
         
             </div>
    
      </div>
      
   </div>
      </div><br></br>
      <h3 style={{marginLeft:"16px",position:"absolute",top:"1235px",left:"4px",fontFamily:"San Francisco"}} className="heades"><b>Buy With</b></h3>
<i className="fas fa-angle-right fa-lg" style={{fontSize:"18px",color:"black",position:"absolute",right:"6px",top:"1235px"}} ></i>

<div>
<div className="carddecks" style={{marginLeft:"-15px"}}> 
{items.map(item=>(
      
      <div class="col-sm-2">
      <div className="keyss" key={item.name} >
           
      <div className="cardItem cardSpace" style={{width:"8rem"}}>
     
          
    
   
     <Card
    
    style={{ width:"132px",height:"220px",borderRadius:"12px",border:"#f3f3f3;"}}
    bodyStyle={{backgroundColor:"#f3f3f3",border:"0px",height:"112px",width:"132px",borderBottomLeftRadius:"12px",borderBottomRightRadius:"12px"}}
    cover={<img alt="example" src={`http://localhost:8004/${item.images}`} style={{borderTopRightRadius:"12px",borderTopLeftRadius:"12px",height:"108px",width:"132px"}}/>}
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
    <h3 style={{marginLeft:"16px",position:"absolute",top:"1520px",left:"4px",fontFamily:"San Francisco"}} className="heades"><b>Daily Recipe</b></h3>
<i className="fas fa-angle-right fa-lg" style={{fontSize:"18px",color:"black",position:"absolute",right:"6px",top:"1520px"}} ></i>

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
            
     <div style={{left:"10px",marginTop:"-6px",position:"absolute",top:"120px",fontFamily:"San Francisco"}} id="timedaily">{item.time}min-Lunch</div>
           
     <h1 style={{left:"10px",marginTop:"10px",position:"absolute",top:"133px",fontFamily:"San Francisco"}} id="dailytitle">{item.title}</h1><br></br>
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
     
     <br></br><br></br><br></br><br></br>
    
  </div>
    
    )
}