import { collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../Firebase";


const Product = () => {
  const [productData, setProductData] = useState([]);
  const [editData, setEditData] = useState(null);

  const getDataFromFb = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "product")); // Use correct collection name
      const newArray = [];
      querySnapshot.forEach((doc) => {
        newArray.push({ ...doc.data(), id: doc.id });
      });
      setProductData(newArray); // Set state after collecting all data
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getDataFromFb();
  }, []);

  const handleDelete = async (id) => {
    // alert(id)
    try {
      const fbDelete = await deleteDoc(doc(db, "product", id)); 
      console.log(fbDelete);

      getDataFromFb();
    } catch (error) {
      console.log(error);
    }
  };

  //edit

  const handleEditClick = (product) => {
    setEditData(product); 
  };

  const handleInputChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    try {
      const docRef = doc(db, "product", editData.id);
      await updateDoc(docRef, {
        title: editData.title,
        description: editData.description,
        category: editData.category,
        price: Number(editData.price),
        image: editData.image,
      });
      setEditData(null);
      getDataFromFb();
    } catch (error) {
      console.log("Update error:", error);
    }
  };

  return (
    <div style={{ display: "flex" }}>
      {/* edit */}


      {editData && (
  <div style={{ marginTop: "30px", textAlign: "center" ,marginRight:"50px",marginLeft:"50px"}}>
    <h2>Edit Product</h2>
    <input
      name="title"
      value={editData.title}
      onChange={handleInputChange}
      placeholder="Title"
      style={{ padding: "10px", margin: "5px" }}
    />  <br /><br />
    <input
      name="description"
      value={editData.description}
      onChange={handleInputChange}
      placeholder="Description"
      style={{ padding: "10px", margin: "5px" }}
    />  <br /><br />
    <input
      name="category"
      value={editData.category}
      onChange={handleInputChange}
      placeholder="Category"
      style={{ padding: "10px", margin: "5px" }}
    /> <br /><br />
    <input
      name="price"
      value={editData.price}
      onChange={handleInputChange}
      placeholder="Price"
      type="number"
      style={{ padding: "10px", margin: "5px" }}
    /> <br /><br />
    <input
      name="image"
      value={editData.image}
      onChange={handleInputChange}
      placeholder="Image URL"
      style={{ padding: "10px", margin: "5px" }}
    />
    <br />
    <button onClick={handleUpdate} style={{ padding: "10px 20px", marginTop: "10px" }}>
      Update
    </button>
    <button onClick={() => setEditData(null)} style={{ padding: "10px 20px", marginLeft: "10px" }}>
      Cancel
    </button>
  </div>
)}



    {/* product */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
          textAlign: "center",
          width: "90%",
          margin: "auto",
          marginTop: "20px",
        }}
      >
        {productData.map((el) => (
          <div
            key={el.id}
            style={{
              border: "1px solid black",
              padding: "30px 20px",
              borderRadius: "20px",
            }}
          >
            <h3>{el.title}</h3>
            <img
              src={el.image}
              alt={el.title}
              style={{ height: "200px", width: "200px" }}
            />
            <h5>{el.description}</h5>
            <h3>{el.category}</h3>
            <h3>${el.price}</h3>
            <div>
              <button
                onClick={() => handleDelete(el.id)}
                style={{ padding: "5px 13px" }}
              >
                Delete
              </button>
              <button
                style={{ marginLeft: "20px", padding: "5px 20px" }}
                onClick={() => handleEditClick(el)} // <- This is the correct way
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
