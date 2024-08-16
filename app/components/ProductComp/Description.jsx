import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import productImg from '../../../public/static/images/product-img-1.png';
import productImg2 from '../../../public/static/images/product-img-2.png';
import productImg3 from '../../../public/static/images/product-img-3.png';
import productImg4 from '../../../public/static/images/product-img-4.png';
import productImg5 from '../../../public/static/images/product-img-5.png';
import productImg6 from '../../../public/static/images/product-img-6.png';
import rating from '../../../public/static/images/rating.png';

import { calcDiscount } from '@/lib/utils';
import AddToCart from './AddToCart';

const Description = ({ prodData }) => {
  return (
    <div className="flex flex-col md:flex-row mt-12">
      <div className="flex align-center justify-center">
        <Carousel className="max-w-xs md:max-w-md max-h-[20rem]">
          <CarouselContent>
            {prodData.carouselImage.map((item, index) => (
              <CarouselItem key={index}>
                <div className="flex aspect-square items-center justify-center">
                  <img
                    src={'/static/images/' + item}
                    alt={index + 'carousel item'}
                    className="w-[180px] md:w-[280px]"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="translate-x-16 md:translate-x-11 md:top-1/4 lg:top-1/2" />
          <CarouselNext className="-translate-x-16 md:-translate-x-11 md:top-1/4 lg:top-1/2" />
        </Carousel>
      </div>
      <div className="sm:px-10 mt-10 md:mt-0">
        <div className="flex gap-2 ">
          <img src={rating.src} className="h-[1rem]"></img>
          <span className="font-inter text-[0.75rem] font-normal text-neutral1">
            {Math.floor(Math.random() * 100) + 1} reviews
          </span>
        </div>
        <div className="flex flex-col">
          <h1 className="font-poppins text-[2.5rem]"> {prodData.title}</h1>
          <span className="text-neutralDark text-[1rem]">
            {prodData.description}
          </span>
          <div className="flex gap-2 mt-2 overflow-x-scroll">
            {prodData.category.map((item, index) => (
              <span
                key={index}
                className="items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-secondary/80 bg-indigo-100 text-indigo-800 "
              >
                {item}
              </span>
            ))}
          </div>
          <div className="flex gap-4  mt-3 lg:mt-6 align-center">
            <span className="text-[1.75rem] font-poppins">
              ${
                calcDiscount(prodData.price, prodData.discountPercent || 0)
                  .discountedPrice
              }
            </span>
            {prodData.discountPercent ? (
              <s className="text-neutralDark font-poppins text-[1.25rem]">
                ${prodData.price}
              </s>
            ) : null}
          </div>
          <hr className="my-2"></hr>
          <span className="text-inter font-semibold text-neutralDark text-[1rem]">
            Measurements
          </span>
          <span className="text-inter font-normal  text-[1.25rem]">
            {prodData.otherDescription}
          </span>
          <div className="mt-6">
            <AddToCart data={prodData} />
          </div>
        </div>
        {prodData?.faqs?.length ? (
          <Accordion type="single" collapsible className="w-full">
            {prodData.faqs.map((item, index) => (
              <AccordionItem value={`item-${index + 1}`} key={index}>
                <AccordionTrigger>{item.title}</AccordionTrigger>
                <AccordionContent>{item.description} </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        ) : null}
      </div>
    </div>
  );
};

export default Description;
