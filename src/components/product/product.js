import React, {useState } from 'react'
import { useDispatch } from 'react-redux';
import {add} from '../../store/cartSlice'
import productModel from '../../models/ProductModel';
import { AddBotton } from '../AddBotton/AddBotton';

const Product = ({product}) => {
    const [buttonClicked, setButtonClicked] = useState(false);
    const dispatch = useDispatch();
    const handleAddToCart = () => {
        setButtonClicked(!buttonClicked);

        dispatch(add(productModel()
        .setId(product.id)
        .setName(product.title)
        .setImage(product.image)
        .setDescription(product.description)
        .setPrice(product.price)
        .setCategory(product.category)
        .setQuantity(1)
        .build()));
    };
    return(
        <div className="product" >
            <img alt="failed to load" style={{width:"100%",height:"80%"}} src={product.image}/>
            <div>
                {product.title.length > 20 ? `${product.title.substr(0, 20)}....` : product.title}
            </div>

            <div style={{backgroundColor:"white",width:"100%",display:"flex",height:"2rem"}}>
                <div style={{fontSize:"1.2rem",marginTop:"0.4rem"}}>
                    ₹ {product.price}
                </div>
                <AddBotton product={product}/>
            </div>
        </div>
    );  
}
export default Product;
