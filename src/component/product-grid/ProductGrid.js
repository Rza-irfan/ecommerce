
import React, { useEffect, useState } from 'react'
import '../product-grid/ProductGrid.css'
import { useDispatch ,useSelector} from 'react-redux'; 
import { add } from '../../redux/reducer/reducer';
const Product=({item})=>{
    console.log("ssas");
    const [buttonClicked, setButtonClicked] = useState(false);

    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);
    const handleAddToCart = () => {
        setButtonClicked(!buttonClicked);
        dispatch(add(item));
    };
    console.log(cartItems);
    return(
        <div className="product" >
            <img alt="failed to load" style={{width:"100%",height:"80%"}} src={item.image}/>
            <div>
                {item.title.length > 20 ? `${item.title.substr(0, 20)}....` : item.title}
            </div>
            <div style={{backgroundColor:"white",width:"100%",display:"flex",height:"2rem"}}>
                <div style={{fontSize:"1.2rem",marginTop:"0.4rem"}}>
                    ₹ {item.price}
                </div>
                <button onClick={handleAddToCart}  className={buttonClicked ? 'clicked' : 'notclicked'}>
                    {buttonClicked?'Added to Cart':'Add to Cart'}
                </button>
            </div>
        </div>
    );  
}
export const ProductGrid = ({category}) => {
    const [products,setProducts] = useState([]);

    useEffect(()=>{
        const fetchData = async () => {
            const promises = await fetch(`https://fakestoreapi.com/products/category/${category}`).then((res) => res.json())
            // console.log(promises);
          
            // const productsData = await Promise.all(promises);
            setProducts(promises);
        };
          fetchData();
    },[])

  return (
    <div  className="product-grid">
        {products.map((item, index) => (
        <Product key={index} item={item} />
      ))}
    </div>

  )
}