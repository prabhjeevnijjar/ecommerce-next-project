import React from 'react';
import ProductsD from '../components/CartComp/ProductsD';
import ProductsM from '../components/CartComp/ProductsM';

const CartPage = () => {
  return (
    <div className="px-[2rem] md:px-[6rem]  2xl:px-[25rem]">
      <div className="flex flex-col font-poppins text-[2.25rem] lg:text-[3.37rem] text-center font-medium mt-6 sm:mt-10">
        <span className="leading-[44px]">Cart</span>
      </div>
      <div className="flex mt-6">
        <div className="w-2/3 ">
          <ProductsD />
          <ProductsM />
        </div>
        <div className="w-1/3 ">Content for the second section</div>
      </div>
    </div>
  );
};

export default CartPage;
