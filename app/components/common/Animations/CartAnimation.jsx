import React from 'react';
// compund pattern
const CartAnimation = () => {
  return null;
};

export default CartAnimation;

CartAnimation.DeleteAnimation = () => {
  return (
    <div className="absolute top-0 left-0 w-full bg-red-500 text-white py-2 px-4 text-center animate-fade-out">
      Item removed from cart!
    </div>
  );
};

CartAnimation.AddAnimation = () => {
  return (
    <div className="absolute top-0 left-0 w-full bg-green-500 text-white py-2 px-4 text-center animate-slide-in">
      Item added to cart!
    </div>
  );
};
