import React, { useState,useEffect } from "react";
import {Link,useHistory} from "react-router-dom";
import axios from "axios";

export const Product=()=>{

    
   /*   const [title,setTitle]=useState();
      const [description,setDescription]=useState();
      const [price,setPrice]=useState();
      const [images,setImages]=useState();
      const [weight,setWeight]=useState();
      const [rating,setRating]=useState();
      const [good,setGood]=useState();
      const [bad,setBad]=useState();*/
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
const handleChange = (e) => {
    setProduct({...product, [e.target.name]: e.target.value});
}

const handlePhoto = (e) => {
    const datas=e.target.files[0];
    setImgdata(datas);
    console.log(datas);
   // setProduct({...product, photo: e.target.files[0]});
}

      const onsubmit = async (e) => {
        e.preventDefault();
     
        try{

            
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
            
    
            console.log(product);
    const ans=await axios.post("http://localhost:8002/add",db);
       
    console.log(ans);
    history.push("/");



    

    
          
      
    }
    catch(err){
        console.log(err);
    }
}

    return(
        <div>
             <div>
         <div className="container my-5 ">

<p className="text-center font-weight-normal display-4" style={{ color:"black"}}>Add Product</p>
<div className="d-flex justify-content-center">
<form style={{width:"50%"}} onSubmit={onsubmit}>
<input type="text" name="title" placeholder="title" onChange={handleChange} value={product.title} className="form-control my-3" required/>

<input type="text" name="description" placeholder="Description" value={product.description} onChange={handleChange} className="form-control my-3" required/>
<select onChange={handleChange} value={product.category_id} className="form-control my-3" name="category_id" required>
                <option value="-1">Select Category</option>
                {
                  categoryItems.map((categoryItem, index) => (
                    <option key={index} value={categoryItem.category_id} className="form-control m-2" >{categoryItem.name}</option>
                  ))
                }
              </select>

<input type="text" name="price" placeholder="price" onChange={handleChange} value={product.price} className="form-control my-3" required/>
<input type="file" name="image" placeholder="image" onChange={handlePhoto}  className="form-control my-3" required/>
<input type="text" name="weight" placeholder="Weight" onChange={handleChange} value={product.weight} className="form-control my-3" required/>
<input type="text" name="rating" placeholder="Rating" onChange={handleChange} value={product.rating} className="form-control my-3" required/>
<input type="text" name="good" placeholder="Advandage" onChange={handleChange} value={product.good} className="form-control my-3" required/>
<input type="text" name="bad" placeholder="Disadvandage" onChange={handleChange} value={product.bad} className="form-control my-3" required/>

<div className="d-flex justify-content-center">
 
<button className="btn btn-success px-5">submit</button>
</div>
<div className="d-flex justify-content-center">
<Link to="/camp" className="text-center">Back to Home</Link>
</div>
</form>
</div>
</div>
</div>
        </div>
    )
}