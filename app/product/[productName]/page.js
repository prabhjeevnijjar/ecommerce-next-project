
import NewArrival from '@/app/components/common/NewArrival';
import productData from '@/data/products.json';
import Description from '@/app/components/productComp/Description';

const ProductPage = ({ params }) => {
  function findProduct() {
    return productData.filter((item) => item.slug === params.productName)[0];
  }
  return (
    <div className="px-[2rem] md:px-[6rem]  2xl:px-[25rem]">
      <Description prodData={findProduct()}/>
      <NewArrival />
    </div>
  );
};

export default ProductPage;
