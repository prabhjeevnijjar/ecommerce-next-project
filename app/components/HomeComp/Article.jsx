import arrowRight from '../../../public/static/images/right-arrow.png';
import imge1 from '../../../public/static/images/article-img-1.png';
import imge2 from '../../../public/static/images/article-img-2.png';
import imge3 from '../../../public/static/images/article-img-3.png';

const Article = () => {
  return (
    <div className="px-[2rem] md:px-[6rem] 2xl:px-[25rem] mt-16 ">
      <div className="flex justify-between mx-12">
        <div className="flex font-poppins text-[2.5rem]">
          <span className="leading-[44px]">Articles</span>
        </div>
        <span className="flex gap-2 text-nowrap items-end hover:border-solid  hover:border-black hover:border-b-2 cursor-pointer">
          More Articles <img src={arrowRight.src} className="w-[1.25rem] h-[1.25rem]"></img>
        </span>
      </div>
      <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-around">
        <div className="flex flex-col items-center">
          <img src={imge1.src} />
          <div className="py-6">
            <div className="font-poppins text-[1.25rem]">7 ways to decor your home</div>
            <span className="w-[10rem] flex gap-2 text-nowrap items-end hover:border-solid  hover:border-black hover:border-b-2 cursor-pointer">
              Read More <img src={arrowRight.src} className="w-[1.25rem] h-[1.25rem]"></img>
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img src={imge2.src} />
          <div className="py-6">
            <div className="font-poppins text-[1.25rem]">Kitchen organization</div>
            <span className="w-[10rem] flex gap-2 text-nowrap items-end hover:border-solid  hover:border-black hover:border-b-2 cursor-pointer">
              Read More <img src={arrowRight.src} className="w-[1.25rem] h-[1.25rem]"></img>
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img src={imge3.src} />
          <div className="py-6">
            <div className="font-poppins text-[1.25rem]">Decor your bedroom</div>
            <span className="w-[10rem] flex gap-2 text-nowrap items-end hover:border-solid  hover:border-black hover:border-b-2 cursor-pointer">
              Read More <img src={arrowRight.src} className="w-[1.25rem] h-[1.25rem]"></img>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
