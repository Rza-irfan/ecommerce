import React from 'react'
import Navbar from '../../navbar/Navbar'
import { ProductGrid } from '../../product-grid/ProductGrid'
import '../clothing/Clothing.css'
export const Clothing = () => {
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
