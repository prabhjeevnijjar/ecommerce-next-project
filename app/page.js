import Article from './components/HomeComp/Article';
import Banner from './components/HomeComp/Banner';
import Category from './components/HomeComp/Category';
import NewArrival from './components/common/NewArrival';
import Sale from './components/HomeComp/Sale';
import Support from './components/HomeComp/Support';
import Newsletter from './components/common/Newsletter';

const HomePage = () => {
  return (
    <>
      <Banner />
      <Category />
      <NewArrival />
      <Support />
      <Sale />
      <Article />
      <Newsletter />
    </>
  );
};

export default HomePage;
