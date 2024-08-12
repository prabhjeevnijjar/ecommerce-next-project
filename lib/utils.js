import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function calcDiscount(price, dis) {
  const disValue = Math.floor(dis ? (dis / 100) * price : 0)
  const discountedPrice = `$${price - +disValue}`;
  return { disValue, discountedPrice };
}
