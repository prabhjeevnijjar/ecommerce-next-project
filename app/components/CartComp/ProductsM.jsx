'use client';
import { useCart } from '@/app/context/CartContext';
import { useCartAnimation } from '@/app/hooks/useCartAnimation';
import React from 'react';
import AddToCart from '../ProductComp/AddToCart';
import CartAnimation from '../common/Animations/CartAnimation';

const ProductsM = () => {
  const { state } = useCart();
  const { deleteItemFromCart, isDeleted } = useCartAnimation();

  return (
    <div className="md:hidden flex flex-col">
      <div className="font-semibold text-gray-500 text-center">
        {state.items?.length ? null : 'Cart empty'}
      </div>
      {state.items.map((item, index) => {
        item.productId = item.id;
        return (
          <div className="flex flex-row justify-between px-2 py-4" key={index}>
            <div className="flex flex-row gap-4">
              <div class="w-38 h-38">
                <img
                  src={item.image}
                  alt="product img"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="flex flex-col gap-4">
                <div className="font-semibold font-md">{item.title}</div>
                <AddToCart data={item} />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <span className="font-semibold">$100</span>
              <button
                className="font-sm flex flex-row text-gray-500 font-semibold cursor-pointer items-center"
                onClick={() => deleteItemFromCart({ id: item.id })}
              >
                <span>
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.29289 5.79289C5.68342 5.40237 6.31658 5.40237 6.70711 5.79289L12 11.0858L17.2929 5.79289C17.6834 5.40237 18.3166 5.40237 18.7071 5.79289C19.0976 6.18342 19.0976 6.81658 18.7071 7.20711L13.4142 12.5L18.7071 17.7929C19.0976 18.1834 19.0976 18.8166 18.7071 19.2071C18.3166 19.5976 17.6834 19.5976 17.2929 19.2071L12 13.9142L6.70711 19.2071C6.31658 19.5976 5.68342 19.5976 5.29289 19.2071C4.90237 18.8166 4.90237 18.1834 5.29289 17.7929L10.5858 12.5L5.29289 7.20711C4.90237 6.81658 4.90237 6.18342 5.29289 5.79289Z"
                      fill="#6C7275"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        );
      })}
      {isDeleted ? <CartAnimation.DeleteAnimation /> : null}
    </div>
  );
};

export default ProductsM;
