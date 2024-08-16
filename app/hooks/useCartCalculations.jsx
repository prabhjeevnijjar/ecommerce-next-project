'use client';
import { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext';

export const useCartCalculations = () => {
  const { state, dispatch } = useCart();
  const [cartTotal, setCartTotal] = useState(0);
  const [totalDiscount, setTotalDiscount] = useState(0);
  const [totalWithoutDis, setTotalWithoutDis] = useState(0);
  const [couponDiscount, setCouponDiscount] = useState([]); // stores coupon info
  const [couponValue, setCouponValue] = useState(0); //stores coupon amt to deduct from total

  const removeCoupon = () => {
    console.log('COUPON REMOVED');
    setCouponValue(0);
    setCouponDiscount([]);
  };

  useEffect(() => {
    const total = state.items?.reduce((accumulator, product) => {
      return accumulator + product.price * product.quantity;
    }, 0);
    setTotalWithoutDis(total);
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

    setTotalDiscount(disCountTotal);
  }, [state.items]);

  useEffect(() => {
    console.log('CHANGE');
    //calculate amt to deduct from cart total
    if (couponDiscount.length > 0) {
      // add coupon discount here
      if (couponDiscount[0].type === 'PERCENT') {
        const temp1 = (couponDiscount[0].value / 100) * cartTotal;
        console.log('-----CHANGE-----1----', temp1);
        // set value that need to be negated
        setCouponValue(temp1);
      } else if (couponDiscount[0].type === 'WHOLE') {
        // set value that need to be negated
        setCouponValue(couponDiscount[0].value);
      }
    }
  }, [couponDiscount, state.items]);

  return {
    cartTotal,
    totalDiscount,
    couponDiscount,
    totalWithoutDis,
    couponValue,
    setCouponDiscount,
    setCouponValue,
    removeCoupon,
  };
};
