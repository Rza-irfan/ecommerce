import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { quantityOfProducts, totalCost } from "../../store/cartSlice";
import "./Cart.css";
import CartItem from "./CartItem";
// import CartItem from "./CartItem";
// Functional component for rendering cart items
// Define the styled table component

function Cart() {
  const cartItems = useSelector(state => state.cart);
  const totalCost = cartItems.reduce((acc, item) => acc + item.quantity*item.price, 0);
  const quantityOfProducts = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <div>
      <div className="cart">
        <CartItem cartItems={cartItems}/>

        <div className="price-details">
        
          <div className="price-details-heading" style={{fontFamily:"sans-serif",fontSize:"2.25rem",marginTop:"1.25rem",color:"#0082e6"}}>
            Price Details
          </div>
          <hr />
          <ul >
            <li className="price-detail-item">Price <div>{totalCost}</div></li>
            <li className="price-detail-item">Number of Items <div>{quantityOfProducts}</div></li>
            <li className="price-detail-item">Discount <div>12%</div></li>
            <li className="price-detail-item">Delivery Charges <div>150</div></li>
          </ul>
          <hr style={{marginTop:"1.25rem"}}/>
          <div className="price-detail-item">
            Final Price
            <div>
              {totalCost+150}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
