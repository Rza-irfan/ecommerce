import React from 'react'
import { ProductGrid } from '../../product-grid/ProductGrid'
import  '../jewelery/Jewelery.css'
export const Jewelery = () => {
  return (
    <>
        <div style={{display:"flex",marginTop:"4rem"}}>
            <div  className='filter' style={{width:"17%"}}>
            </div>
            <div style={{width:"80%"}}>
            <ProductGrid category="jewelery"/>
            </div>
        </div>
    </>
  )
}
