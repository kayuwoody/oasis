
import React from 'react';

const ProductCard = ({ product, onAdd }) => (
  <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
    <h3>{product.name}</h3>
    <p>Price: RM{product.price}</p>
    <button onClick={onAdd}>Add to Cart</button>
  </div>
);

export default ProductCard;
