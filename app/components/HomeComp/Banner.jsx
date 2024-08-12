import deskBanner from '../../../public/static/images/home-banner-desk.png';
import mobBanner from '../../../public/static/images/home-banner-mob.png';

const Banner = () => {
  return (
    <div className=" px-[2rem] md:px-[6rem]  2xl:px-[25rem] align-center ">
      <div className="">
        <img className="hidden xs:block" src={deskBanner.src}></img>
        <img className="block xs:hidden" src={mobBanner.src}></img>
      </div>
      <div className="flex flex-col sm:flex-row mt-3 sm:mt-9">
        <div className="flex-col font-poppins sm:w-1/2 w-screen ">
          <h1 className="text-[2rem] md:text-[2.5rem] xl:text-[4rem] text-nowrap">
            Simply Unique<span className="text-neutralDark">/</span>
          </h1>
          <h1 className="text-[2rem] md:text-[2.5rem] xl:text-[4rem] text-nowrap">
            Simply Better<span className="text-neutralDark">.</span>
          </h1>
        </div>
        <div className="sm:w-1/2 flex justify-center items-center pl-0 sm:pl-10 mt-6 sm:mt-0">
          <h3 className="font-inter text-neutralDark text-left">
            <span className="text-neutral3 font-medium">3legant</span> is a gift & decorations store based in HCMC, Vietnam. Est since 2019.{' '}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Banner;
