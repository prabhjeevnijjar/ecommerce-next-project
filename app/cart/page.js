import React from 'react';
import ProductsD from '../components/CartComp/ProductsD';
import ProductsM from '../components/CartComp/ProductsM';
import Summary from '../components/CartComp/Summary';
import { baseUrl } from '@/lib/constants';
export const metadata = {
  metadataBase: new URL(baseUrl),

  title: 'Cart page - Furniture',
  description: 'This is the Cart page Furniture E-Comm.',
  keywords: 'Cart, products, Ecomm website, Furniture',
  author: 'PSN',
  ogImage: '../opengraph-image.png',
};
const CartPage = () => {
  return (
    <div className="px-[2rem] md:px-[6rem]  2xl:px-[25rem]">
      <div className="flex flex-col font-poppins text-[2.25rem] lg:text-[3.37rem] text-center font-medium mt-6 sm:mt-10">
        <span className="leading-[44px]">Cart</span>
      </div>
      <div className="flex flex-col lg:flex-row mt-6 gap-8">
        <div className="w-full lg:w-2/3 ">
          <ProductsD />
          <ProductsM />
        </div>
        <div className="w-full lg:w-1/3">
          <Summary />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
