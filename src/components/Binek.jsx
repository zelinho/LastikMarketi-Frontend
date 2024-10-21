import React, { useEffect, useState } from 'react';
import Card from './Card';
import axios from "axios";

function Binek() {
  const [tire, setTire] = useState([])
  useEffect(() => {
    const getTire = async () => {
      try {
        const res = await axios.get("https://lastikmarketi-backend.vercel.app/tire");
        const filteredData = res.data.filter(item => item.category === "binek");
        console.log(filteredData);
        setTire(filteredData);
      }
      catch (error) {
        console.log(error)
      }
    };
    getTire();
  },[])
  return (
    <>

      <div className='grid grid-cols-4 justify-items-center items-center h-screen mt-10'>
      {tire.map((item) => (
              <Card item={item} key={item.id} />
            ))}
      </div>

    </>
  )
}

export default Binek
