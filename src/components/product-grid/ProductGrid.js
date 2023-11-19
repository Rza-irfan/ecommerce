
import React, { useEffect, useState } from 'react'
import Product from '../product/product';
import './ProductGrid.css';

export const ProductGrid = ({category}) => {
    const [products,setProducts] = useState([]);

    useEffect(()=>{
        const fetchData = async () => {
            const promises = await fetch(`https://fakestoreapi.com/products/category/${category}`).
            then((res) => res.json())
            setProducts(promises);
        };
          fetchData();
    },[]);

  return (
    <div  className="product-grid">
        {products.map((item, index) => (
            <Product key={index} product= {item}/>
        ))}
    </div>

  )
}