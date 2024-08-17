import productBanner from '../../public/static/images/product-banner-lg.png';
import productBannerSm from '../../public/static/images/product-banner-sm.png';
import productData from '@/data/products.json';
import Search from '../components/ProductsComp/SearchComp';
import MetaTags from '../components/common/MetaTags';
import { baseUrl } from '@/lib/constants';
import { Suspense } from 'react';

export const metadata = {
  title: 'Products page - Furniture',
  description: 'This is the Products page Furniture E-Comm.',
  keywords: 'products, Ecomm website, Furniture',
  author: 'PSN',
  ogImage: '/opengraph-image.png',
};
const productsPage = () => {
  return (
    <>
      <Suspense>
        <MetaTags
          title="Products page - Furniture"
          description="This is the Products page of your website."
          keywords="products, Ecomm website, Furniture"
          author="Your Name"
          ogImage="/images/homepage-image.jpg"
          url={baseUrl + 'products'}
        />
        <div className="px-[2rem] md:px-[6rem]  2xl:px-[25rem] mb-10">
          <div className="mx-auto flex items-center">
            <img
              src={productBanner.src}
              className="hidden sm:block w-full"
            ></img>
            <img
              src={productBannerSm.src}
              className="block sm:hidden w-full"
            ></img>
          </div>
          <div className="mt-8 ">
            <Search data={productData} />
          </div>
        </div>
      </Suspense>
    </>
  );
};

export default productsPage;
