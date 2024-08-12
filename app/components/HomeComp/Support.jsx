import truckIc from '../../../public/static/images/truck.png';
import moneyIc from '../../../public/static/images/money.png';
import lockIc from '../../../public/static/images/lock.png';
import callIc from '../../../public/static/images/call.png';

const Support = () => {
  return (
    <div className="px-[2rem] md:px-[6rem] 2xl:px-[25rem] mt-8 flex justify-around gap-4 flex-wrap">
      <div className="min-w-[9.5rem] w-[15rem] bg-neutralLight2 px-[2rem] py-[3rem]">
        <img src={truckIc.src}></img>
        <h4 className="font-poppins text-[1.25rem] font-neutral1 mt-3">Free Shipping</h4>
        <h5 className="mt-2 font-neutralDark font-poppins text-[0.75rem] font-normal">Order above $200</h5>
      </div>
      <div className="min-w-[9.5rem] w-[15rem] bg-neutralLight2 px-[2rem] py-[3rem]">
        <img src={moneyIc.src}></img>
        <h4 className="font-poppins text-[1.25rem] font-neutral1 mt-3">Money-back</h4>
        <h5 className="mt-2 font-neutralDark font-poppins text-[0.75rem] font-normal">30 days guarantee</h5>
      </div>
      <div className="min-w-[9.5rem] w-[15rem] bg-neutralLight2 px-[2rem] py-[3rem]">
        <img src={lockIc.src}></img>
        <h4 className="font-poppins text-[1.25rem] font-neutral1 mt-3">Secure Payments</h4>
        <h5 className="mt-2 font-neutralDark font-poppins text-[0.75rem] font-normal">Secured by Stripe</h5>
      </div>
      <div className="min-w-[9.5rem] w-[15rem] bg-neutralLight2 px-[2rem] py-[3rem]">
        <img src={callIc.src}></img>
        <h4 className="font-poppins text-[1.25rem] font-neutral1 mt-3">24/7 Support</h4>
        <h5 className="mt-2 font-neutralDark font-poppins text-[0.75rem] font-normal">Phone and Email support </h5>
      </div>
    </div>
  );
};
export default Support;
