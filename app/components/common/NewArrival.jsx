import arrowRight from '../../../public/static/images/right-arrow.png';
import image1 from '../../../public/static/images/new-arrival-1.png';
import rating from '../../../public/static/images/rating.png';
import lampImg1 from '../../../public/static/images/product-lamp.png';
import lampImg2 from '../../../public/static/images/product-lamp-2.png';
import toasterImg from '../../../public/static/images/product-toaster.png';

const NewArrival = () => {
  return (
    <div className="px-[2rem]  2xl:px-[2rem] mt-8 ">
      <div className="flex justify-between mx-2 lg:mx-12">
        <div className="flex flex-col font-poppins text-[1.25rem] lg:text-[2.5rem]">
          <span className="leading-[44px]">New</span>
          <span>Arrivals</span>
        </div>
        <span className="flex gap-2 text-nowrap items-end hover:border-solid  hover:border-black hover:border-b-2 cursor-pointer text-[0.75rem] lg:text-[1rem]">
          More Products <img src={arrowRight.src} className="w-[1.25rem] h-[1.25rem]"></img>
        </span>
      </div>
      <div className="mt-8 mb-10 flex gap-6 overflow-scroll">
        <div className="w-[262px] ">
          <img className="w-[262px] " src={image1.src} />
          <img src={rating.src} className="mt-3"></img>
          <div className="mt-2 font-inter font-semibold">Loveseat Sofa</div>
          <div className="flex gap-4  mt-3 align-center">
            <span className="text-[0.75rem] font-inter">$199</span>
            <s className="text-neutralDark font-inter text-[0.75rem]">$400</s>
          </div>
        </div>
        <div className="w-[262px] ">
          <img className="w-[262px] " src={lampImg1.src} />
          <img src={rating.src} className="mt-3"></img>
          <div className="mt-2 font-inter font-semibold">Loveseat Sofa</div>
          <div className="flex gap-4  mt-3 align-center">
            <span className="text-[0.75rem] font-inter">$24.99</span>
            <s className="text-neutralDark font-inter text-[0.75rem]">$30</s>
          </div>
        </div>
        <div className="w-[262px] ">
          <img className="w-[262px] " src={lampImg2.src} />
          <img src={rating.src} className="mt-3"></img>
          <div className="mt-2 font-inter font-semibold">Beige Table Lamp</div>
          <div className="flex gap-4  mt-3 align-center">
            <span className="text-[0.75rem] font-inter">$240.99</span>
            <s className="text-neutralDark font-inter text-[0.75rem]">$300</s>
          </div>
        </div>
        <div className="w-[262px] ">
          <img className="w-[262px] " src={toasterImg.src} />
          <img src={rating.src} className="mt-3"></img>
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
