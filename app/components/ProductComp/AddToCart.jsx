'use client';
import React from 'react';
import add from '../../../public/static/images/Add.png';
import minus from '../../../public/static/images/Minus.png';
import { useCart } from '../../context/CartContext';
import {
  ADD_ITEM,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
  REMOVE_ITEM,
} from '@/app/context/actions';
import { useCartAnimation } from '@/app/hooks/useCartAnimation';

const AddToCart = ({ data }) => {
  const { state, dispatch } = useCart();

  const { addItemToCart, deleteItemFromCart, isAdded, isDeleted } =
    useCartAnimation();

  const item = state.items.find((item) => item.id === data.productId);
  const product = { id: data.productId, title: data.title, price: data.price };

  const increaseQuantity = () => {
    if (item?.quantity <= 10 - 1)
      dispatch({ type: INCREASE_QUANTITY, payload: data.productId });
    else alert('Only 10 items allowed');
  };

  const decreaseQuantity = () => {
    if (item.quantity > 1)
      dispatch({ type: DECREASE_QUANTITY, payload: data.productId });
    else deleteItemFromCart(product);
  };

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
          onClick={() => addItemToCart(product)}
        >
          Add
        </button>
      )}
      {isAdded && (
        <div className="absolute top-0 left-0 w-full bg-green-500 text-white py-2 px-4 text-center animate-slide-in">
          Item added to cart!
        </div>
      )}
      {isDeleted && (
        <div className="absolute top-0 left-0 w-full bg-red-500 text-white py-2 px-4 text-center animate-fade-out">
          Item removed from cart!
        </div>
      )}
    </div>
  );
};

export default AddToCart;
