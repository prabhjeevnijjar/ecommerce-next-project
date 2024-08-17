'use client';
import React from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useCart } from '../../context/CartContext';
import { calcDiscount } from '@/lib/utils';
import AddToCart from '../ProductComp/AddToCart';
import { useCartAnimation } from '@/app/hooks/useCartAnimation';
import CartAnimation from '../common/Animations/CartAnimation';
import Link from 'next/link';

const ProductsD = () => {
  const { state } = useCart();
  const { deleteItemFromCart, isDeleted } = useCartAnimation();

  return (
    <div className="md:block hidden">
      <Table>
        <TableCaption>
          {state.items?.length ? 'Cart Items' : 'Cart empty'}
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Product</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead className="text-right">Price</TableHead>
            <TableHead className="text-right">Subtotal</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {state.items.map((item, index) => {
            item.productId = item.id;
            return (
              <TableRow key={index}>
                <TableCell className="font-medium flex gap-2 ">
                  <div className="w-[100px]">
                    <img
                      src={'/static/images/' + item.image}
                      alt="product img"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex flex-col gap-4">
                    <Link
                      href={`/product/${encodeURIComponent(item.slug)}`}
                      className="font-semibold font-md"
                    >
                      {item.title}
                    </Link>
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
                      &nbsp;Remove
                    </button>
                  </div>
                </TableCell>
                <TableCell>
                  <AddToCart data={item} />
                </TableCell>
                <TableCell className="text-right">
                  <div className="">
                    <span className="sm:text-[1.1rem] font-inter mr-1">
                      $
                      {
                        calcDiscount(item.price, item.discountPercent || 0)
                          .discountedPrice
                      }
                    </span>
                    <span>
                      {item.discountPercent ? (
                        <s className="text-neutralDark font-inter text-[0.75rem]">
                          ${item.price}
                        </s>
                      ) : null}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="text-right font-semibold flex flex-col py-0 gap-4 align-top px-0">
                  <div className="flex flex-ro justify-end">
                    {item.discountPercent ? (
                      <div className="border-white bg-green-500 text-white rounded-md px-1 py-1 text-center w-[80px] text-sm">
                        {item.discountPercent}% OFF
                      </div>
                    ) : null}
                  </div>
                  <div className=" text-[1.11rem]">
                    $
                    {
                      calcDiscount(
                        item.price,
                        item.discountPercent || 0,
                        item.quantity
                      ).discountedPricexQty
                    }
                  </div>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      {isDeleted ? <CartAnimation.DeleteAnimation /> : null}
    </div>
  );
};

export default ProductsD;
