// import rightImg from '../../../public/static/images/sofa-newsletter.jpeg';
import leftImg from '../../../public/static/images/drawer-newsletter.jpeg';
import emailIc from '../../../public/static/images/email.png';

const Newsletter = () => {
  return (
    <div className="flex mt-12 items-center align-center bg-neutralLight2">
      <img src={leftImg.src} className="w-0 md:w-1/4"></img>
      <div className="w-full md:w-1/2 py-12 md:py-0 px-auto flex flex-col items-center">
        <div className="font-poppins text-[2.5rem] text-nowrap">Join our Newsletter</div>
        <div className="font-inter text-[1.12]">Sign up for deals, new products and promotions</div>
        <div className="flex border-b-2 mt-8 py-2">
          <img src={emailIc.src} />
          <input type="email" className="bg-transparent px-2" placeholder="Email address" />
          <button className="font-inter text-neutralDark">Signup</button>
        </div>
      </div>
      {/* <img src={rightImg.src} className="w-0 md:w-1/4 object-fill"></img> */}
    </div>
  );
};
export default Newsletter;
