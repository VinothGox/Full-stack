import { faTachometerAlt } from "@fortawesome/free-solid-svg-icons";
import { colors } from "@material-ui/core";
import Axios from "axios";
import React, { useState,useEffect } from "react";
import {useHistory} from "react-router-dom";
import "./buy.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus,faHeart } from '@fortawesome/free-solid-svg-icons'

 
export const BuyProduct=(props)=>{
    const history=useHistory();

 const [buys,setBuys]=useState([]);
 const [count,setCount]=useState(0);
 const [money,setMoney]=useState(props.location.Price);
 const [discount,setDiscount]=useState(props.location.Price)

 
 useEffect(()=>{
    buycard();
    
    }, []);

    const buycard=async()=>{
        try{
            const main=await Axios.get(`http://localhost:8002/getonecard/${props.location.id}`);
            setBuys(main.data);
            //console.log(main.data);
        }
        catch(err){
            console.log(err);
        }

    }
    const plus=()=>{
        const sum=count+1;
      const  pricetot = parseInt(money);
      const  pricetots = parseInt(discount)
        const amount=pricetots+pricetot;
        setCount(sum);
        setMoney(amount);

    }
    const mini=()=>{
        const sum=count-1;
        const  pricetot = parseInt(money);
        const  pricetots = parseInt(discount);
        const amounts=pricetot-pricetots;
        setCount(sum);
        setMoney(amounts);

    }
    const gohomes=()=>{
        history.push("/addcard");
    }
    


    return(
        <div>
             <div className="container p-2">
                <div className="row">
                    <div className="col">
                        <div className="navitem">
                        <button onClick={gohomes} style={{ fontSize:"12px",backgroundColor:"white",borderColor:"black",borderRadius:"9px",marginTop:"14px"}} className="btn btn-pokos"><i className="fas fa-arrow-left fa-lg" style={{ fontSize:"15px"}} ></i></button>
                          <img className="rounf" src="https://images.pexels.com/photos/4355346/pexels-photo-4355346.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""></img>
  </div>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center">
            <div className="details">
    <img src={`http://localhost:8002/${buys.images}`} className="card-img-top img-fluid rounded carddecks" alt="..." width="100px"/>
   
       <div className="card-bodys"><br></br>
       <div className="container p-2">
                <div className="row">
                    <div className="col">
                        <div className="navitem">
                          <h5 className="title">{buys.title}</h5>
                          <button className="btn btn-heardd" style={{ fontSize:"11px"}}> <FontAwesomeIcon icon={faHeart}  className="cooled"/></button>
         
                        </div>
                    </div>
                </div>
            </div>
            <div className="container p-2">
                <div className="row">
                    <div className="col">
                        <div className="navitem">
                        <h6 className="badge badge-success" style={{ fontSize:"11px"}}><i className="fas fa-star fa-sm" style={{ fontSize:"11px"}}></i>{buys.rating}</h6>
         
                        </div>
                    </div>
                </div>
            </div>
         
          <div className="container p-2">
                <div className="row">
                    <div className="col">
                        <div className="navitem">
                        <h6 className="colored">1Package:{buys.weight}</h6> 
                        <h5><del className="delchange">2.000d</del>&ensp;{buys.price}d</h5>
         
                        </div>
                    </div>
                </div>
            </div>
         
        
             <h5 className="h5chamge">Description</h5>
             <div className="demoss">{buys.description}</div><br></br>
            
             <button onClick={plus} className="btn-danger">+</button>&nbsp;{count}&nbsp;
<button onClick={mini} className="btn-danger">-</button><br></br><br></br>
<h6 className="page"><b>Total Ammount:&nbsp;</b>${money}</h6>

          
          
            <br></br>
             <div className="d-flex justify-content-center">
             <button className="btn btn-success">Buy Now 
             
             </button>
       
             </div>
            
             </div>
    
      </div></div><br></br><h1 style={{ color:"white"}}>good</h1><br></br>
        </div>
    )

}


