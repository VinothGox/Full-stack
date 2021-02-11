import React,{useEffect,useContext, useState} from "react";
import {useHistory,Link} from "react-router-dom";
import {GoogleLogout} from "react-google-login";
import axios from "axios";
import {productcontext} from "../ContextApi/contextapi";
import "./home.css";
import {UIstore} from "./stateStore";
import 'antd/dist/antd.css';
import { Card,Carousel,Dropdown,Menu } from 'antd';
import {Button,message} from "antd";
import {RightOutlined,ShoppingCartOutlined} from "@ant-design/icons";

import {Typography } from 'antd';





export const Home=()=>{

  const islogin=UIstore.useState(s=>s.login)
  const name=UIstore.useState(s=>s.name);
  const images=UIstore.useState(s=>s.image);
  const detailed=UIstore.useState(s=>s.detail);
  const id=UIstore.useState(s=>s.cardId);
   
    
    
    
    const [recipess,setRecipe]=useState([]);
    const [items,setItems]=useState([]);
    const [selling,setSelling]=useState([]);
    const [category,setCotegory]=useState([]);
   
  
    const [searched,setSearched]=useState();
   
    const [demos,setDemos]=useState(2);
    const [quantityss,setQuantityss]=useState(1);

    const history=useHistory();

    useEffect(()=>{
      getRecipe();
      getproduct();
      getTopSelling();
      getCategory();
      
      
      }, []);
      
      const getCategory=async()=>{
        const getCategory=await axios.get(`http://localhost:8004/allcategory`);
       
       // setRecipe(data.hits);
       setCotegory(getCategory.data);
       // console.log(response.data);
        
      }
        
        const getproduct=async()=>{
          const getproduct=await axios.get(`http://localhost:8004/getall`);
         
         // setRecipe(data.hits);
         setItems(getproduct.data);
         // console.log(response.data);
          
        }
        


const getRecipe=async()=>{
  const response=await axios.get(` http://localhost:8004/allrecipe`);
 
 //console.log(response.data);
  setRecipe(response.data);
}

const getTopSelling=async()=>{
  const gettop=await axios.get(`http://localhost:8004/getrating`);
  setSelling(gettop.data);

}

        const  onSubmit=async(e)=>{
            e.preventDefault();
        
            //console.log(searchs);
        //setMessage("submit Successfully ");
        history.push({pathname:'/search',name:searched});
        }
       
       
        const detail=(item_id)=>{
          //setDetails(item_id);
          UIstore.update(s=>{
            s.detail=item_id
          });
          history.push("/details");

        }
       const cate=(name)=>{
        history.push({pathname:'/search',name:name});

       
       }
      const {Title} =Typography;
    
      const getDatas=async(item_id)=>{

        try{
        const ans=await axios.get(` http://localhost:8004/get/${item_id}`);
        //setResulted(ans.data.data);
       
        const produs={
          title:ans.data.data.title,
          description:ans.data.data.description,
          price:ans.data.data.price,
          images:ans.data.data.images,
          weight:ans.data.data.weight,
          rating:ans.data.data.rating,
          good:ans.data.data.good,
          bad:ans.data.data.bad,
          quantity:quantityss,
          cards_id:id
        }
        console.log(produs);
        const ans1=await axios.post(`http://localhost:8004/addcard/${item_id}`,produs);
       
       
        if(ans1.data.message==="already add the card"){
        message.success("add the cart!!!")
       // history.push("/addcard");
        }
        else{
          message.success("Sucessfully add the cart")
        }
      //  history.push("/addcard")
        
      }
      catch(err){
        console.log(err);

      }
    }

    function onChange(a, b, c) {
      console.log(a, b, c);
    }
    const logout=(response)=>{
      
      history.push("/login");
      UIstore.update(s=>{s.login=false});
     UIstore.update(s=>{s.images=''});
     UIstore.update(s=>{s.name=''});
      
    }

    const menu = (
      <Menu>
        <Menu.Item>
        <GoogleLogout
      clientId="652934983320-3h56qsb4vrt273pumam71trk0bmtvdin.apps.googleusercontent.com"
      onLogoutSuccess={logout}
    >
   
          <a target="_blank" rel="noopener noreferrer">
           logout
          </a>
          </GoogleLogout>
        </Menu.Item>
        </Menu>
    );
    return(
      <div>
      <div><br></br>
      {islogin?(
        <div>
      <h1
  style={{fontSize:"11px",fontFamily:"San Francisco",lineHeight:"13px",color:"#1A051D",paddingLeft:"13px"}}>MONDAY,24 OCTOBER
</h1>
<h2 style={{fontSize:"22px",fontFamily:"San Francisco",lineHeight:"28px",fontWeight:"600",color:"#1A051D",paddingLeft:"13px"}}>Good Morning, {name}</h2>
<Dropdown overlay={menu}>
<img className="rounf" src={images} alt=""></img>
</Dropdown>
<button className=" btn btn-cools" style={{paddingLeft:"10px",marginLeft:"14px",position:"absolute",top:"90px"}}><i className="fas fa-bars fa-lg" style={{fontSize:"14px",justifyItems:"center"}}></i></button>

                            <form onSubmit={onSubmit} style={{position:"absolute",top:"75px",paddingLeft:"59px"}} class="form-inline">
                            <div class="scan" style={{position:"absolute",top:"28px",right:"30px"}}></div>
                            <div class="scans" style={{position:"absolute",top:"35px",right:"28.5px"}}></div>
                            <div class="scaned" style={{position:"absolute",top:"35.87876px",right:"28.5px"}}></div>
                           
                             <i className="fa fa-search" style={{fontSize:"15px",position:"absolute",top:"28px",left:"70px",width:"15px",height:"15px",color:"#A8A8A8"}}></i>
                           <input type="text" style={{borderRadius:"25px",backgroundColor:"#F3F3F3",width:"300px", height:"38.19px",border:"#F3F3F3",paddingTop:"10px"}} className="form-control my-3"  onChange={(e)=>setSearched(e.target.value)} id="titless" placeholder="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Search"></input>
   
  
 </form><br></br><br></br><br></br><br/><br/>
 <Carousel autoplay>
    <div>
      <h3 className="contentStyle"><div style={{position:"absolute",fontFamily:"San Francisco",top:"-20px",left:"21.5%"}}>  Freshfood from Foam</div><Button style={{position:"absolute",top:"120px",marginRight:"-9px",left:"32%",backgroundColor:"#F6D798",borderRadius:"8px",color:"white"}}>Shopping Now</Button></h3>
    </div>
    <div>
    <h3 className="contentStyle"><div style={{position:"absolute",fontFamily:"San Francisco",top:"-20px",left:"21.5%"}}>  Freshfood</div><Button style={{position:"absolute",top:"120px",marginRight:"-9px",left:"32%",backgroundColor:"#F6D798",borderRadius:"8px",color:"white"}}>Shopping Now</Button></h3>
     </div>
  </Carousel>
<br></br>

<h3 style={{marginLeft:"19px",position:"absolute",top:"372px",fontFamily:"San Francisco",fontSize:"17px"}} className="heades">Category</h3>
<i className="fas fa-angle-right fa-lg" style={{fontSize:"18px",color:"black",position:"absolute",right:"6px",top:"372px"}} ></i>
 
<div>
<div className="carddecks" style={{marginLeft:"-15px"}}> 
{category.map(item=>(
      
      <div class="col-sm-2">
      <div className="keyss" key={item.name} >
           
      <div className="card cardItem cardSpace" style={{width:"9rem"}}>
     
          
    
   
     <Card
    
    style={{ width: "158px",height:"184px",borderRadius:"12px",border:"#f3f3f3;"}}
    bodyStyle={{backgroundColor:"#f3f3f3",border:"0px",height:"89px",borderBottomLeftRadius:"12px",borderBottomRightRadius:"12px"}}
   cover={<img alt="example" src={`http://localhost:8004/${item.images}`} style={{borderTopRightRadius:"12px",borderTopLeftRadius:"12px"}}/>}
  >
    <h1 style={{marginLeft:"-10px",fontSize:"14px",lineHeight:"28px",fontWeight:"600",fontFamily:"San Francisco"}} >{item.name}</h1>
    <div style={{paddingRight:"10px",position:"absolute",left:"70%",height:"32px",width:"32px",top:"140px"}}>
     
     <Button type="primary" onClick={() => cate(item.name)} style={{borderRadius:"10px",backgroundColor:"#3DAB85",border:"#3DAB85"}} icon={<RightOutlined />} ></Button>
     </div>
  </Card>
             </div>
         </div>

</div>
    ))} 
    </div>
    </div><br></br>

    <h3 style={{marginLeft:"19px",position:"absolute",top:"620px",fontFamily:"San Francisco",fontSize:"17px"}} className="heades">Recommed</h3>
<i className="fas fa-angle-right fa-lg" style={{fontSize:"18px",color:"black",position:"absolute",right:"6px",top:"620px"}} ></i>
 
<div>
<div className="carddecks" style={{marginLeft:"-15px"}}> 
{items.map(item=>(
      
      <div class="col-sm-2">
      <div className="keyss" key={item.name} >
           
      <div className="cardItem cardSpace" style={{width:"7.4rem"}}>
     
          
    
   
     <Card
    
    style={{ width:"132px",height:"220px",borderRadius:"12px",border:"#f3f3f3;"}}
    bodyStyle={{backgroundColor:"#f3f3f3",border:"0px",height:"112px",width:"132px",borderBottomLeftRadius:"12px",borderBottomRightRadius:"12px"}}
    cover={<img alt="example" src={`http://localhost:8004/${item.images}`} style={{borderTopRightRadius:"12px",borderTopLeftRadius:"12px",height:"108px",width:"132px"}}/>}
  >
   <text style={{marginLeft:"-14px",fontSize:"11px",lineHeight:"18px" ,marginTop:"-14px",fontFamily:"San Francisco"}} className="texts">{item.weight}r</text>
                        <h6 style={{marginRight:"-14px",marginTop:"-14px",fontSize:"11px",position:"absolute",right:"20px"}} className="badge badge-success"><i className="fas fa-star fa-sm" style={{ fontSize:"11px"}}></i>{item.rating}</h6><br></br>
     <Link onClick={() => detail(item.item_id)}><h1 style={{marginLeft:"-14px",marginTop:"-10px",fontFamily:"San Francisco",fontSize:"14px",lineHeight:"28px",fontWeight:"600"}}>{item.title}</h1></Link>
    <h2 style={{marginLeft:"-14px",position:"absolute",left:"23px",top:"192px",fontFamily:"San Francisco"}} id="changesprice" className="text-left">{item.price}d</h2>
    <div style={{paddingRight:"10px",position:"absolute",left:"70%",height:"32px",width:"32px",top:"180px"}}>
    
     <Button onClick={()=>getDatas(item.item_id)} type="primary" style={{borderRadius:"10px",backgroundColor:"#3DAB85",border:"#3DAB85"}} icon={<ShoppingCartOutlined />} ></Button>
     </div>
  </Card>
             </div>
         </div>

</div>
    ))} 
    </div>
    </div><br></br>
    <h3 style={{marginLeft:"19px",position:"absolute",top:"900px",fontFamily:"San Francisco",fontSize:"17px"}} className="heades">Top Selling</h3>
<i className="fas fa-angle-right fa-lg" style={{fontSize:"18px",color:"black",position:"absolute",right:"6px",top:"900px"}} ></i>
 
<div>
<div className="carddecks" style={{marginLeft:"-15px"}}> 
{selling.map(item=>(
      
      <div class="col-sm-2">
      <div className="keyss" key={item.name} >
           
      <div className="cardItem cardSpace" style={{width:"7.4rem"}}>
     
          
    
   
     <Card
    
    style={{ width:"132px",height:"220px",borderRadius:"12px",border:"#f3f3f3;"}}
    bodyStyle={{backgroundColor:"#f3f3f3",border:"0px",height:"112px",width:"132px",borderBottomLeftRadius:"12px",borderBottomRightRadius:"12px"}}
    cover={<img alt="example" src={`http://localhost:8004/${item.images}`} style={{borderTopRightRadius:"12px",borderTopLeftRadius:"12px",height:"108px",width:"132px"}}/>}
  >
   <text style={{marginLeft:"-14px",fontSize:"11px",lineHeight:"18px" ,marginTop:"-14px",fontFamily:"San Francisco"}} className="texts">{item.weight}r</text>
                        <h6 style={{marginRight:"-14px",marginTop:"-14px",fontSize:"11px",position:"absolute",right:"20px"}} className="badge badge-success"><i className="fas fa-star fa-sm" style={{ fontSize:"11px"}}></i>{item.rating}</h6><br></br>
                       
    <Link onClick={() => detail(item.item_id)}><h1 style={{marginLeft:"-14px",marginTop:"-13px",fontFamily:"San Francisco",fontSize:"14px",lineHeight:"28px",fontWeight:"600"}}>{item.title}</h1></Link>
    <Title level={2} style={{fontSize:"12px",fontWeight:"600px",lineHeight:"18px",fontStyle:"normal",width:"53px",height:"14px"}}> <del style={{marginLeft:"-14px",position:"absolute",left:"23px",top:"170px",color:" #CACACA",fontFamily:"San Francisco"}}  className="text-left">24.000d</del></Title>
    
    <h2 style={{marginLeft:"-14px",position:"absolute",left:"23px",top:"192px",fontFamily:"San Francisco"}} id="changesprice" className="text-left">{item.price}d</h2>
<div style={{paddingRight:"10px",position:"absolute",left:"70%",height:"32px",width:"32px",top:"180px"}}>
    
     <Button onClick={()=>getDatas(item.item_id)} type="primary" style={{borderRadius:"10px",backgroundColor:"#3DAB85",border:"#3DAB85"}} icon={<ShoppingCartOutlined />} ></Button>
     </div>
  </Card>
             </div>
         </div>

</div>
    ))} 
    </div>
    </div><br></br>
    
    <h3 style={{marginLeft:"19px",position:"absolute",top:"1180px",fontFamily:"San Francisco",fontSize:"17px"}} className="heades">Daily Recipes</h3>
<i className="fas fa-angle-right fa-lg" style={{fontSize:"18px",color:"black",position:"absolute",right:"6px",top:"1180px"}} ></i>
 
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
            
     <div style={{position:"absolute",left:"10px",marginTop:"-6px",top:"120px",fontFamily:"San Francisco"}} id="timedaily">{item.time}min-Lunch</div>
           
     <h1 style={{position:"absolute",left:"10px",marginTop:"10px",top:"133px",fontFamily:"San Francisco"}} id="dailytitle">{item.title}</h1><br></br>
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
    <br></br><br></br><br></br><br></br><br></br>






    
  
   
   
  




</div>
    ):(
      <div>
         <div className="d-flex justify-content-center">
          <h1>please login!!!</h1><br></br>
          </div>
          <div className="d-flex justify-content-center">
          <Link to="/login" className="text-center">login</Link>
          </div>
          </div>
  )}   

              </div>
             
  
 </div>
     
            
        
    )
};




