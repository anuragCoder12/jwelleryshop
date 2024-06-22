import React from "react";
import payment from "../../../assetes/green-secure-payment-icon-with-shield-flat-trend-vector-48357971-removebg-preview.png";
import delivery from "../../../assetes/2203145.png";
import refund from "../../../assetes/4983887-middle-removebg-preview.png";
import suppourt from "../../../assetes/220-2203215_premium-24-7-customer-support-customer-service-icon-removebg-preview.png";
import Caousel from "../carousel/Caousel";
import Castegory from "../category/Castegory";
import hero_image from "../../../assetes/lovepik-beautiful-womens-bags-shopping-png-image_400793233_wh1200-removebg-preview.png";

import "./Hero.css";
import Launch from "../launch/Launch";
import Discount from "../discount/Discount";
import Testimonial from "../testimonial/Testimonial";
import Products from "../products/Products";






export default function Hero() {

  
  const cardDetails = [
    {
      image: payment,
      title: "Secure Payment",
      content: "Start accepting payments with safe payment gateway.",
    },
    {
      image: delivery,
      title: "Fast Delivery",
      content: "Fast delivery globally. Seamless experience.",
    },
    {
      image: refund,
      title: "Return & Refund",
      content: "Damaged products return & fast refunds",
    },
    {
      image: suppourt,
      title: "Quality Support",
      content: "Fast and efficient customer suppourt",
    },
  ];

  return (
    <div className="hero">
      <div className="containe">
        <div className="banner">
          <div className="contents">
            <h1>Grab The Hottest Trends</h1>
            <p>
              Tastefully trendy styles for the independent individualist who's
              all about keeping it current and confident
            </p>
            <button>Expolre Now</button>
          </div>

          <img src={hero_image} alt="" />
        </div>
      </div>
      
      <div className="card_details">
        {cardDetails.map((data, index) => (
          <div className="cards" key={index}>
            <div className="details">
              <img src={data.image} alt="" />
              <div className="texts">
                <h3>{data.title}</h3>
                <p>{data.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Caousel/>
      <Castegory/>
      <Products/>
      <Launch/>
      <Testimonial/>
      <Discount/>
    </div>
  );
}
