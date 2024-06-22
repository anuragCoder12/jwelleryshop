import React from 'react'
import bag from '../../../assetes/5-2-women-bag-transparent.png'
import shirt from '../../../assetes/louis-vuitton-printed-long-sleeved-shirt--HPS02WZS4MU1_PM2_Front view.webp'
import watch from '../../../assetes/Watche1.png'
import shoes from '../../../assetes/pngimg.com - running_shoes_PNG5783.png'
import jwellwery from '../../../assetes/images-removebg-preview (1).png'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './Carousel.css'
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


export default function Caousel() {
const data=[
  {
    id:1,
    image:shirt,
    title:"Shirts",
    desc:"Starting at ",
    price:"₹499"
  },
  {
    id:2,
    image:watch,
    title:"Watches",
    desc:"Starting at ",
    price:"₹299"
  },
  {
    id:3,
    image:bag,
    title:"Bags",
    desc:"Starting at ",
    price:"₹259"
  },
  {
    id:4,
    image:shoes,
    title:"Shoes",
    desc:"Starting at ",
    price:"₹399"
  },
  {
    id:5,
    image:jwellwery,
    title:"Jwellery",
    desc:"Starting at ",
    price:"₹99"
  },
]

  // creating slider using react-slick

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


  //fetching data from carousel.json

  /*const[array,setArray]=useState([])
  useEffect(()=>{
   const fetchData=async ()=>{
    try{
      const response=await fetch('http://localhost:3001/links')
      const data=await response.json()
      setArray(data.items || [])
    }
    catch(error){
      console.error("error fetching data",error)
    }
   }
   fetchData()
  },[])*/
  


  return (
    
    <div className='carousel'>
      <div className='content'>
        <h4>Trendings</h4>
        <h2>Feautred products</h2>
        </div>
     
    <div className="slide">
    <Slider {...settings}>
      {
        data.map((data,index)=>(
          <div className="cards" key={index}>
            <div className="image">
              <img src={data.image} alt="" />
              </div>
              <div className="text">
          <h4>{data.title}</h4>
          <p>{data.desc}</p>
          <p>{data.price}</p>
          <button>Check Now</button>
        </div>

        </div>
        ))
      }
            
      </Slider>
      
      

</div>
</div>


   
   
  )
}
