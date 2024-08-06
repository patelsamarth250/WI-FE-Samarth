import React, { useEffect, useState } from 'react';
import Explore from '../Explore/Explore'
import './GridItems.css'

const GridItems = () => {

  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://run.mocky.io/v3/200998b7-f48d-4456-a639-0b5d2d275c12');
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Explore />
      <div className="items-grid">
        {items.map((item, index) => (
          <div key={index} className="item-card">
            <div className="item-name">{item.id}</div>
            <div className="item-price">₹{item.price}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default GridItems