import React from 'react';
import add from '../../../public/static/images/Add.png';
import minus from '../../../public/static/images/Minus.png';

const AddToCart = () => {
  return (
    <div className="flex h-[40px]">
      <div className="flex bg-[#F5F5F5] rounded px-4 py-[12px] items-center cursor-pointer">
        <img src={minus.src} className="pr-3 w-[25px]"></img>
        <span>22</span>
        <img src={add.src} className="pl-3 w-[25px]"></img>
      </div>
      {/* <button className="flex bg-[#F5F5F5] rounded px-7 py-[12px] items-center cursor-pointer">
        Add
      </button> */}
    </div>
  );
};

export default AddToCart;
