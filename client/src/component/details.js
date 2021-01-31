import React,{useContext,useEffect,useState} from "react"

import {useHistory,Link} from "react-router-dom";
import {productcontext} from "../ContextApi/contextapi";
import axios from "axios";
import "./details.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus,faHeart } from '@fortawesome/free-solid-svg-icons'

import { Row, Col } from 'antd';
import { Card } from 'antd';
import {Button,message} from "antd";
import {RightOutlined,ShoppingCartOutlined} from "@ant-design/icons";



export const Details=()=>{

  const main=useContext(productcontext);
    const [login,setLogin]=main.loginuser;
    const history=useHistory();
   
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
       // history.push("/addcard");
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
         
           {login?(
              <div>
          <div><br></br>
         

          <div style={{paddingLeft:"10px"}}>
  <button onClick={mainPage} style={{ fontSize:"12px",backgroundColor:"white",borderColor:"black",borderRadius:"9px",marginTop:"14px",position:"absolute",top:"10px"}} className="btn btn-pokos"><i className="fas fa-arrow-left fa-lg" style={{ fontSize:"15px"}} ></i></button>
  </div>
                      <button className=" btn btn-cools" style={{ fontSize:"12px",backgroundColor:"white",borderColor:"black",borderRadius:"9px",marginTop:"14px",position:"absolute",left:"87%",top:"8px"}}><FontAwesomeIcon icon={faCartPlus} style={{ fontSize:"13px",marginLeft:"-4px"}} /></button><br></br><br></br>
        
    
 
       
      
      <div className="d-flex justify-content-center">
        
<div className="detailed">
    <img src={`http://localhost:8004/${results.images}`} className="card-img-top  rounded" style={{height:"350px"}} alt="..." />
   
       <div className="card-bodys"><br></br>
                           <div className="puttitle" style={{marginLeft:"10px",fontFamily:"San Francisco"}}>{results.title}</div>
                          <button className="btn btn-heardd" style={{ fontSize:"10px",fontFamily:"San Francisco"}}> <FontAwesomeIcon icon={faHeart}  className="cooled"/></button>
         
                         <h6 className="badge badge-success" style={{ fontSize:"11px",marginLeft:"10px",marginTop:"30px"}}><i className="fas fa-star fa-sm" style={{ fontSize:"11px"}}></i>{results.rating}</h6>
         
                       
                         <Row gutter={0}>
      <Col className="gutter-row" span={6}>
      <div className="packeg" style={{marginTop:"20px",marginLeft:"6px",fontFamily:"San Francisco"}}>1 Package - {results.weight}</div> 
                         </Col>
    </Row>
   <del className="delchange" style={{fontFamily:"San Francisco",textAlign:"center",marginTop:"-20px",position:"absolute",right:"90px"}}>2.000d</del>&ensp;
     <div className="pricechange" style={{fontFamily:"San Francisco",textAlign:"right",position:"absolute",right:"15px",marginTop:"-42px"}}>{results.price}d</div><br></br>
         
                      
   
         <hr className="detailscode"></hr>
        
         <h4 className="h5chamge" style={{fontFamily:"San Francisco"}}>Description</h4>
         <p className="demoss" style={{fontFamily:"San Francisco", marginRight:"5px"}}>{results.description}</p>
            <br></br>
           
           
      <h4 className="h5chamge" style={{fontFamily:"San Francisco"}}>Nutritions </h4>&nbsp;
      
      <div className="nutweight" style={{fontFamily:"San Francisco",marginTop:"-49px",marginLeft:"95px"}}>{results.weight}</div>   <br/>
     
    <table id="customers">
  <tr style={{marginRight:"10px"}}>
  <td className="tabl1" style={{textAlign:"left",fontFamily:"San Francisco"}}>Clories (kcal)</td>
  <td style={{fontSize:"15px",fontFamily:"San Francisco",lineHeight:"20px",textAlign:"right",position:"absolute",left:"80%"}}>120-150</td>
 
  </tr>
  <tr style={{marginRight:"10px"}}>
  <td className="tabl1" style={{textAlign:"left",fontFamily:"San Francisco"}}>Protein (g)</td>
  <td style={{fontSize:"15px",fontFamily:"San Francisco",lineHeight:"20px",position:"absolute",left:"80%"}}>1.1</td>
 
  </tr>
  <tr>
  <td className="tabl1" style={{textAlign:"left",fontFamily:"San Francisco",}}>Vitamin K (ug)</td>
  <td style={{fontSize:"15px",fontFamily:"San Francisco",lineHeight:"20px",position:"absolute",left:"80%"}}>0.5</td>
  
  </tr>
  <tr>
  <td  className="tabl1" style={{textAlign:"left",fontFamily:"San Francisco"}}>Fat (g)</td>
  <td style={{fontSize:"15px",lineHeight:"20px",position:"absolute",left:"80%"}}>0.3</td>
  
  </tr>
  <tr>
  <td className="tabl1" style={{textAlign:"left",fontFamily:"San Francisco"}}>Water (%)</td>
  <td style={{fontSize:"15px",fontFamily:"San Francisco",lineHeight:"20px",position:"absolute",left:"80%"}}>75</td>
 
  </tr>
  <tr>
  <td className="tabl1" style={{textAlign:"left",fontFamily:"San Francisco"}}>Fiber (g)</td>
  <td style={{fontSize:"15px",fontFamily:"San Francisco",lineHeight:"20px",position:"absolute",left:"80%"}}>3.2</td>
 
  </tr>
</table> <br></br><br></br>

<div className="d-flex justify-content-center">
              <div className="row">
                <div style={{minWidth:"148px"}}>
                <div className="sholudbe" style={{marginLeft:"-14px",fontFamily:"San Francisco"}}>should use <div className="bagdesd" style={{color:"white",fontSize:"11px",fontWeight:"600px",marginTop:"-20px",marginLeft:"90px"}}><div className="badgename" style={{fontFamily:"San Francisco",textAlign:"center",marginLeft:"2px"}}>Good</div></div>
               </div>
                
                </div>
                 <div style={{minWidth:"148px"}}>
                <div className="shouldnd" style={{marginLeft:"9px",fontFamily:"San Francisco"}}>shouldn't use <div className="redbagdesd" style={{color:"white",fontSize:"11px",fontWeight:"600px",marginTop:"-20px",marginLeft:"110px"}}><div className="badgename" style={{fontFamily:"San Francisco"}}>Bad</div></div>
             </div></div>
                
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
             <button onClick={()=>AddCard(results.item_id)}  style={{width:"100%",marginLeft:"5px",borderRadius:"8px",backgroundColor:"#3DAB85",fontFamily:"San Francisco",marginRight:"5px"}} className="btn btn-successeddsd">
             
                <div className="row">
                    <div className="col">
                       
                          
                        <div className="buttonadds" style={{fontFamily:"San Francisco",marginLeft:"5px"}}>Add to Card</div>
                        <div className="buttonadd" style={{fontFamily:"San Francisco",marginTop:"-20px"}}>{results.price}d</div>
         </div>
                  
            </div>
             </button>
       
             </div>
 
          
         
             </div>
    
      </div>
      
   </div>
      </div><br></br>
      <h3 style={{marginLeft:"16px",fontFamily:"San Francisco"}} className="heades"><b>Buy With</b> <i className="fas fa-angle-right fa-lg" style={{fontSize:"18px",color:"black",marginTop:"5px",position:"absolute",left:"95%"}} ></i></h3>


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
    <h3 style={{marginLeft:"16px",fontFamily:"San Francisco"}} className="heades"><b>Daily Recipe</b> <i className="fas fa-angle-right fa-lg" style={{fontSize:"18px",color:"black",position:"absolute",left:"95%"}} ></i></h3>


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
     ):(
      <div>
          <h1>please login!!!</h1>
          <Link to="/login" className="text-center">login</Link>
          </div>
  )}   
  </div>
    
    )
}