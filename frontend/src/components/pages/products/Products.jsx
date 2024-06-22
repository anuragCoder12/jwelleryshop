import React, { useEffect, useState } from 'react'
import './Products.css'

import axios from 'axios'
import { Link } from 'react-router-dom'



export default function Products() {
  
 //fetchin data from backend
 const[productData,setProductData]=useState(null)
 const[filter,setFilter]=useState('All')
 useEffect(()=>{
   axios.get("http://localhost:4000/api/data/")
   .then(res=>{
     setProductData(res.data)
   }).catch(err=>console.log(err))
 },[])
 console.log(productData)
 //filtering data
const filteredData=filter==='All'?productData:
productData.filter(productData=>productData.Products===filter)
 
    
  return (
    <div>
    <div className='products'>
    <div className="title">
      <h4>PRODUCTS</h4>
      <h2>Our Products</h2>
    </div>
  <div className="navbar">
    <ul value={filter} onChange={(e)=>setFilter(e.target.value)
  
    }>
      <li>All</li>
      <li>Clothinig</li>
      <li>shoes</li>
      <li>Jewellery</li>
      <li>Watches</li>
    </ul>
  </div>
     
           
          <div className="container">
           
        {filteredData &&
          filteredData.map((data,index)=>(
            <Link to={`/${data._id}`}>
            <div className="cards" >
             
              <div className="product-image">
            i

          </div>
          <div className="product-details">
          <h3>{data.title}</h3>
          <p>{data.price}</p>
          </div>
          </div>
              </Link>
         
           
            
    

          ))
        }
              </div>
              <div>
              
      </div>
      <div className="btn">
        <button>See More</button>
        </div>
      
      </div>
      </div>

  )
}
