'use client';
import { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext';

export const useCartCalculations = () => {
  const { state, dispatch } = useCart();
  console.log('=====', state.items);
  const [cartTotal, setCartTotal] = useState(0);
  const [totalDiscount, setTotalDiscount] = useState(0);
  const [couponDiscount, setCouponDiscount] = useState(0);

  useEffect(() => {
    const priceTotal = state.items?.reduce((accumulator, product) => {
      return (
        accumulator +
        (product.price - (product.discountPercent / 100) * product.price) *
          product.quantity
      );
    }, 0);
    setCartTotal(priceTotal);
    const disCountTotal = state.items?.reduce((accumulator, product) => {
      return (
        accumulator +
        (product.discountPercent / 100) * product.price * product.quantity
      );
    }, 0);
    setTotalDiscount(disCountTotal)
  }, [couponDiscount, state.items]);

  return { cartTotal, totalDiscount, couponDiscount, setCouponDiscount };
};

// 100 - 10/100
