import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import productImg from '../../../public/static/images/product-img-1.png';
import productImg2 from '../../../public/static/images/product-img-2.png';
import productImg3 from '../../../public/static/images/product-img-3.png';
import productImg4 from '../../../public/static/images/product-img-4.png';
import productImg5 from '../../../public/static/images/product-img-5.png';
import productImg6 from '../../../public/static/images/product-img-6.png';
import rating from '../../../public/static/images/rating.png';
import colors from '../../../public/static/images/product-colors.png';
import heart from '../../../public/static/images/heart-sm.png';
import add from '../../../public/static/images/Add.png';
import minus from '../../../public/static/images/Minus.png';
import NewArrival from '@/app/components/common/NewArrival';

const ProductPage = () => {
  return (
    <div className="px-[2rem] md:px-[6rem]  2xl:px-[25rem]">
      <div className="flex flex-col md:flex-row mt-12">
        <div className="flex align-center justify-center">
          <Carousel className="max-w-xs md:max-w-md max-h-[20rem]">
            <CarouselContent>
              <CarouselItem key={1}>
                <div className="flex aspect-square items-center justify-center">
                  <img src={productImg.src} />
                </div>
              </CarouselItem>
              <CarouselItem key={2}>
                <div className="flex aspect-square items-center justify-center">
                  <img src={productImg2.src} />
                </div>
              </CarouselItem>
              <CarouselItem key={3}>
                <div className="flex aspect-square items-center justify-center">
                  <img src={productImg3.src} />
                </div>
              </CarouselItem>
              <CarouselItem key={4}>
                <div className="flex aspect-square items-center justify-center">
                  <img src={productImg4.src} />
                </div>
              </CarouselItem>
              <CarouselItem key={2}>
                <div className="flex aspect-square items-center justify-center">
                  <img src={productImg5.src} />
                </div>
              </CarouselItem>
              <CarouselItem key={5}>
                <div className="flex aspect-square items-center justify-center">
                  <img src={productImg6.src} />
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="translate-x-16 md:translate-x-11 md:top-1/4 lg:top-1/2" />
            <CarouselNext className="-translate-x-16 md:-translate-x-11 md:top-1/4 lg:top-1/2" />
          </Carousel>
        </div>
        <div className="px-10 mt-10 md:mt-0">
          <div className="flex gap-2 ">
            <img src={rating.src} className="h-[1rem]"></img>
            <span className="font-inter text-[0.75rem] font-normal text-neutral1">11 reviews</span>
          </div>
          <div className="flex flex-col">
            <h1 className="font-poppins text-[2.5rem]">Tray Table</h1>
            <span className="text-neutralDark text-[1rem]">
              Buy one or buy a few and make every space where you sit more convenient. Light and easy to move around with removable tray top, handy for serving snacks.
            </span>
            <div className="flex gap-4  mt-3 lg:mt-6 align-center">
              <span className="text-[1.75rem] font-poppins">$199</span>
              <s className="text-neutralDark font-poppins text-[1.25rem]">$400</s>
            </div>
            <hr className="my-2"></hr>
            <span className="text-inter font-semibold text-neutralDark text-[1rem]">Measurements</span>
            <span className="text-inter font-normal  text-[1.25rem]">17 1/2x20 5/8 &quot;</span>
            <span className="text-inter font-semibold text-neutralDark text-[1rem] mt-3 cursor-pointer">Choose Color</span>
            <span className="text-inter font-normal  text-[1.25rem]">Black</span>
            <img src={colors.src} className="mt-3 w-[334px]"></img>
            <div className="mt-6">
              <div className="flex h-[40px]">
                <div className="flex bg-[#F5F5F5] rounded px-4 py-[12px] items-center mr-10">
                  <span className="pr-3 cursor-pointer">
                    <img src={minus.src}></img>
                  </span>
                  <span>2</span>
                  <span className="pl-3 cursor-pointer">
                    <img src={add.src}></img>
                  </span>
                </div>
                <button className="flex items-center align-center rounded border-2 px-10 text-black border-black py-2 cursor-pointer">
                  <img src={heart.src} className="my-2 w-[22px] mr-3" />
                  Wishlist
                </button>
              </div>
              <button></button>
            </div>
          </div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is it styled?</AccordionTrigger>
              <AccordionContent>Yes. It comes with default styles that matches the other components&apos; aesthetic.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is it animated?</AccordionTrigger>
              <AccordionContent>Yes. It&apos;s animated by default, but you can disable it if you prefer.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <NewArrival />
    </div>
  );
};

export default ProductPage;
