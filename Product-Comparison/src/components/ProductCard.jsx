import React from 'react'

function ProductCard({product, onCompare}){

    return(
        <>
         <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.brand}</p>
      <p>{product.price}</p>
      <ul>
        <li>Battery: {product.features.battery}</li>
        <li>Screen: {product.features.screen}</li>
        <li>Storage: {product.features.storage}</li>
      </ul>
      <button onClick={() => onCompare(product)}>Add to Compare</button>
    </div>
        </>
    )

}
export default ProductCard;