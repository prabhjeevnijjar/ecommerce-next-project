import NewArrival from '@/app/components/common/NewArrival';
import productData from '@/data/products.json';
import Description from '@/app/components/ProductComp/Description';
import NotFound from '@/app/components/ProductComp/NotFound';
import { baseUrl } from '@/lib/constants';

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: 'Product - Furniture',
  description: 'This is the Product page Furniture E-Comm.',
  keywords: 'Home, products, Ecomm website, Furniture',
  author: 'PSN',
  ogImage: '/opengraph-image.png',
};

const ProductPage = ({ params }) => {
  const data = (function findProduct() {
    return productData.filter((item) => item.slug === params.productName)[0];
  })();

  return (
    <div className="px-[2rem] md:px-[6rem]  2xl:px-[25rem]">
      {data ? (
        <Description prodData={data} />
      ) : (
        <NotFound data={params.productName} />
      )}
      <NewArrival />
    </div>
  );
};

export default ProductPage;
