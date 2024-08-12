import productBanner from '../../../public/static/images/product-banner-lg.png';
import productBannerSm from '../../../public/static/images/product-banner-sm.png';
import rating from '../../../public/static/images/rating.png';
import image1 from '../../../public/static/images/new-arrival-1.png';
import lampImg1 from '../../../public/static/images/product-lamp.png';
import lampImg2 from '../../../public/static/images/product-lamp-2.png';
import toasterImg from '../../../public/static/images/product-toaster.png';

const categoryPage = () => {
  return (
    <div className="px-[2rem] md:px-[6rem]  2xl:px-[25rem] mb-10">
      <div className="mx-auto flex items-center">
        <img src={productBanner.src} className="hidden sm:block"></img>
        <img src={productBannerSm.src} className="block sm:hidden"></img>
      </div>
      <div className="mt-8 flex gap-10">
        <div className="flex flex-col gap-3">
          <label htmlFor="pet-select" className="font-inter font-semibold text-neutralDark">
            CATEGORY
          </label>

          <select name="pets" id="pet-select" className=" rounded border-2 px-6 py-1 border-black">
            <option value="">Select</option>
            <option value="SOFA SET">Sofa set</option>
            <option value="Diner">Diner</option>
            <option value="hamster">Hamster</option>
          </select>
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="pet-select" className="font-inter font-semibold text-neutralDark">
            PRICE
          </label>

          <select name="pets" id="pet-select" className=" rounded border-2 px-6 py-1 border-black">
            <option value="">Select</option>
            <option value="Low">Low</option>
            <option value="High">High</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-8 mt-6 mx-auto px-auto">
        <div className="flex flex-col items-center sm:items-start">
          <img className="" src={image1.src} />
          <img src={rating.src} className="mt-3"></img>
          <div className="mt-2 font-inter font-semibold">Loveseat Sofa</div>
          <div className="flex gap-4  mt-3 align-center">
            <span className="text-[0.75rem] font-inter">$199</span>
            <s className="text-neutralDark font-inter text-[0.75rem]">$400</s>
          </div>
        </div>{' '}
        <div className="flex flex-col items-center sm:items-start">
          <img className="" src={lampImg1.src} />
          <img src={rating.src} className="mt-3"></img>
          <div className="mt-2 font-inter font-semibold">Loveseat Sofa</div>
          <div className="flex gap-4  mt-3 align-center">
            <span className="text-[0.75rem] font-inter">$199</span>
            <s className="text-neutralDark font-inter text-[0.75rem]">$400</s>
          </div>
        </div>{' '}
        <div className="flex flex-col items-center sm:items-start">
          <img className="" src={lampImg2.src} />
          <img src={rating.src} className="mt-3"></img>
          <div className="mt-2 font-inter font-semibold">Loveseat Sofa</div>
          <div className="flex gap-4  mt-3 align-center">
            <span className="text-[0.75rem] font-inter">$199</span>
            <s className="text-neutralDark font-inter text-[0.75rem]">$400</s>
          </div>
        </div>{' '}
        <div className="flex flex-col items-center sm:items-start">
          <img className="" src={toasterImg.src} />
          <img src={rating.src} className="mt-3"></img>
          <div className="mt-2 font-inter font-semibold">Loveseat Sofa</div>
          <div className="flex gap-4  mt-3 align-center">
            <span className="text-[0.75rem] font-inter">$199</span>
            <s className="text-neutralDark font-inter text-[0.75rem]">$400</s>
          </div>
        </div>
      </div>
    </div>
  );
};

export default categoryPage;
