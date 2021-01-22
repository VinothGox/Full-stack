import React from 'react'

import { Link,useHistory } from 'react-router-dom';
import './App.css';

const Bottombar = () => {


    const history=useHistory();

    const serached=()=>{
        history.push("/search")
    }

    return (
        <div className="mycontainer">
            <div className="container">
                <div className="row ">
                   <nav className="tab-content navbar">
        
                        <div className="tab">
                            <Link to='/' style={{ textDecoration: 'none'}}>
                               <i className="fas fa-home" ></i>
                               <p className="homes" style={{fontFamily:"San Francisco"}}>Home</p>
                            </Link>
                        </div>
                        <div className="tab">
                            <Link to='/dailyCook' style={{ textDecoration: 'none'}}>
                               <i className="fas fa-pizza-slice" ></i>
                               <p className="homeed" style={{fontFamily:"San Francisco"}}>cook</p>
                            </Link>
                        </div>
                        <div className="tab">
                            <Link to='/search'>
                            <button className="btn btn-searchs" onClick={serached} style={{fontSize:"15px",display:"block",height:"38px",width:"45px",borderRadius:"100%",backgroundColor:"#3DAB85"}}><i className="fas fa-search" style={{ textDecoration: 'none',justifyContent:"center",color:"white",fontSize:"15px"}}></i></button>
                              <p style={{color:"white"}}>dd</p>
                            </Link>
                        </div>
                        <div className="tab">
                            <Link to='/cart'>
                            <i className="fas fa-heart" style={{ textDecoration: 'none'}}></i>
                            <p className="homeed" style={{fontFamily:"San Francisco"}}>favourite</p>
                            </Link>
                        </div>
                        <div className="tab">
                            <Link to='/addcard'>
                            <i className="fas fa-shopping-bag" style={{ textDecoration: 'none'}}></i>
                            <p className="homeed" style={{fontFamily:"San Francisco"}}>card</p>
                            </Link>
                        </div>
                      
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Bottombar;
