import React from 'react'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal'
import { useStateValue } from "./StateProvider";

function Checkout() {
    const [{ basket }, dispatch] = useStateValue();

    return (
      <div className="checkout">
        <div className="checkout__left">
          <img
            src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg"
            alt="Amazon_ads"
            className="checkout__ad"
          />
          <div>
            {/* checkout products */}
            {/* using ternary operator */}
            {basket?.length === 0 ? (
              <div>
                <h1 className="checkout__status">Your Cart is Empty</h1>
                {/* <p className="checkout__status">
                  Your Shopping Cart lives to serve. Give it purpose — fill it
                  with groceries, clothing, household supplies, electronics, and
                  more. Continue shopping on the Amazon.com homepage, learn
                  about today's deals, or visit your Wish List.
                </p> */}
              </div>
            ) : (
              <div className="checkout__status ">
                <h2 className="checkout__title">Your Shopping Cart</h2>
                {/* list out all the checkout products */}
                <hr />
                {basket?.map((item) => (
                  <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="checkout__right">
          <Subtotal />
          {/* BasketItem */}
        </div>
      </div>
    );
}

export default Checkout
