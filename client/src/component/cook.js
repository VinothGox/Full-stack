import React,{useEffect,useContext,useState} from "react";
import {productcontext} from "../ContextApi/contextapi";
import {useHistory} from "react-router-dom";
import "./cook.css";

export const Cook=()=>{

    const App_id="57863a71";
    const App_key="932fc1d299dbf285ea535b63d263f77b";

    const main=useContext(productcontext);
    const [cook,setCook]=main.cook;
    const [result,setResult]=useState([]);
    const [searchs,setSearchs]=useState("");
    const history=useHistory();


    useEffect(()=>{
        getRecipes();
        
        }, [cook]);
        
        const getRecipes=async()=>{
          const response=await fetch(`https://api.edamam.com/search?q=${cook}&app_id=${App_id}&app_key=${App_key}`);
          const data=await response.json();
         
          setResult(data.hits);
          console.log(data.hits);
          
        }

        const updatesearch=e=>{
            setSearchs(e.target.value);
        }

        const Submit=e=>{
            e.preventDefault();
            setCook(searchs);
            setSearchs("");
        }
        const gotohome=()=>{
          history.push("/");
        }

        

    return(

        <div>
  <div>

  <div className="container p-2">
                <div className="row">
                    <div className="col">
                        <div className="navitem">
                        <button onClick={gotohome} style={{ fontSize:"12px",backgroundColor:"white",borderColor:"black",borderRadius:"9px",marginTop:"14px"}} className="btn btn-pokos"><i className="fas fa-arrow-left fa-lg" style={{ fontSize:"15px"}} ></i></button>
                            <img className="rounf" style={{marginTop:"10px"}} src="https://images.pexels.com/photos/4355346/pexels-photo-4355346.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""></img>
  </div>
                    </div>
                </div>
            </div>
            <h3 style={{textAlign:"center"}}>Daily Cook</h3>
  <div className="d-flex justify-content-center">
    
     <form onSubmit={Submit} class="form-inline">
  <div class="form-group mx-sm-3 mb-2">
    <label for="inputPassword2" class="sr-only">search</label>
    <input type="text" class="forms"  onChange={updatesearch} id="title" placeholder="Search"/>
  </div>
 </form>
  </div><br></br>
        </div>
      
          <div>
      {result.map(res=>(
        
        <div className="card col-md-3 float-left m-4" style={{width: "18rem"}}>
        <img className="card-img-topsss" src={res.recipe.image}/>
        <div className="card-bodyed">
          <h5 className="card-title text-center">{res.recipe.label}</h5>
          <div className="d-flex justify-content-around">
          <button className="btn-success">more..</button>
         
          </div>
        
          
          
        </div>
         
        
      </div>
      ))}
      </div>
      </div>
     
      
        
        
    )
}