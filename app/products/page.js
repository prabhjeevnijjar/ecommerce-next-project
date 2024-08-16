import productBanner from '../../public/static/images/product-banner-lg.png';
import productBannerSm from '../../public/static/images/product-banner-sm.png';
import productData from '@/data/products.json';
import Search from '../components/ProductsComp/SearchComp';
export const metadata = {
  openGraph: {
    images: '/opengraph-image.png',
  },
};
const productsPage = () => {
  return (
    <div className="px-[2rem] md:px-[6rem]  2xl:px-[25rem] mb-10">
      <div className="mx-auto flex items-center">
        <img src={productBanner.src} className="hidden sm:block w-full"></img>
        <img src={productBannerSm.src} className="block sm:hidden w-full"></img>
      </div>
      <div className="mt-8 ">
        <Search data={productData} />
      </div>
    </div>
  );
};

export default productsPage;
