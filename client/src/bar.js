import React, { useState } from 'react'
// import Fab from '@material-ui/core/Fab';
// import HomeIcon from '@material-ui/icons/Home';
// import SearchIcon from '@material-ui/icons/Search';
// import LocalMallIcon from '@material-ui/icons/LocalMall';
// import PersonIcon from '@material-ui/icons/Person';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Link,useHistory } from 'react-router-dom';
import './App.css';
const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#ffffff",
        },
        secondary: {
            main: '#ffffff',
        },
    },
});
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
                               <p className="homes">Home</p>
                            </Link>
                        </div>
                        <div className="tab">
                            <Link to='/dailyCook' style={{ textDecoration: 'none'}}>
                               <i className="fas fa-pizza-slice" ></i>
                               <p className="homeed">cook</p>
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
                            <p className="homeed">favourite</p>
                            </Link>
                        </div>
                        <div className="tab">
                            <Link to='/addcard'>
                            <i className="fas fa-shopping-bag" style={{ textDecoration: 'none'}}></i>
                            <p className="homeed">card</p>
                            </Link>
                        </div>
                      
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Bottombar;
