
import React, { useEffect, useState } from 'react';
import { fetchProducts, submitOrder } from '../utils/api';
import ProductCard from '../components/ProductCard';

const Pos = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  const addToCart = (product) => {
    setCart([...cart, { ...product, quantity: 1 }]);
  };

  const checkout = () => {
    submitOrder(cart);
  };

  return (
    <div>
      <h1>POS System</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} onAdd={() => addToCart(product)} />
        ))}
      </div>
      <button onClick={checkout}>Checkout</button>
    </div>
  );
};

export default Pos;
