import React, { useState } from "react";
import cart from "../../assetes/bag-png-13.png";
import user from '../../assetes/kisspng-clip-art-computer-icons-openclipart-user-vector-gr-my-svg-png-icon-free-download-14-352-onlinewe-5c7704f7cff2b1.3948772115513039278518-removebg-preview.png'
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  const[count,setCount]=useState(0)
  if(count<0){
    setCount(count===null)
  }
  
  return (
    
      <div className="navbar">
        <div className="menu">
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/*links inside the navbar*/}
        <div className="links">
          <ul>
            <li>
             
              <a href="">New Arrivals</a>
            </li>
            <div className="dropdown">
              <li>
                <a href="">Categories </a>
              </li>

            </div>
            <li>
              <a href="">About</a>
            </li>
          </ul>
        </div>

        <Link to={'/'}>
        <h1>SHOPING</h1></Link>
        

        
        <div className="btns">
          <div>
            <div className="cart_count">{count}</div>
            <img src={cart} alt="" />
          </div>
          <img src={user} alt="" />
        </div>
      </div>
    
  );
}
