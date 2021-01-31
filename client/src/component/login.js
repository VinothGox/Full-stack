import React,{useState,useContext} from "react";
import {GoogleLogin} from "react-google-login";
import {GoogleLogout} from "react-google-login";
import {useHistory} from "react-router-dom";
import "./login.css";
import {productcontext} from "../ContextApi/contextapi";
import Axios from "axios";
import {
    Form,
    Input,
    Button,
  } from 'antd';
 
export const Login=()=>{

    const history=useHistory();

    const main=useContext(productcontext);

    const [login,setLogin]=main.loginuser;
    const [username,setUsername]=main.name;
    const [image,setImage]=main.image;

    const [componentSize, setComponentSize] = useState('default');

    const responsegoogle=async(response)=>{
        console.log(response);
        const profile=response.profileObj;
        setLogin(true);
        setUsername(profile.name);
        setImage(profile.imageUrl);
        const userInformation={
            username:profile.name,
            email:profile.email,
            imageurl:profile.imageUrl,
        }
        const useremail={
          email:profile.email
        }
        const userInfo=await Axios.post("http://localhost:8004/add/saveuser",userInformation);
        console.log(userInfo);
        const userInfos=await Axios.post("http://localhost:8004/usercard",useremail);
         console.log(userInfos);
        history.push("/");


    }
    const responsegoogles=(response)=>{
        console.log(response);
    }
    const logout=(response)=>{
      
      history.push("/");
      setLogin(false);
    }

    return(

    
        <div><br/><br/>
             <div className="d-flex justify-content-center">
       <div className="boxshadow">
       <h3 className="headofproduct">Login</h3>
       <Form
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        layout="horizontal"
        initialValues={{ size: componentSize }}
       
        size={componentSize}
        onFinish={onsubmit}
      >
       
       

        <Form.Item name="description" 
         rules={[
          {
            
            message: 'Please input your description!',
          },
        ]}
        style={{width:"250px"}}
        >
          <Input placeholder="Email" />
        </Form.Item>

        <Form.Item name="price" 
         rules={[
          {
            
            message: 'Please input your price!',
          },
        ]}
        style={{width:"250px"}}
        >
          <Input placeholder="password" />
        </Form.Item>
       
      <div className="d-flex justify-content-center">
      <Form.Item >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
      </div>
      <div className="d-flex justify-content-center">
      <h6>or</h6><br></br>
      </div>
      <div className="d-flex justify-content-center">
          <GoogleLogin
          clientId="652934983320-3h56qsb4vrt273pumam71trk0bmtvdin.apps.googleusercontent.com"
          buttonText="login with google"
          onSuccess={responsegoogle}
          onFailure={responsegoogles}
          
          />
          </div>
        </Form><br/><br/><br/>
       </div>
       </div>
       </div>
       
    
    )
}
