import React, {useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {add} from '../../store/cartSlice'
import productModel from '../../models/ProductModel';
import { useIsProductInCart } from '../../hooks/isProductInCart';
export const AddBotton = ({product}) => {
    const isProductInCart = useIsProductInCart(product.id);
    const [isButtonDisabled, setIsButtonDisabled] = useState(isProductInCart);
 
   
    const dispatch = useDispatch();


    const handleAddToCart = () => {
        setIsButtonDisabled(true)
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
    return (
        <button disabled={isButtonDisabled} onClick={handleAddToCart}  className={isButtonDisabled ? 'clicked' : 'notclicked'}>
            {isButtonDisabled?'Added to Cart':'Add to Cart'}
        </button>
    )
}
