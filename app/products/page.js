import productBanner from '../../public/static/images/product-banner-lg.png';
import productBannerSm from '../../public/static/images/product-banner-sm.png';

import productData from '@/data/products.json';
import Search from '../components/ProductsComp/SearchComp';

const productsPage = () => {
  console.log({ productData });
  return (
    <div className="px-[2rem] md:px-[6rem]  2xl:px-[25rem] mb-10">
      <div className="mx-auto flex items-center">
        <img src={productBanner.src} className="hidden sm:block"></img>
        <img src={productBannerSm.src} className="block sm:hidden"></img>
      </div>
      <div className="mt-8 ">
        <Search data={productData} />
      </div>
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-8 mt-6 mx-auto px-auto">
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
      </div> */}
    </div>
  );
};

export default productsPage;
