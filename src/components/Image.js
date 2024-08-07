// Image.js
import React from 'react';
import product from './product';

const Image = () => (
  <img src={product.image} alt={product.name} className="card-image" />
);

export default Image;
