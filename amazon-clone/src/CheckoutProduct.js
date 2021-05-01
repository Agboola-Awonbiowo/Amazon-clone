import React,  { useState }  from 'react'
import './CheckoutProduct.css'
import { useStateValue } from "./StateProvider"



function CheckoutProduct({ id, image, tittle, price, rating, hideButton }) {
    const [{ basket }, dispatch] = useStateValue()
    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }

    const [count, setCount] = useState (0);
    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct__image' src={image} />

            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__tittle'>{tittle}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                    <p>⭐</p>
                    ))}
                </div> 
                
                <div className="btn_div">
                    <button onClick={() => setCount(count - 1)}>-</button>
                        <span>{count}</span>
                    <button onClick={() => setCount(count + 1)}>+</button>
                 </div>
                 {!hideButton && (
                    <button onClick={removeFromBasket}>Remove from Cart</button> 
                 )}
              
            </div>
        </div>
    )
}

export default CheckoutProduct

