import React from 'react';
import './ProductCard.css'; // optional

const ProductCard = ({ product, onCompare, isDisabled}) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p className="brand">{product.brand}</p>
      <p className="price">{product.price}</p>
      <ul className="features">
        <li>Battery: {product.features.battery}</li>
        <li>Screen: {product.features.screen}</li>
        <li>Storage: {product.features.storage}</li>
      </ul>
      <button onClick={() => onCompare(product)} disabled={isDisabled}>Add to Compare</button>
    </div>
  );
};

export default ProductCard;
