
import Axios from "axios";
import React, { useState,useEffect ,useContext} from "react";
import {useHistory} from "react-router-dom";
import "./buy.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeart } from '@fortawesome/free-solid-svg-icons'
import {productcontext} from "../ContextApi/contextapi";
import {Row,Col} from "antd";

 
export const BuyProduct=(props)=>{
    const history=useHistory();
    const main=useContext(productcontext);
    const [login,setLogin]=main.loginuser;
 const [buys,setBuys]=useState([]);
 const [count,setCount]=useState();
 const [money,setMoney]=useState(props.location.Price);
 const [discount,setDiscount]=useState(props.location.Price)

 
 useEffect(()=>{
    buyCard();
    
    }, []);

    const buyCard=async()=>{
        try{
            const main=await Axios.get(`http://localhost:8004/getonecard/${props.location.id}`);
            setBuys(main.data);
            setCount(main.data.quantity);
            console.log(main.data);
        }
        catch(err){
            console.log(err);
        }

    }
    const plus=async()=>{
        const sum=count+1;
      const  pricetot = parseFloat(money);
      const  pricetots = parseFloat(discount)
        const amount=pricetots+pricetot;
        const amounts=amount.toFixed(3);
        setCount(sum);
        setMoney(amounts);

    }
    const mini=async()=>{
        const sum=count-1;
        const  pricetot = parseFloat(money);
        const  pricetots = parseFloat(discount);
        const amounted=pricetot-pricetots;
        const amounteds=amounted.toFixed(3);
        setCount(sum);
        setMoney(amounteds);

    }
    const goToHome=()=>{
        history.push("/addcard");
    }
    


    return(
        <div><br></br>
        <div>
            {login?(
                <div>
        <div style={{paddingLeft:"10px"}}>
  <button onClick={goToHome} style={{ fontSize:"12px",backgroundColor:"white",borderColor:"black",borderRadius:"9px",marginTop:"14px",position:"absolute",top:"10px"}} className="btn btn-pokos"><i className="fas fa-arrow-left fa-lg" style={{ fontSize:"15px"}} ></i></button>
  </div>
  <img className="rounfed" src="https://images.pexels.com/photos/4355346/pexels-photo-4355346.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""></img><br></br><br></br>

            <div className="d-flex justify-content-center">
        
            <div className="detailed">
    <img src={`http://localhost:8004/${buys.images}`} className="card-img-top  rounded" style={{height:"350px"}} alt="..." />
   
       <div className="card-bodys"><br></br>
                           <div className="puttitle" style={{marginLeft:"10px",fontFamily:"San Francisco"}}>{buys.title}</div>
                          <button className="btn btn-heardd" style={{ fontSize:"10px",fontFamily:"San Francisco"}}> <FontAwesomeIcon icon={faHeart}  className="cooled"/></button>
         
                         <h6 className="badge badge-success" style={{ fontSize:"11px",marginLeft:"10px",marginTop:"30px"}}><i className="fas fa-star fa-sm" style={{ fontSize:"11px"}}></i>{buys.rating}</h6>
         
                       
                         <Row gutter={0}>
      <Col className="gutter-row" span={6}>
      <div className="packeg" style={{marginTop:"20px",marginLeft:"6px",fontFamily:"San Francisco"}}>1 Package - {buys.weight}</div> 
                         </Col>
    </Row>
   <del className="delchange" style={{fontFamily:"San Francisco",textAlign:"center",marginTop:"-20px",position:"absolute",right:"90px"}}>2.000d</del>&ensp;
     <div className="pricechange" style={{fontFamily:"San Francisco",textAlign:"right",position:"absolute",right:"15px",marginTop:"-42px"}}>{buys.price}d</div><br></br>
         
                      
   
         <hr className="detailscode"></hr>
        
         <h4 className="h5chamge" style={{fontFamily:"San Francisco"}}>Description</h4>
         <p className="demoss" style={{fontFamily:"San Francisco", marginRight:"5px"}}>{buys.description}</p>
            <br></br>
           
           
            <div style={{paddingLeft:"10px"}}>
                    <button onClick={()=>plus(buys.title,buys.cards_id)} className="btn-danger">+</button>&nbsp;{count}&nbsp;
<button onClick={()=>mini(buys.title,buys.cards_id)} className="btn-danger">-</button><br></br><br></br>
<h6 className="page"><b>Total Ammount:&nbsp;</b>$ {money}d</h6>
</div>
      
      
    
            <div className="d-flex justify-content-center">
             <button   style={{width:"100%",marginLeft:"5px",borderRadius:"8px",backgroundColor:"#3DAB85",fontFamily:"San Francisco",marginRight:"5px"}} className="btn btn-successeddsd">
             
                <div className="row">
                    <div className="col">
                       
                          
                        <div className="buttonadds" style={{fontFamily:"San Francisco",marginLeft:"5px"}}>Add to Card</div>
                        <div className="buttonadd" style={{fontFamily:"San Francisco",marginTop:"-20px"}}>{buys.price}d</div>
         </div>
                  
            </div>
             </button>
       
             </div>
 
          
         
             </div>
    
      </div>
      
           </div> 
            
            <br></br><br></br><br></br><br></br><br/>
            </div>
             ):(
                <div>
                    <h1>please login!!!</h1>
                    <Link to="/login" className="text-center">login</Link>
                    </div>
            )}   
            </div>
        </div>
    )

}


