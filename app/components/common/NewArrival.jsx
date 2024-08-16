import image1 from '../../../public/static/images/new-arrival-1.png';
import rating from '../../../public/static/images/rating.png';
import lampImg1 from '../../../public/static/images/product-lamp.png';
import lampImg2 from '../../../public/static/images/product-lamp-2.png';
import toasterImg from '../../../public/static/images/product-toaster.png';
import Link from 'next/link';

const NewArrival = () => {
  return (
    <div className="px-[2rem]  2xl:px-[2rem] mt-8 ">
      <div className="flex justify-between mx-2 lg:mx-12">
        <div className="flex flex-col font-poppins text-[1.25rem] lg:text-[2.5rem]">
          <span className="leading-[44px]">New</span>
          <span>Arrivals</span>
        </div>
        <Link
          href="/products"
          className="flex gap-2 text-nowrap items-end hover:border-solid  hover:border-black hover:border-b-2 cursor-pointer text-[0.75rem] lg:text-[1rem]"
        >
          More Products{' '}
          <svg
            width="20"
            height="20"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        </Link>
      </div>
      <div className="mt-8 mb-10 flex gap-6 overflow-x-scroll md:overflow-hidden">
        <div className="w-[262px] ">
          <img className="w-[262px] " src={image1.src} alt="sofa" />
          <img src={rating.src} className="mt-3" alt="ratings"></img>
          <div className="mt-2 font-inter font-semibold">Loveseat Sofa</div>
          <div className="flex gap-4  mt-3 align-center">
            <span className="text-[0.75rem] font-inter">$199</span>
            <s className="text-neutralDark font-inter text-[0.75rem]">$400</s>
          </div>
        </div>
        <div className="w-[262px] ">
          <img className="w-[262px] " src={lampImg1.src} alt="LAMP" />
          <img src={rating.src} className="mt-3" alt="ratings"></img>
          <div className="mt-2 font-inter font-semibold">Loveseat Sofa</div>
          <div className="flex gap-4  mt-3 align-center">
            <span className="text-[0.75rem] font-inter">$24.99</span>
            <s className="text-neutralDark font-inter text-[0.75rem]">$30</s>
          </div>
        </div>
        <div className="w-[262px] ">
          <img className="w-[262px] " src={lampImg2.src} alt="lMP" />
          <img src={rating.src} className="mt-3" alt="ratings"></img>
          <div className="mt-2 font-inter font-semibold">Beige Table Lamp</div>
          <div className="flex gap-4  mt-3 align-center">
            <span className="text-[0.75rem] font-inter">$240.99</span>
            <s className="text-neutralDark font-inter text-[0.75rem]">$300</s>
          </div>
        </div>
        <div className="w-[262px] ">
          <img className="w-[262px] " src={toasterImg.src} alt="toaster" />
          <img src={rating.src} className="mt-3" alt="ratings"></img>
          <div className="mt-2 font-inter font-semibold">Bamboo Basket</div>
          <div className="flex gap-4  mt-3 align-center">
            <span className="text-[0.75rem] font-inter">$125.99</span>
            <s className="text-neutralDark font-inter text-[0.75rem]">$170</s>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
