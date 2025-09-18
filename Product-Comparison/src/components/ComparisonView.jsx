import React from 'react';
import './ComparisonView.css';

const ComparisonView = ({ products, onRemove, onClear }) => {
  // Helper: Highlight different values
  const getHighlightClass = (key) => {
    const values = products.map((p) => p.features[key]);
    const allSame = values.every((v) => v === values[0]);
    return allSame ? '' : 'highlight';
  };

  return (
    <div className="comparison-container">
      <div className="comparison-header">
        <h2>Compare Products</h2>
        <button onClick={onClear} className="clear-btn">Clear All</button>
      </div>
      <div className="comparison-grid">
        {products.map((product) => (
          <div className="comparison-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="brand">{product.brand}</p>
            <p className="price">{product.price}</p>
            <ul>
              <li className={getHighlightClass('battery')}>
                🔋 Battery: {product.features.battery}
              </li>
              <li className={getHighlightClass('screen')}>
                📱 Screen: {product.features.screen}
              </li>
              <li className={getHighlightClass('storage')}>
                💾 Storage: {product.features.storage}
              </li>
            </ul>
            <button onClick={() => onRemove(product.id)} className="remove-btn">
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComparisonView;
