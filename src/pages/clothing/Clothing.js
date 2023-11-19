import React from 'react'
import { ProductGrid } from '../../components/product-grid/ProductGrid';
import './Clothing.css'
export const Clothing=()=>{
  return (
    <>
        <div style={{display:"flex",marginTop:"4rem"}}>
            <div  className='filter' style={{width:"17%"}}>
            </div>
            <div style={{width:"80%"}}>
            <ProductGrid category="men's clothing"/>
            </div>
        </div>
    </>
  )
}
export default Clothing;
