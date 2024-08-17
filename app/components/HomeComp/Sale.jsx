import Link from 'next/link';
import leftImg from '../../../public/static/images/livingarea.png';

const Sale = () => {
  return (
    <div className="flex flex-col lg:flex-row mt-16">
      <img src={leftImg.src} className="w-full" alt="bedroom image" />
      <div className="bg-neutralLight2 w-100 px-8 py-20">
        <span className="font-inter text-secondaryBlue font-bold">
          SALE UP TO 35% OFF
        </span>
        <div className="flex flex-col mt-3">
          <div className="font-poppins text-[2.5rem] p-0 m-0">HUNDREDS of</div>{' '}
          <span className="font-poppins text-[2.5rem]">New lower prices!</span>
        </div>
        <span className="font-inter font-normal text-[1.25rem] mt-8">
          It&apos;s more affordable than ever to give every room in your home a
          stylish makeover
        </span>
        <Link
          href={'/products'}
          className="flex hover:border-solid w-[10rem] items-center hover:border-black hover:border-b-2 cursor-pointer mt-14"
        >
          Shop Now{' '}
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
        </Link>
      </div>
    </div>
  );
};
export default Sale;
