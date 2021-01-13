import React,{useContext,useEffect,useState} from "react"
import {productcontext} from "../ContextApi/contextapi";
import {useHistory,Link} from "react-router-dom";
import axios from "axios";
import "./details.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus,faHeart } from '@fortawesome/free-solid-svg-icons'
import { AddCard } from "./Addcard";


export const Details=()=>{


    const history=useHistory();
    const main=useContext(productcontext);
    const [details,setDetails]=main.detail;
    const [temp,setTemp]=useState([]);
    const [temps,setTemps]=useState([]);
    const [results,setResults]=useState([]);
    const [recipess,setRecipe]=useState([]);
    const [items,setItems]=useState([]);
    
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
    const [article, setArticle] = useState();
  
    
    

    useEffect(()=>{
   getdetails();
   getproduct();
   getRecipe();
 
   
    

     },[]);

    const getdetails=async()=>{
        const getdetail=await axios.get(`http://localhost:8002/get/${details}`);
       setResults(getdetail.data.data);
       
        setTemp(getdetail.data.weig);
        setTemps(getdetail.data.bads);
      }

     
      
     
const getRecipe=async()=>{
  const response=await axios.get(`http://localhost:8002/allrecipe`);
 
 //console.log(response.data);
  setRecipe(response.data);
}


      const getproduct=async()=>{
        const getproduct=await axios.get(`http://localhost:8002/getall`);
       
       
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
          bad:results.bad
        }
        console.log(produ);
       


       const ans1=await axios.post(`http://localhost:8002/addcard/${results.item_id}`,produ);
        console.log(ans1);
        history.push("/addcard");
       
      

      }
    const gotohomed=()=>{
      history.push("/");
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


      
      <div className="d-flex justify-content-center">
        
<div className="detailed">
    <img src={`http://localhost:8002/${results.images}`} className="card-img-top  rounded" alt="..." width="100px"/>
   
       <div className="card-bodys"><br></br>
                           <div className="puttitle" style={{marginLeft:"10px",fontFamily:"San Francisco"}}>{results.title}</div>
                          <button className="btn btn-heardd" style={{ fontSize:"10px",fontFamily:"San Francisco"}}> <FontAwesomeIcon icon={faHeart}  className="cooled"/></button>
         
                      
            <div className="container p-2">
                <div className="row">
                    <div className="col">
                        <div className="navitem">
                        <h6 className="badge badge-success" style={{ fontSize:"11px",position:"absolute",top:"30px",marginLeft:"5px"}}><i className="fas fa-star fa-sm" style={{ fontSize:"11px"}}></i>{results.rating}</h6>
         
                        </div>
                    </div>
                </div>
            </div>
         
          <div className="container p-2">
                <div className="row">
                    <div className="col">
                        <div className="navitem">
                       <div className="packeg" style={{marginTop:"40px",marginLeft:"5px",fontFamily:"San Francisco"}}>1 Package - {results.weight}</div> 
                        <div style={{marginTop:"40px",fontSize:"20px",fontWeight:"600px",fontFamily:"San Francisco"}}><del className="delchange" style={{fontFamily:"San Francisco",position:"absolute",left:"61%",top:"59%"}}>2.000d</del>&ensp;
                        <div className="pricechange" style={{position:"absolute",top:"59%",left:"75%",fontFamily:"San Francisco"}}>{results.price}d</div></div>
         
                        </div>
                    </div>
                </div>
            </div>
         <hr className="detailscode"></hr>
        
             <h4 className="h5chamge" style={{fontFamily:"San Francisco"}}>Description</h4>
             <div className="demoss" style={{fontFamily:"San Francisco", marginRight:"7px"}}>{results.description}</div>
            <br></br>
              
           <div className="row">
          <h4 className="h5chamge" style={{marginLeft:"26px",fontFamily:"San Francisco"}}>Nutritions </h4>&nbsp;
          <div className="nutweight" style={{fontFamily:"San Francisco"}}>{results.weight}</div>
          </div>
              <table>
  <tr style={{width:"348px",display:"block"}}>
  <td className="tabl1" style={{textAlign:"left",fontFamily:"San Francisco",height:"18px",width:"221px"}}>Clories (kcal)</td>
  <td style={{left:"76%",top:"840px",fontSize:"15px",fontFamily:"San Francisco",top:"680px",position:"absolute",lineHeight:"20px"}}>120-150</td>
 
  </tr>
  <tr style={{width:"348px",display:"block"}}>
  <td className="tabl1" style={{textAlign:"left",fontFamily:"San Francisco",height:"18px",width:"221px"}}>Protein (g)</td>
  <td style={{left:"83%",fontSize:"15px",position:"absolute",top:"720px",fontFamily:"San Francisco",lineHeight:"20px"}}>1.1</td>
 
  </tr>
  <tr style={{width:"348px",display:"block"}}>
  <td className="tabl1" style={{textAlign:"left",fontFamily:"San Francisco",height:"18px",width:"221px"}}>Vitamin K (ug)</td>
  <td style={{left:"83%",fontSize:"15px",position:"absolute",top:"755px",fontFamily:"San Francisco",lineHeight:"20px"}}>0.5</td>
  
  </tr>
  <tr style={{width:"348px",display:"block"}}>
  <td  className="tabl1" style={{textAlign:"left",fontFamily:"San Francisco",height:"18px",width:"221px"}}>Fat (g)</td>
  <td style={{left:"83%",fontSize:"15px",position:"absolute",top:"790px",lineHeight:"20px"}}>0.3</td>
  
  </tr>
  <tr style={{width:"348px",display:"block"}}>
  <td className="tabl1" style={{textAlign:"left",fontFamily:"San Francisco",height:"18px",width:"221px"}}>Water (%)</td>
  <td style={{left:"83%",fontSize:"15px",position:"absolute",top:"825px",fontFamily:"San Francisco",lineHeight:"20px"}}>75</td>
 
  </tr>
  <tr style={{width:"348px",display:"block"}}>
  <td className="tabl1" style={{textAlign:"left",fontFamily:"San Francisco",height:"18px",width:"221px"}}>Fiber (g)</td>
  <td style={{left:"83%",fontSize:"15px",position:"absolute",top:"860px",fontFamily:"San Francisco",lineHeight:"20px"}}>3.2</td>
 
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
      
   
      </div><br></br><br></br>
      <h3 style={{marginLeft:"14px",position:"absolute",top:"1230px",left:"4px"}} className="heades"><b>Buy With</b></h3>
<i className="fas fa-angle-right fa-lg" style={{fontSize:"18px",color:"black",position:"absolute",right:"6px",top:"1230px"}} ></i>

      <div>
     
      <div className="carddecks" style={{marginLeft:"-15px",marginTop:"-10px"}}> 
  
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
     </div>
     <h3 style={{marginLeft:"14px",position:"absolute",top:"1520px",left:"4px"}} className="heades"><b>Daily Recipe</b></h3>
<i className="fas fa-angle-right fa-lg" style={{fontSize:"18px",color:"black",position:"absolute",right:"6px",top:"1520px"}} ></i>

<div className="carddecks" style={{marginLeft:"-15px",marginTop:"30px"}}>    

  {recipess.map(item=>(
     <div class="col-sm-2">
       
     <div className="keyss" key={item.name} >
       <div className="cardItem">
     <div className="card cardItem cardSpace" style={{width:"9rem"}}>
        <img className="card-img-top" src={item.images}  style={{width:"158px",borderTopLeftRadius:"12px",borderTopRightRadius:"12px"}} alt="" />
            <div className="card-body" style={{height:"89px",width:"158px"}}>
                          <h6 style={{marginRight:"-14px",marginTop:"-6px",fontSize:"11px",position:"absolute",right:"10px",top:"12px"}} className="badge badge-success"><i className="fas fa-star fa-sm" style={{ fontSize:"11px"}}></i>{item.rating}</h6>
            
                <div style={{position:"absolute",left:"10px",marginTop:"-6px",position:"absolute",top:"123px"}} id="timedaily">{item.time}min-Lunch</div>
           
              <h1 style={{position:"absolute",left:"10px",marginTop:"10px",position:"absolute",top:"133px"}} id="dailytitle">{item.title}</h1><br></br>
              
                <div className="row">
               
                 
         <button className=" btn btn-cools" style={{ fontSize:"8px",width:"32px",height:"32px",position:"absolute",right:"3px",top:"140px"  ,backgroundColor:"#3DAB85",borderRadius:"9px",marginTop:"14px"}}><i className="fas fa-angle-right fa-lg" style={{fontSize:"18px",color:"white"}} ></i></button>
        
         
       
                            
            </div>
                  </div>
                
              </div>
              
             
        </div> 

 </div><br></br>
 </div>
    ))} 
    </div>
     
     <br></br><br></br><br></br><br></br>
    
  </div>
    
    )
}