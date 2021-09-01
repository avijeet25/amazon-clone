import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider';
function Product({id,title, image, price, rating}) {
  const [{basket},dispatch] = useStateValue();
  const addToBasket = () => {
    //dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        // here if you have the key same as value you can also just put it singlelly like id,title,...
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating, 
      },
    });
  }  
  return (
      <div className="product">
        <div className="product__info">
          <p>{title}</p>
          <p className="prduct__price">
            {/* <small>$</small> */}
            <strong>$ {price}</strong>
          </p>
          <div className="product__rating">
          {Array(rating).fill().map((_,i)=>(
            <p>⭐</p>
          ))}
          </div>
        </div>
        <img
          src={image}
          alt=""
        />
        <button onClick={addToBasket}>Add to Cart</button>
      </div>
    );
}

export default Product
