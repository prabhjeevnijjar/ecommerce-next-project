'use client';
import brandLogo from '../../../public/static/images/logog.png';
import Link from 'next/link';
import { useCart } from '../../context/CartContext';

const Header = () => {
  const { state } = useCart();

  return (
    <div className="top-0 flex py-auto justify-between relative items-center py-[1rem] px-[2rem] md:px-[6rem]  2xl:px-[25rem] align-center ">
      <Link href="/">
        <img src={brandLogo.src} alt="logo" />
      </Link>
      <div className="">
        <ul className="flex gap-4 lg:gap-6 text-sm sm:text-base font-grotesk text-neutralDark ">
          <li className="cursor-pointer hidden sm:flex hover:text-neutral1">
            <Link href="/">Home</Link>
          </li>
          <li className="cursor-pointer hover:text-neutral1">
            <Link href="/products">Products</Link>
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex gap-1 lg:gap-4">
          <li className="cursor-pointer">
            <Link href="/cart">
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2  hover:bg-accent h-10 w-10 relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-shopping-cart h-5 w-5"
                >
                  <circle cx="8" cy="21" r="1"></circle>
                  <circle cx="19" cy="21" r="1"></circle>
                  <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
                </svg>
                {state.items?.length ? (
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-indigo-100  hover:bg-indigo-400 absolute -top-2 -right-2">
                    {state.items.length}
                  </div>
                ) : null}
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
