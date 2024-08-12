import brandLogo from '../../../public/static/images/white-logo.png';

const Footer = () => {
  return (
    <div className="bg-neutral1 px-[2rem] md:px-[6rem]  2xl:px-[25rem] text-white py-16">
      <div className="flex flex-col sm:flex-row gap-8 justify-between">
        <div className="flex gap-8">
          <img src={brandLogo.src}></img>
          <span className="text-neutralDark">|</span>
          <div className="text-[0.75rem] font-inter font-normal flex items-center">Gift & Decoration store</div>
        </div>
        <ul className="flex gap-2 lg:gap-6 font-inter text-[0.75rem] sm:text-base text-white ">
          <li className="cursor-pointer ">Home</li>
          <li className="cursor-pointer">Shop</li>
          <li className="cursor-pointer">Products</li>
          <li className="sm:block hidden cursor-pointer">Contact</li>
        </ul>
      </div>
      <div className="mt-10">
        <ul className="flex gap-2 lg:gap-6 font-inter text-[0.75rem] text-white ">
          <li className="cursor-pointer ">Copyright @2024 | Singhularity labs</li>

          <li className="cursor-pointer ">Privacy</li>
          <li className="cursor-pointer">Terms of use</li>
        </ul>
      </div>
    </div>
  );
};
export default Footer;
