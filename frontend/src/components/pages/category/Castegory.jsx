import React from 'react'
import watch from '../../../assetes/huawei-watch-buds-black@2x.png'
import men from '../../../assetes/Men-Fashion-PNG-Picture.png'
import women from '../../../assetes/lovepik-fashion-womens-summer-shopping-image-png-image_400391986_wh1200-removebg-preview.png'
import './Category.css'
export default function Castegory() {
  return (
    <div className='category'>
      <div className='title'>
        <h4>CATEGORY</h4>
        <h2>Shop by Category</h2>
      </div>
      <div className="container">
       <div className="box-1">
         <div className='content'>
        <h5>Accesories</h5>
        <p>Explore our wide range of accesories</p>
        <a href="">Explore ➝</a>
        </div>
        <div className="picture">
          <img src={men} alt=""   />
          
        </div></div>

       <div className="box-2">
        <div className='content'>
        <h5>Accesories</h5>
        <p>Explore our wide range of accesories</p>
        <a href="">Explore ➝</a>
        </div>
        <div className="picture">
          <img src={watch} alt=""  />
          
        </div>
       </div>
       <div className="box-3">
       <div className='content'>
        <h5>Accesories</h5>
        <p>Explore our wide range of accesories</p>
        <a href="">Explore ➝</a>
        </div>
        <div className="picture">
          <img src={women} alt=""  />
          
        </div>
       </div>
       
      </div>
    </div>
  )
}
