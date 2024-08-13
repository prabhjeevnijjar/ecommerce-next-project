import brandLogo from '../../../public/static/images/logog.png';
import searchIcon from '../../../public/static/images/search-icon.png';
import userIcon from '../../../public/static/images/user-icon.png';
import cartIcon from '../../../public/static/images/cart-icon.png';
import Link from 'next/link';
const Header = () => {
  return (
    <div className="top-0 flex py-auto justify-between relative items-center py-[1rem] px-[2rem] md:px-[6rem]  2xl:px-[25rem] align-center ">
      <Link href="/">
        <img src={brandLogo.src} alt="logo" />
      </Link>
      <div className="hidden md:flex">
        <ul className="flex gap-2 lg:gap-6 text-sm sm:text-base font-grotesk text-neutralDark ">
          <li className="cursor-pointer  hover:text-neutral1">
            <Link href="/">Home</Link>
          </li>
          <li className="cursor-pointer hover:text-neutral1">
            <Link href="/products">Products</Link>
          </li>
          <li className="sm:block hidden cursor-pointer hover:text-neutral1">
            Contact
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex gap-1 lg:gap-4">
          <li className="cursor-pointer hidden md:flex">
            <img src={searchIcon.src} className="w-[1.5rem]"></img>
          </li>
          <li className="cursor-pointer hidden md:flex">
            <img src={userIcon.src} className="w-[1.5rem]"></img>
          </li>
          <li className="cursor-pointer">
            <img src={cartIcon.src} className="w-[1.5rem]"></img>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
