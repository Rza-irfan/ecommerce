import React, { useEffect, useState } from "react";
import { useSelector,useDispatch} from 'react-redux'; 
import {remove} from '../../redux/reducer/reducer';


function CartItem() {
    const dispatch =useDispatch();

    const cartItems = useSelector(state=>state.cart)

    const removeFromCart=(item)=>{
        dispatch(remove);
    }

    const increment=()=>{

    }
    const decrement=()=>{

    }

    const grid = cartItems.map(product =>{
        <div>
            <div className="product-details">
                <div className="product-image-container">
                    <img src={product.image} alt="Your Image Alt Text" className="product-image" />
                </div>
            <div className="product-name">
                <div>{product.name}</div>
            </div>
        </div>
        <div className="product-footer">
            <div style={{padding:"0.25rem",marginLeft:"4rem",display:"flex"}}>
                <button onClick={()=>increment(product.id)} >+</button>
                {product.quantity}
                <button onClick={()=>decrement(product.id)} >-</button>
            </div>
          
            <div className="product-price">
                <div>Total Price : </div>  
                    <div style={{fontSize:"1.25rem", color:"green",fontWeight:"bold"}}>${product.quantity*product.price}</div>
                </div>
                <button className="product-remove" onClick={()=>removeFromCart(product.id)}>
                    Remove
                </button>
            </div>
        </div>
    })


    return (
        <div className="products">
          {cartItems.map((item, key) => (
            <div className="added-product" key={item.id}>
              <div className="product-details">
                <div className="product-image-container">
                    <img src={item.image} alt="Your Image Alt Text" className="product-image" />
                </div>
                <div className="product-name">
                    <div>{item.name}</div>
                </div>
              </div>
              <div className="product-footer">
                  <div style={{padding:"0.25rem",marginLeft:"4rem",display:"flex"}}>
                    <button onClick={()=>increment(key)} >+</button>
                    {item.quantity}
                    <button onClick={()=>decrement(key)} >-</button>
                  </div>
                  
                  <div className="product-price">
                    <div>Total Price : </div>  
                    <div style={{fontSize:"1.25rem", color:"green",fontWeight:"bold"}}>${item.quantity*item.price}</div>
                  </div>
                  <button className="product-remove" onClick={()=>removeFromCart(item.id)}>
                    Remove
                  </button>
              </div>
            </div>
          ))}
        </div>
    );
}

export default CartItem;