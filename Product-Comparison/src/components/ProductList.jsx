import React, { useState } from "react";
import { products } from "../data/products";
import ProductCard from "./ProductCard";

function ProductList() {
  const [selectedProducts, setSelectedProducts] = useState([]);

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

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onCompare={handleCompare} />
      ))}

      {selectedProducts.length >= 2 && (
        <div className="comparison-area">
          <h2>Comparison</h2>
          <table>
            <thead>
              <tr>
                <th>Attribute</th>
                {selectedProducts.map((product) => (
                  <th key={product.id}>{product.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {["battery", "screen", "storage"].map((feature) => (
                <tr key={feature}>
                  <td>{feature}</td>
                  {selectedProducts.map((product) => (
                    <td key={product.id}>
                      {product.features[feature]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={() => setSelectedProducts([])}>Clear Comparison</button>
          {selectedProducts.map((product) => (
            <button
              key={product.id}
              onClick={() => handleRemoveProduct(product.id)}
            >
              Remove {product.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductList;
