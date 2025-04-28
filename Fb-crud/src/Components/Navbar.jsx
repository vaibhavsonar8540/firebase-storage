import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{backgroundColor:"whitesmoke",width:"100%",display:"flex",justifyContent:"space-around",padding:"20px"}}>
        <li style={{listStyle:"none"}}><Link to={"/"} style={{textDecoration:"none",color:"black"}}>Home</Link></li>
        <li style={{listStyle:"none"}}><Link to={"/product"} style={{textDecoration:"none",color:"black"}}>Product</Link></li>
        <li style={{listStyle:"none"}}><Link to={"/addproduct"} style={{textDecoration:"none",color:"black"}}>Add Product</Link></li>
    </div>
  )
}

export default Navbar