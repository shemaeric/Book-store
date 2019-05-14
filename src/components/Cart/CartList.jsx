import React from "react";
import CartItem from './CartItem';

export default function CartColumns({value}) {
  const { cart } = value;
  return ( 
      <div className="container-fluid">
        {cart.map(item => {
          return <CartItem key={Math.random()} item={item} value={value}></CartItem>
        })}
          
      </div>
    );
}
