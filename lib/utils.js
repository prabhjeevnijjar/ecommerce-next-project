import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function calcDiscount(price, dis, qty) {
  const disValue = Math.floor(dis ? (dis / 100) * price : 0);
  const discountedPrice = `${price - +disValue}`;
  const discountedPricexQty = qty ? +discountedPrice * qty : 0;
  
  return { disValue, discountedPrice, discountedPricexQty };
}
