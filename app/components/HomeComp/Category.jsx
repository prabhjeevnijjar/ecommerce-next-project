import livingRoomImg from '../../../public/static/images/living-room-cat.png';
import bedRoomImg from '../../../public/static/images/bedroom-cat.png';
import kitchenRoomImg from '../../../public/static/images/kitchen-cat.png';

const Category = () => {
  return (
    <div className="flex flex-col sm:flex-row px-[2rem] md:px-[6rem] 2xl:px-[25rem] align-center gap-4 mt-8">
      <div className="flex flex-col relative">
        <div className="flex flex-col absolute top-10 left-10">
          <div className="font-poppins text-[1.2rem] lg:text-[1.5rem] font-neutral1">
            Living
          </div>
          <span className="flex hover:border-solid items-center hover:border-black hover:border-b-2 cursor-pointer">
            Shop Now
            <svg
              width="20"
              height="20"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          </span>
        </div>
        <img src={livingRoomImg.src} alt="sofa" />
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-row relative">
          <div className="flex flex-col absolute left-10 bottom-10">
            <div className="font-poppins text-[1.2rem] lg:text-[1.5rem] font-neutral1">
              Bedroom
            </div>
            <span className="flex hover:border-solid items-center hover:border-black hover:border-b-2 cursor-pointer">
              Shop Now
              <svg
                width="20"
                height="20"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
          </div>
          <img src={bedRoomImg.src} className="object-fill" alt="bedroom" />
        </div>
        <div className="flex flex-row relative">
          <div className="flex flex-col absolute left-10 bottom-10">
            <div className="font-poppins text-[1.2rem] lg:text-[1.5rem] font-neutral1">
              Kitchen
            </div>
            <span className="flex hover:border-solid items-center hover:border-black hover:border-b-2 cursor-pointer">
              Shop Now
              <svg
                width="20"
                height="20"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
          </div>

          <img src={kitchenRoomImg.src} alt="toaster image" />
        </div>
      </div>
    </div>
  );
};

export default Category;
