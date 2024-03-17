import React, { useState, useEffect } from 'react'
import Button from './Button'


const BASE_URL = "http://localhost:9000";

const Card = ({searchData}) => {

  const [foodData, setFoodData] = useState(null);


  function logData()
  {
    console.log(searchData);
  }
  logData();

  useEffect(() => {
    const fetchFoodData = async () => {
      try {
        const response = await fetch(BASE_URL);
        const data = await response.json();
        setFoodData(data);
      } catch (error) {
        console.error('Error fetching food data:', error);
      }
    };

    fetchFoodData();
  }, []);

  return (
    <>
      {foodData && foodData.map((item) => (
        <div key={item.name}>
          <div><img src={BASE_URL+item.image} /></div>
          <div>
            <h1>{item.name}</h1>
            <p>{item.text}</p>
            <Button btnName={item.price.toFixed(2)} />
          </div>
        </div>
      )
      )}
    </>
  )
}

export default Card;