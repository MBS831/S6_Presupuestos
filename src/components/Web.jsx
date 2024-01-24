import React from 'react';

const Web = ({ languagesCount, pagesCount, onLanguagesCountChange, onPagesCountChange }) => {
  const handleLanguagesCountIncrease = () => {
    onLanguagesCountChange(languagesCount + 1);
  };

  const handleLanguagesCountDecrease = () => {
    onLanguagesCountChange(Math.max(0, languagesCount - 1));
  };

  const handlePagesCountIncrease = () => {
    onPagesCountChange(pagesCount + 1);
  };

  const handlePagesCountDecrease = () => {
    onPagesCountChange(Math.max(0, pagesCount - 1));
  };
 
  return (
    <div>
      <p>Número de lenguajes</p>
      <button onClick={handleLanguagesCountIncrease}>+</button>
      <span>{languagesCount}</span>
      <button onClick={handleLanguagesCountDecrease}>-</button> 

      <p>Número de idiomas</p>
      <button onClick={handlePagesCountIncrease}>+</button>
      <span>{pagesCount}</span>
      <button onClick={handlePagesCountDecrease}>-</button>    
    </div>
  );
};

export default Web;