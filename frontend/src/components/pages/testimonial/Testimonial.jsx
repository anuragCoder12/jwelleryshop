import React from "react";
import person_1 from "./assetes_testimonial/photo-1494790108377-be9c29b29330.avif";
import person_2 from "./assetes_testimonial/istockphoto-1264565531-612x612.jpg";
import person_3 from "./assetes_testimonial/istockphoto-1287669172-612x612.jpg";
import person_4 from "./assetes_testimonial/istockphoto-1406447835-612x612.jpg";
import person_5 from "./assetes_testimonial/images.jpeg";
import person_6 from "./assetes_testimonial/testimonialjpg.webp";
import Slider from "react-slick";
import "./Testimonial.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

//arrow for slider from react-slick
function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "grey" }}
      onClick={onClick}
    />
  );
}

export default function Testimonial() {
  const persons = [
    {
      img: person_1,
      name: "Lucia",
      thought:
        "Works like charm. I love the ease of the app and highly recomend purchasing theire monthly program to create a perfect selling oppurtunity for yourself",
    },
    {
      img: person_2,
      name: "Donald",
      thought:
        "Works like charm. I love the ease of the app and highly recomend purchasing theire monthly program to create a perfect selling oppurtunity for yourself",
    },
    {
      img: person_3,
      name: "Charles",
      thought:
        "Works like charm. I love the ease of the app and highly recomend purchasing theire monthly program to create a perfect selling oppurtunity for yourself",
    },
    {
      img: person_4,
      name: "Rock",
      thought:
        "Works like charm. I love the ease of the app and highly recomend purchasing theire monthly program to create a perfect selling oppurtunity for yourself",
    },
    {
      img: person_5,
      name: "Claire",
      thought:
        "Works like charm. I love the ease of the app and highly recomend purchasing theire monthly program to create a perfect selling oppurtunity for yourself",
    },
    {
      img: person_6,
      name: "Jack Marcos",
      thought:
        "Works like charm. I love the ease of the app and highly recomend purchasing theire monthly program to create a perfect selling oppurtunity for yourself",
    },
    
  ];
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="testimonial">
      <div className="text">
        <h4>TESTIMONIAL</h4>
        <h2>What Our Customer's Say</h2>
      </div>
      <div className="component">
     
      <Slider {...settings}>
        {persons.map((data, index) => (
          <div className="cards" key={index}>
            <div className="image">
              <img src={data.img} alt="" />
            </div>
            <div className="title">
              <h5>{data.name}</h5>
              <p>{data.thought}</p>
            </div>
          </div>
        ))}
        </Slider>
        
      </div>
    </div>
  );
}
