import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { ADD_ITEM, REMOVE_ITEM } from '../context/actions';

export const useCartAnimation = () => {
  const { state, dispatch } = useCart();
  const [isAdded, setIsAdded] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  const addItemToCart = (product) => {
    dispatch({ type: ADD_ITEM, payload: product });
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000); // Reset after 1 second
  };

  const deleteItemFromCart = (product) => {
    dispatch({ type: REMOVE_ITEM, payload: product.id });
    setIsDeleted(true);
    setTimeout(() => setIsDeleted(false), 2000); // Reset after 1 second
  };

  return { addItemToCart, deleteItemFromCart, isAdded, isDeleted };
};
