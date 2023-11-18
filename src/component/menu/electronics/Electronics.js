import React from 'react'
import { ProductGrid } from '../../product-grid/ProductGrid'
export const Electronics = () => {
  return (
    <>
        <div style={{display:"flex",marginTop:"4rem"}}>
            <div  className='filter' style={{width:"17%"}}>
            </div>
            <div style={{width:"80%"}}>
            <ProductGrid category="electronics"/>
            </div>
        </div>
    </>
  )
}
