
import Axios from "axios";
import React, { useState,useEffect } from "react";
import {useHistory} from "react-router-dom";
import "./buy.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeart } from '@fortawesome/free-solid-svg-icons'
import {Row,Col} from "antd";

 
export const BuyProduct=(props)=>{
    const history=useHistory();

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
        <div style={{paddingLeft:"10px"}}>
  <button onClick={goToHome} style={{ fontSize:"12px",backgroundColor:"white",borderColor:"black",borderRadius:"9px",marginTop:"14px",position:"absolute",top:"10px"}} className="btn btn-pokos"><i className="fas fa-arrow-left fa-lg" style={{ fontSize:"15px"}} ></i></button>
  </div>
  <img className="rounfed" src="https://images.pexels.com/photos/4355346/pexels-photo-4355346.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""></img><br></br><br></br>

            <div className="d-flex justify-content-center">
        
        <div className="detailed">
            <img src={`http://localhost:8004/${buys.images}`} className="card-img-top  rounded" alt="..." width="100px"/>
           
               <div className="card-bodys"><br></br>
                                   <div className="puttitle" style={{marginLeft:"10px",fontFamily:"San Francisco"}}>{buys.title}</div>
                                  <button className="btn btn-heardd" style={{ fontSize:"10px",fontFamily:"San Francisco"}}> <FontAwesomeIcon icon={faHeart}  className="cooled"/></button>
                 
                                 <h6 className="badge badge-success" style={{ fontSize:"11px",position:"absolute",top:"400px",marginLeft:"10px"}}><i className="fas fa-star fa-sm" style={{ fontSize:"11px"}}></i>{buys.rating}</h6>
                 
                               
                                 <Row gutter={0}>
              <Col className="gutter-row" span={6}>
              <div className="packeg" style={{marginTop:"0px",marginLeft:"5px",fontFamily:"San Francisco",position:"absolute",top:"76px"}}>1 Package - {buys.weight}</div> 
                                 </Col>
             <Col className="gutter-row" span={6}>
             <div style={{marginTop:"40px",fontSize:"20px",fontWeight:"600px",fontFamily:"San Francisco"}}><del className="delchange" style={{fontFamily:"San Francisco",position:"absolute",top:"76px",left:"146px"}}>2.000d</del>&ensp;
             <div className="pricechange" style={{position:"absolute",fontFamily:"San Francisco",position:"absolute",top:"76px",left:"200px"}}>{buys.price}d</div></div><br></br>
                 
                               </Col>
            </Row>
                 <hr className="detailscode"></hr>
                
                     <h4 className="h5chamge" style={{fontFamily:"San Francisco"}}>Description</h4>
                     <div className="demoss" style={{fontFamily:"San Francisco", marginRight:"7px"}}>{buys.description}</div>
                    <br></br>
          
      
                  
                    <br></br>
                    <div style={{paddingLeft:"10px"}}>
                    <button onClick={()=>plus(buys.title,buys.cards_id)} className="btn-danger">+</button>&nbsp;{count}&nbsp;
<button onClick={()=>mini(buys.title,buys.cards_id)} className="btn-danger">-</button><br></br><br></br>
<h6 className="page"><b>Total Ammount:&nbsp;</b>$ {money}d</h6>
</div>
<div className="d-flex justify-content-center">
             <button style={{width:"100%",marginLeft:"8px",borderRadius:"8px",backgroundColor:"#3DAB85",fontFamily:"San Francisco"}} className="btn btn-successeddsd">
             <div className="container p-1">
                <div className="row">
                    <div className="col">
                        <div className="navitem">
                           
                        <div className="buttonadds" style={{fontFamily:"San Francisco"}}>Buy Now</div>
                        <div className="buttonadd" style={{fontFamily:"San Francisco"}}>{money}d</div>
         </div>
                    </div>
                </div>
            </div>
             </button>
       
             </div><br></br><br></br>
                 
                     </div>
            
              </div>
              
           </div> 
            
            <br></br><br></br>
        </div>
    )

}


