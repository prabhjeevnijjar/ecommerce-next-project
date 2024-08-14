import React from 'react';

const Summary = () => {
  return (
    <div className="py-6 px-4 border rounded-md">
      <div className="font-poppins font-medium text-[1.35rem]">Cart summary</div>
      <div className='flex flex-row justify-between'>
        <span className='font-inter'>Subtotal</span>
        <span className='font-inter font-semibold'>$100</span>
      </div>
      <div className='flex flex-row justify-between'>
        <span className='font-inter'>Coupon (<span className='font-inter font-semibold'>GIVE10</span>)</span>
        <span className='font-inter font-semibold'>-10%</span>
      </div>
      <div className='flex flex-row justify-between'>
        <span className='font-inter'>Discount total </span>
        <span className='font-inter font-semibold'>-$140</span>
      </div>
      <hr className='my-5'></hr>
      <div className='flex flex-row justify-between'>
        <span className='font-inter font-semibold  text-[1.25rem]'>Total</span>
        <span className='font-inter font-semibold text-[1.25rem]'>$100</span>
      </div>
    </div>
  );
};

export default Summary;
