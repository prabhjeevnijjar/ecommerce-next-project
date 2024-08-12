import leftImg from '../../../public/static/images/livingarea.png';
import arrowRight from '../../../public/static/images/right-arrow.png';

const Sale = () => {
  return (
    <div className="flex flex-col lg:flex-row mt-16">
      <img src={leftImg.src} className="w-full" />
      <div className="bg-neutralLight2 w-100 px-8 py-20">
        <span className="font-inter text-secondaryBlue font-bold">SALE UP TO 35% OFF</span>
        <div className="flex flex-col mt-3">
          <div className="font-poppins text-[2.5rem] p-0 m-0">HUNDREDS of</div> <span className="font-poppins text-[2.5rem]">New lower prices!</span>
        </div>
        <span className="font-inter font-normal text-[1.25rem] mt-8">It&apos;s more affordable than ever to give every room in your home a stylish makeover</span>
        <div className="flex hover:border-solid w-[10rem] hover:border-black hover:border-b-2 cursor-pointer mt-14">
          Shop Now<img src={arrowRight.src}></img>
        </div>
      </div>
    </div>
  );
};
export default Sale;
