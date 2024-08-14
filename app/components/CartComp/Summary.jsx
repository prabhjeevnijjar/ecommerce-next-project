'use client';
import { useCartCalculations } from '@/app/hooks/useCartCalculations';
import React from 'react';

const Summary = () => {
  const { cartTotal, totalDiscount, couponDiscount,totalWithoutDis, setCouponDiscount } =
    useCartCalculations();

  return (
    <div className="py-6 px-4 border rounded-md">
      <div className="font-poppins font-medium text-[1.35rem]">
        Cart summary
      </div>
      <div className="flex flex-row justify-between mt-2">
        <span className="font-inter">Subtotal</span>
        <span className="font-inter font-semibold">${totalWithoutDis}</span>
      </div>
      <div className="flex flex-row justify-between mt-2">
        <span className="font-inter">
          Coupon (<span className="font-inter font-semibold">GIVE10</span>)
        </span>
        <span className="border-white bg-yellow-500 text-white rounded-md px-1 py-1 text-center w-[60px] text-sm font-semibold ">-10%</span>
      </div>
      <div className="flex flex-row justify-between mt-2">
        <span className="font-inter">Discount total </span>
        <span className="border-white bg-green-500 text-white rounded-md px-1 py-1 text-center w-[60px] text-sm font-semibold ">-${totalDiscount}</span>
      </div>
      <hr className="my-5"></hr>
      <div className="flex flex-row justify-between">
        <span className="font-inter font-semibold  text-[1.25rem]">Pay</span>
        <span className="font-inter font-semibold text-[1.25rem]">${cartTotal}</span>
      </div>
    </div>
  );
};

export default Summary;
