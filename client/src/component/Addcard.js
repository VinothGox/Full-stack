import React, { useState,useEffect } from "react";
import {useHistory}  from "react-router-dom";
import axios from "axios";
import "./addcard.css";


export const AddCard=()=>{
    const [finals,setFinals]=useState([]);
    const history=useHistory();
   

 useEffect(()=>{
    getcards();
        
        }, []);
        
        const getcards=async()=>{
          const response=await axios.get(`http://localhost:8002/allcards`);
         
         
         setFinals(response.data);
          //console.log(response.data);
          
        }
        const deleteCards=async(card_id)=>{
         try{
            const ans=await axios.delete(`http://localhost:8002/deletecard/${card_id}`);
            console.log("successfully delete it!");
           history.push("/");
            
         }
         catch(err){
             console.log(err);
         }

        }
        const goBuy=(card_id,price)=>{
            history.push({pathname:'/buycard',id:card_id,Price:price});

        }
        const goHome=()=>{
          history.push("/");
        }
        
        
       

    return(
        <div>
            
          
            <div>
            <div className="container p-2">
                <div className="row">
                    <div className="col">
                        <div className="navitem">
                            <button onClick={goHome} className="btn btn-poko"><i className="fas fa-arrow-left fa-lg" ></i></button>
                            <img className="rounf" src="https://images.pexels.com/photos/4355346/pexels-photo-4355346.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""></img>
  </div>
                    </div>
                </div>
            </div>

            <div>
                   <h1 className="font-weight-normal mt-2 text-center">Your Cart</h1>
                   <div className="container">
                   <h5>Total.No.of.Products:{finals.length}</h5>
                   </div>
  
   {finals.map(results=>(
                 
  
  <div className="card col-md-3 float-left m-4" style={{width: "18rem"}}>
  <img className="card-img-topsss" src={`http://localhost:8002/${results.images}`} alt=""/>
  <div className="card-body">
    <h5 className="card-title text-center">{results.title}</h5>
    <div className="d-flex justify-content-around">
    <p className="card-text">Rs.{results.price}-/-</p>
    <div>
    <p className="badge">{results.rating}</p>
    </div>
    </div>
  
    
    <button className="btn-danger" onClick={() =>{if(window.confirm('Are you sure to delete this record?')) {deleteCards(results.card_id)};}}>Remove</button>&nbsp;&nbsp;&nbsp;
    
    <button className="btn-primary" onClick={()=>goBuy(results.card_id,results.price)}>BuyNow</button>
    
  </div>
   
  
</div>
 
           
           
            ))}
             </div>
            </div>
            </div>
         
         



  




       
    )
}