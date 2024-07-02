import React, { useState, useEffect } from 'react';  
import './App.css';  
  
function App() {  
  const [products, setProducts] = useState([]);  
  
  useEffect(() => {  
  
    const sampleData = [  
      { "productName": "Laptop 1", "price": 2236, "rating": 4.7, "discount": 63, "availability": "yes" },  
      { "productName": "Laptop 2", "price": 1244, "rating": 4.5, "discount": 45, "availability": "out-of-stock" },  
      { "productName": "Laptop 3", "price": 9102, "rating": 4.44, "discount": 98, "availability": "out-of-stock" },  
      { "productName": "Laptop 4", "price": 2652, "rating": 4.12, "discount": 70, "availability": "yes" },  
      { "productName": "Laptop 5", "price": 1258, "rating": 3.8, "discount": 33, "availability": "yes" },  
      { "productName": "Laptop 6", "price": 8686, "rating": 3.22, "discount": 24, "availability": "out-of-stock" },  
      { "productName": "Laptop 7", "price": 9254, "rating": 3, "discount": 56, "availability": "yes" },  
      { "productName": "Laptop 8", "price": 1059, "rating": 2.77, "discount": 21, "availability": "yes" },  
      { "productName": "Laptop 9", "price": 7145, "rating": 2.74, "discount": 15, "availability": "yes" },  
      { "productName": "Laptop 10", "price": 4101, "rating": 2.67, "discount": 37, "availability": "yes" }  
    ];  
    setTimeout(() => {  
      setProducts(sampleData);  
    }, 1000);  
  }, []);  
  return (  
    <div className="App">  
      <header className="App-header">  
        <h1>Laptops</h1>  
      </header>  
      <main>  
        <div className="product-list">  
          {products.map((product, index) => (  
            <div key={index} className="product-card"> 
            <div className="product-box"> 
              <h2>{product.productName}</h2>  
              <p>Price: ${product.price}</p>  
              <p>Rating: {product.rating} / 5</p>  
              <p>Discount: {product.discount}%</p>  
              <p>Availability: {product.availability}</p>  
            </div>  </div>
          ))}  
        </div>  
      </main>  
    </div>  
  );  
}  
  
export default App;