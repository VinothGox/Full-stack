import React,{useEffect,useContext} from "react";
import {BrowserRouter,Switch,Route,Link} from "react-router-dom";
import './App.css';
import {Home} from "./component/home";
import {Product} from "./component/product";
import {Search} from "./component/SearchResult";
import {Cook} from "./component/cook";
import {Details} from "./component/details";
import {productcontext} from "./ContextApi/contextapi";
import {AddCard} from "./component/Addcard";
import {BuyProduct} from "./component/buyproduct";
import Bottombar from "./bar";
function App() {
  
  const main=useContext(productcontext);
  const [details,setDetails]=main.detail;
  const [searchs,setSearchs]=main.search;
  const [cook,setCook]=main.cook;


  const logs=()=>{
    setDetails();
    setSearchs();
    setCook();


  }
  return (
    
    <div>
          
    <BrowserRouter>
    
   
  
     <Switch>
       <Route exact path="/" component={Home}/>
       <Route exact path="/product" component={Product}/>
       <Route exact path="/search" component={Search}/>
       <Route exact path="/dailyCook" component={Cook}/>
       <Route exact path="/details" component={Details}/>
       <Route exact path="/addcard" component={AddCard}/>
       <Route exact path="/buycard" component={BuyProduct}/>
      
       
       
                 
     </Switch>
 <Bottombar/>
   </BrowserRouter>

     </div>
  );
}

export default App;