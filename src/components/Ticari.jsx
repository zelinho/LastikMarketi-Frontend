import React, { useEffect, useState } from 'react'
import Card from './Card';
import axios from "axios";


function Ticari() {
  const [tire, setTire] = useState([])
  useEffect(() => {
    const getTire = async () => {
      try {
        const res = await axios.get("http://localhost:4001/tire");
        const filteredData = res.data.filter(item => item.category === "Ticari");
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

      <div className='grid grid-cols-3 justify-items-center items-center h-screen mt-10'>
        {tire.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>

    </>
  )
}

export default Ticari
