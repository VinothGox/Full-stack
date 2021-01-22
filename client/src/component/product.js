import React, { useState,useEffect } from "react";
import {Link,useHistory} from "react-router-dom";
import axios from "axios";
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';
import {
  Form,
  Input,
  Button,
  Select,
  Upload
} from 'antd';




export const Product=()=>{
  
   const {Option} =Select;
    const [componentSize, setComponentSize] = useState('default');
  
      const history=useHistory();
      const [categoryItems, SetcategoryItems] = useState([]);

      useEffect(() => {
        axios.get('http://localhost:8002/allcategory').then(res => {
            SetcategoryItems(res.data);
        })
      }, []);
    

const [product,setProduct]=useState({
    title:'',
    description:'',
    price:'',
    weight:'',
    rating:'',
    good:'',
    bad:'',
    category_id:''
})
const [imgdata,setImgdata]=useState();


const handlePhoto = (e) => {
    const datas=e.target.files[0];
    setImgdata(datas);
    console.log(datas);
   // setProduct({...product, photo: e.target.files[0]});
}

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
       
   console.log(productImage.originFileObj);
   console.log(data1);
    console.log(JSON.stringify(data1));

   const ProductData=new FormData();
   
   
   ProductData.append('title', data1.title);
   ProductData.append('description', data1.description);
   ProductData.append('price', data1.price);
   ProductData.append('images',productImage);
   ProductData.append('weight', data1.weight);
   ProductData.append('rating', data1.rating);
   ProductData.append('good', data1.good);
   ProductData.append('bad', data1.bad);
   ProductData.append('category_id', data1.category_id);
   
  console.log(JSON.stringify(ProductData));
   
 

     
        /*try{

            
            const db = new FormData();
            db.append('title', product.title);
            db.append('description', product.description);
            db.append('price', product.price);
            db.append('images', imgdata);
            db.append('weight', product.weight);
            db.append('rating', product.rating);
            db.append('good', product.good);
            db.append('bad', product.bad);
            db.append('category_id', product.category_id);
            
    
            console.log(db);
    const ans=await axios.post("http://localhost:8002/add",db);
       
    console.log(ans);
   // history.push("/");



    

    
          
      
    }
    catch(err){
        console.log(err);
    }*/
}

    return(
        <div>
             <div><br></br><br></br>
         


<Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        initialValues={{ size: componentSize }}
       style={{paddingLeft:"20px",paddingRight:"20px"}}
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
        >
          <Input placeholder="title" />
        </Form.Item>

        <Form.Item name="description" 
         rules={[
          {
            required: true,
            message: 'Please input your description!',
          },
        ]}
        >
          <Input placeholder="description" />
        </Form.Item>

        <Form.Item name="price" 
         rules={[
          {
            required: true,
            message: 'Please input your price!',
          },
        ]}
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
      >
        <Select
          placeholder="Select a option and change input text above"
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
        >
          <Input placeholder="rating" />
        </Form.Item>

        <Form.Item name="good" 
         rules={[
          {
            required: true,
            message: 'Please input your good!',
          },
        ]}
        >
          <Input  placeholder="good" />
        </Form.Item>

        <Form.Item name="bad" 
         rules={[
          {
            required: true,
            message: 'Please input your bad!',
          },
        ]}
        >
          <Input placeholder="bad" />
        </Form.Item>
        <Form.Item
        name="images"
      >
        <Upload>
          <Button icon={<UploadOutlined />}>Click to upload</Button>
        </Upload>
      </Form.Item><br></br>
      <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
        </Form>
        </div>
        </div>

    )
}