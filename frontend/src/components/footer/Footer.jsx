import React from 'react'
import facebook from '../../assetes/images-removebg-preview.png'
import instagram from '../../assetes/instagram-logo-black-transparent.png'
import twiter from '../../assetes/126720.png'

import './Footer.css'
export default function Footer() {
  const footer_links=[
    {
      tiitle:"Customer Service",
      l1:"Contact Us",
      l2:"About Us",
      l3:"Return & Exchanges"
    },
    {
      tiitle:"Customer Service",
      l1:"My account",
      l2:"Return Policies",
      l3:"Terms & Conditions"
    }
  ]

  return (
    <footer className='footer'>
      <div className="para">
        <h2>SHOPING</h2>
        <p>hudfiuivn ghiuninbui uviuhviuhni fiugbviubn 
          hiubignin hgfbugbuighokob vjlihvninvjb ninbvdb
        </p>
        <div className="social_media">
         <img src={facebook} alt="" />
         <img src={instagram} alt="" />
         <img src={twiter} alt="" />
        </div>
      </div>
      <div className="data">
      {
        footer_links.map((data, index)=>(
          <div className="lists" key={index}>
           <h3>{data.tiitle}</h3>
           <ul>
            <li>{data.l1}</li>
            <li>{data.l2}</li>
            <li>{data.l3}</li>
           </ul>
          </div>

        ))
      }
      </div>
      
      
    </footer>
  )
}
