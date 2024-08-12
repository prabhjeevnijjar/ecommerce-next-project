import livingRoomImg from '../../../public/static/images/living-room-cat.png';
import bedRoomImg from '../../../public/static/images/bedroom-cat.png';
import kitchenRoomImg from '../../../public/static/images/kitchen-cat.png';
import arrowRight from '../../../public/static/images/right-arrow.png';
const Category = () => {
  return (
    <div className="flex flex-col sm:flex-row px-[2rem] md:px-[6rem] 2xl:px-[25rem] align-center gap-4 mt-8">
      <div className="flex flex-col relative">
        <div className="flex flex-col absolute top-10 left-10">
          <div className="font-poppins text-[1.2rem] lg:text-[1.5rem] font-neutral1">Living</div>
          <span className="flex hover:border-solid  hover:border-black hover:border-b-2 cursor-pointer">
            Shop Now<img src={arrowRight.src}></img>
          </span>
        </div>
        <img src={livingRoomImg.src} />
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-row relative">
          <div className="flex flex-col absolute left-10 bottom-10">
            <div className="font-poppins text-[1.2rem] lg:text-[1.5rem] font-neutral1">Bedroom</div>
            <div className="flex hover:border-solid  hover:border-black hover:border-b-2 cursor-pointer">
              Shop Now<img src={arrowRight.src}></img>
            </div>
          </div>
          <img src={bedRoomImg.src} className="object-fill" />
        </div>
        <div className="flex flex-row relative">
          <div className="flex flex-col absolute left-10 bottom-10">
            <div className="font-poppins text-[1.2rem] lg:text-[1.5rem] font-neutral1">Kitchen</div>
            <div className="flex hover:border-solid  hover:border-black hover:border-b-2 cursor-pointer">
              Shop Now<img src={arrowRight.src}></img>
            </div>
          </div>

          <img src={kitchenRoomImg.src} />
        </div>
      </div>
    </div>
  );
};

export default Category;
