import React, { useState } from 'react';

const Cards = ({ titol, subtitol, price, onToggle }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
    onToggle(titol, !isChecked, price);
  };

  return (
    <div className="card">
      <h2 className='titol'>{titol}</h2>
      <h3 className='subtitol'>{subtitol}</h3>
      <h4 className='price'>{price}€</h4>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleToggle}
      />
    </div>
  );
};

export default Cards;