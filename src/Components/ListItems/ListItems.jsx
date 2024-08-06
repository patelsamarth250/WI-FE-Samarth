// src/page1/ListItems.jsx
import React, { useEffect, useState } from 'react';
import Explore from '../Explore/Explore';
import './ListItems.css';

const ListItems = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Replace with your API URL
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
      <div className="items-list">
        {items.map((item, index) => (
          <div key={item.id} className="item-card">
            <img src={item.image_url} alt={item.item} className="item-image" />
            <div className="item-details">
              <div className="item-name">{item.item}</div>
              <div className="item-price">MRP: ₹{item.price}.0</div>
              {item.shipping_method && (
                <div className="item-shipping">{item.shipping_method}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListItems;
