import React, { useState } from "react";
import { products } from "../data/products";
import ProductCard from "./ProductCard";
import ComparisonView from './ComparisonView';
import './ProductList.css';

function ProductList() {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleCompare = (product) => {
    if (selectedProducts.length < 3 && !selectedProducts.includes(product)) {
      setSelectedProducts((prev) => [...prev, product]);
    }
  };

  const handleRemoveProduct = (productId) => {
    setSelectedProducts((prev) =>
      prev.filter((product) => product.id !== productId)
    );
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.brand.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {selectedProducts.length >= 2 && (
        <ComparisonView
          products={selectedProducts}
          onRemove={handleRemoveProduct}
          onClear={() => setSelectedProducts([])}
        />
      )}

      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <input
         type="text"
         placeholder="Search by name..."
         value={searchTerm}
         onChange={(e) => setSearchTerm(e.target.value)}
         style={{ padding: '8px', width: '100%', maxWidth: '400px' }}
        />
     </div>


      <div className="product-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onCompare={handleCompare}
            />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </>
  );
}

export default ProductList;
