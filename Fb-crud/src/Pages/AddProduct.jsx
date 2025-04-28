


import { collection, addDoc } from 'firebase/firestore';
import React, { useState } from 'react';
import { db } from '../Firebase';

const initialState = {
  title: "",
  image: "",
  description: "",
  category: "",
  price: ""
};

const AddProduct = () => {
  const [data, setData] = useState(initialState);
  const { title, image, description, category, price } = data;

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const fbData = await addDoc(collection(db, "product"), data);
      console.log("Added to Firestore with ID:", fbData.id);

      // Reset form
      setData(initialState);
    } catch (error) {
      console.log("Submission Error:", error);
    }
  };

  return (
    <div style={{width:"20%",margin:"auto",textAlign:"center",border:"1px solid black",padding:"40px 20px",borderRadius:"20px",marginTop:"50px"}}>
      <form onSubmit={handleSubmit}>
        <h1>Add Product here</h1>
        <input type="text" value={title} name="title" onChange={handleChange} placeholder="Enter title here" /> <br /><br />
        <input type="text" value={image} name="image" onChange={handleChange} placeholder="Put image URL here" /> <br /><br />
        <input type="text" value={description} name="description" onChange={handleChange} placeholder="Enter description here" /> <br /><br />
        <select name="category" value={category} onChange={handleChange}>
          <option value="">Select Category</option>
          <option value="men's clothing">Men</option>
          <option value="women's clothing">Women</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelry</option>
        </select> <br /><br />
        <input type="number" name="price" value={price} onChange={handleChange} placeholder="Enter price here" /> <br /><br />
        <input type="submit" />
      </form>

    
  
    </div>


    
  );
};

export default AddProduct;
