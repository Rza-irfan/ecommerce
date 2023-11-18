import React, { useEffect, useState } from "react";
import { useSelector,useDispatch} from 'react-redux'; 
import "../cart/Cart.css";
import CartItem from "./CartItem";
// Functional component for rendering cart items
// Define the styled table component
let total = 69;

function Cart() {
  return (
    <div>
      <div className="cart">
        
        <CartItem/>

        <div className="price-details">
        
          <div className="price-details-heading" style={{fontFamily:"sans-serif",fontSize:"2.25rem",marginTop:"1.25rem",color:"#0082e6"}}>
            Price Details
          </div>
          <hr />
          <ul >
            <li className="price-detail-item">Price <div>{total}</div></li>
            <li className="price-detail-item">Discount <div>12%</div></li>
            <li className="price-detail-item">Delivery Charges <div>150</div></li>
          </ul>
          <hr style={{marginTop:"1.25rem"}}/>
          <div className="price-detail-item">Final Price<div>{(total*0.88)+150}</div></div>
        </div>
      </div>

    </div>
  );
}

export default Cart;
