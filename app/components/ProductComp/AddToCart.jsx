'use client';
import React from 'react';
import add from '../../../public/static/images/Add.png';
import minus from '../../../public/static/images/Minus.png';
import { useCart } from '../../context/CartContext';
import { DECREASE_QUANTITY, INCREASE_QUANTITY } from '@/app/context/actions';
import { useCartAnimation } from '@/app/hooks/useCartAnimation';
import CartAnimation from '../common/Animations/CartAnimation';
import { useCartCalculations } from '@/app/hooks/useCartCalculations';

const AddToCart = ({ data }) => {
  const { state, dispatch } = useCart();
  const { couponDiscount, removeCoupon } = useCartCalculations();
  const { addItemToCart, deleteItemFromCart, isAdded, isDeleted } =
    useCartAnimation();

  const item = state.items.find((item) => item.id === data.productId);
  const product = {
    id: data.productId,
    title: data.title,
    price: data.price,
    image: data.image,
    slug: data.slug,
    discountPercent: data.discountPercent,
  };

  const increaseQuantity = () => {
    // If coupon Discount is applied, Remove discount coupon when inc, dec qty, customer will reapply afterwards
    if (couponDiscount.length) removeCoupon();

    if (item?.quantity <= 10 - 1)
      dispatch({ type: INCREASE_QUANTITY, payload: data.productId });
    else alert('Only 10 items allowed');
  };

  const decreaseQuantity = () => {
    // If coupon Discount is applied, Remove discount coupon when inc, dec qty, customer will reapply afterwards
    if (couponDiscount.length) removeCoupon();

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
      {isAdded && <CartAnimation.AddAnimation />}
      {isDeleted && <CartAnimation.DeleteAnimation />}
    </div>
  );
};

export default AddToCart;
