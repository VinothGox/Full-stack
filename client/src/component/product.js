import React, { useState,useEffect } from "react";
import {Link,useHistory} from "react-router-dom";
import axios from "axios";
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';
import {
  Form,
  Input,
  Button,
  Select,
  Upload,
  message
} from 'antd';
import "./product.css";



export const Product=()=>{
  
  const {Dragger}=Upload;
   const {Option} =Select;
    const [componentSize, setComponentSize] = useState('default');
  
      const history=useHistory();
      const [categoryItems, SetcategoryItems] = useState([]);

      useEffect(() => {
        axios.get('http://localhost:8004/allcategory').then(res => {
            SetcategoryItems(res.data);
        })
      }, []);
    
      const onsubmit = async (value) => {

        const productImage=value.images.file;
        const data1={
          title:value.title,
          description:value.description,
          price:value.price,
          category_id:value.category_id,
          weight:value.weight,
          rating:value.rating,
          good:value.good,
          bad:value.bad,
        }
   const ProductData=new FormData();
   
   
   ProductData.append('title', data1.title);
   ProductData.append('description', data1.description);
   ProductData.append('price', data1.price);
   ProductData.append('images',productImage.originFileObj);
   ProductData.append('weight', data1.weight);
   ProductData.append('rating', data1.rating);
   ProductData.append('good', data1.good);
   ProductData.append('bad', data1.bad);
   ProductData.append('category_id', data1.category_id);

   const ans=await axios.post("http://localhost:8004/add",ProductData);
       
    //console.log(ans);
    message.success("Successfully Saved!!!")
    history.push("/product");
    }
  
    const mainPage=()=>{
      history.push("/");
    }

    return(
        <div>
             <div><br></br><br></br>
             <div style={{paddingLeft:"10px"}}>
  <button onClick={mainPage} style={{ fontSize:"12px",backgroundColor:"white",borderColor:"black",borderRadius:"9px",marginTop:"14px",position:"absolute",top:"10px"}} className="btn btn-pokos"><i className="fas fa-arrow-left fa-lg" style={{ fontSize:"15px"}} ></i></button>
  </div>
  <img className="rounfed" src="https://images.pexels.com/photos/4355346/pexels-photo-4355346.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""></img>

         
<div className="thebox">

<h3 className="headofproduct">Save Product</h3>
 
             
<Form
        labelCol={{ span: 2 }}
        wrapperCol={{ span: 2 }}
        layout="horizontal"
        initialValues={{ size: componentSize }}
       
        size={componentSize}
        onFinish={onsubmit}
      >
       
        <Form.Item name="title" 
         rules={[
          {
            required: true,
            message: 'Please input your title!',
          },
        ]}
        style={{width:"250px"}}
        >
          <Input placeholder="Title" />
        </Form.Item>

        <Form.Item name="description" 
         rules={[
          {
            required: true,
            message: 'Please input your description!',
          },
        ]}
        style={{width:"250px"}}
        >
          <Input placeholder="Description" />
        </Form.Item>

        <Form.Item name="price" 
         rules={[
          {
            required: true,
            message: 'Please input your price!',
          },
        ]}
        style={{width:"250px"}}
        >
          <Input placeholder="price" />
        </Form.Item>
        <Form.Item
        name="category_id"
        rules={[
          {
            required: true,
            message: 'Please select your category!',
          },
        ]}
        style={{width:"250px"}}
      >
        <Select
          placeholder="Select your Category"
        >
         {
                  categoryItems.map((categoryItem, index) => (
                    <Option key={index} value={categoryItem.category_id} >{categoryItem.name}</Option>
                  ))
                }
        </Select>
      </Form.Item>

        <Form.Item name="weight" 
         rules={[
          {
            required: true,
            message: 'Please input your weight!',
          },
        ]}
        style={{width:"250px"}}
        >
          <Input placeholder="weight" />
        </Form.Item>

        <Form.Item name="rating" 
         rules={[
          {
            required: true,
            message: 'Please input your rating!',
          },
        ]}
        style={{width:"250px"}}
        >
          <Input placeholder="Rating" />
        </Form.Item>

        <Form.Item name="good" 
         rules={[
          {
            required: true,
            message: 'Please input your good!',
          },
        ]}
        style={{width:"250px"}}
        >
          <Input  placeholder="Good" />
        </Form.Item>

        <Form.Item name="bad" 
         rules={[
          {
            required: true,
            message: 'Please input your bad!',
          },
        ]}
        style={{width:"250px"}}
        >
          <Input placeholder="Bad" />
        </Form.Item>
        <div className="d-flex justify-content-center">
        <Form.Item
        name="images"
      >
        <Upload>
          <Button icon={<UploadOutlined />}>Click to upload Image</Button>
        </Upload>
       
      </Form.Item> </div>
      <div className="d-flex justify-content-center">
      <Form.Item >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
      </div>
        </Form>
        </div>
        </div>
        </div>
        

    )
}