'use client';
import React from 'react';
import add from '../../../public/static/images/Add.png';
import minus from '../../../public/static/images/Minus.png';
import { useCart } from '../../context/CartContext';

const AddToCart = ({ data }) => {
  const { state, dispatch } = useCart();
  const addItemToCart = () => {
    dispatch({
      type: 'ADD_ITEM',
      payload: { id: data.productId, title: data.title, price: data.price },
    });
  };

  const removeItemFromCart = () => {
    dispatch({ type: 'REMOVE_ITEM', payload: data.productId });
  };

  const increaseQuantity = () => {
    dispatch({ type: 'INCREASE_QUANTITY', payload: data.productId });
  };

  const decreaseQuantity = () => {
    if (item.quantity > 1)
      dispatch({ type: 'DECREASE_QUANTITY', payload: data.productId });
    else removeItemFromCart();
  };

  const item = state.items.find((item) => item.id === data.productId);

  return (
    <div className="flex h-[40px]">
      {item ? (
        <div className="flex bg-[#F5F5F5] rounded px-4 py-[12px] items-center cursor-pointer">
          <img
            src={minus.src}
            className="pr-3 w-[25px]"
            onClick={decreaseQuantity}
          />
          <span>{item.quantity}</span>
          <img
            src={add.src}
            className="pl-3 w-[25px]"
            onClick={increaseQuantity}
          />
        </div>
      ) : (
        <button
          className="flex bg-[#F5F5F5] rounded px-7 py-[12px] items-center cursor-pointer"
          onClick={addItemToCart}
        >
          Add
        </button>
      )}
    </div>
  );
};

export default AddToCart;
