import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { increment, remove, decrement} from "../../store/cartSlice";
function CartItem({cartItems}) {
    const dispatch = useDispatch();

    return (
        <div className="products">
            {cartItems.map((item, key) => (
                <div className="added-product" key={item.id}>
                    <div className="product-details">
                        <div className="product-image-container">
                            <img src={item.image} alt="Your Image Alt Text" className="product-image" />
                        </div>
                        <div className="product-name">
                            <div style={{fontWeight:'bold',marginTop:'2rem'}}>{item.name}</div>
                            <div>
                                {item.description}
                            </div>
                            <div style={{fontWeight:'bold',marginTop:'2rem'}}>
                                Price : {item.price}
                            </div>
                        </div>
                    </div>
                    <div className="product-footer">
                        <div style={{padding:"0.25rem",marginLeft:"4rem",display:"flex"}}>
                            <button onClick={()=>dispatch(increment(item.id))} >+</button>
                            {item.quantity}
                            <button onClick={()=>dispatch(decrement(item.id))} >-</button>
                        </div>
                        <div className="product-price">
                            <div>Total Price :</div>  
                            {console.log(item.quantity+","+item.price)}
                            <div style={{fontSize:"1.25rem", color:"green",fontWeight:"bold"}}>${item.quantity*item.price}</div>
                        </div>
                        <button className="product-remove" onClick={()=>dispatch(remove(item.id))}>
                            Remove
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CartItem;