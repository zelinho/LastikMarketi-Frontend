import React, { useEffect, useState } from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
import Card from './Card';

function Lastikler() {
  const [tire, setTire] = useState([])
  useEffect(() => {
    const getTire = async () => {
      try {
        const res = await axios.get("http://localhost:4001/tire");
        const filteredData = res.data.filter(item => item.id === 1);
        console.log(filteredData);
        setTire(filteredData);
      }
      catch (error) {
        console.log(error)
      }
    };
    getTire();
  }, [])

  var settings = {
    dots: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
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
    <>
      <div className='bg-gray-200'>
        <br />
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 mt-10 '>
          <div className='text-2xl font-bold flex  justify-center mb-5'>
            <h1>En Çok Satanlar</h1>
            <br /><br />
          </div>
          <div>
            <Slider {...settings}>
              {tire.map((item) => (
                <Card item={item} key={item.id} />
              ))}
            </Slider>
          </div>
          <br /><br />
        </div>
      </div>
    </>
  )
}

export default Lastikler
