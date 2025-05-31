
export const fetchProducts = async () => {
  const res = await fetch('/api/products');
  return res.json();
};

export const submitOrder = async (cart) => {
  const res = await fetch('/api/orders', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ cart }),
  });
  return res.json();
};
