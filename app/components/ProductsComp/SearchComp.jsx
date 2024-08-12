'use client';
import React, { useState } from 'react';
import categories from '@/data/categories.json';
import rating from '@/public/static/images/rating.png';
import image1 from '@/public/static/images/new-arrival-1.png';
import lampImg1 from '@/public/static/images/product-lamp.png';
import lampImg2 from '@/public/static/images/product-lamp-2.png';
import toasterImg from '@/public/static/images/product-toaster.png';
import { calcDiscount } from '@/lib/utils';
const Search = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [filteredResults, setFilteredResults] = useState(data);

  const handleSearch = () => {
    let results = data.filter(
      (item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    console.log({ results });
    if (category) {
      results = results.filter((item) => item.category === category);
    }

    if (price) {
      results = results.filter((item) => item.price <= parseFloat(price));
    }

    setFilteredResults(results);
  };

  return (
    <>
      <div className="flex sm:flex-row flex-col justify-around h-[34px] gap-4 mb-10">
        <div className='flex flex-row'>
        <input
          type="text"
          className="border border-gray-300 rounded px-4 py-2 w-full"
          placeholder="Search by title or description..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <input
          type="number"
          className="border border-gray-300 rounded pl-4 py-2 w-[120px]"
          placeholder="Max price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        </div>
        <div className='flex flex-row'>
        <select
          className="border border-gray-300 rounded px-4 py-2 w-full"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          {categories.map((item, index) => {
            return (
              <option value={item.value} key={index}>
                {item.name}
              </option>
            );
          })}
        </select>
        <button
          onClick={handleSearch}
          className="p-2.5 ms-2 text-sm font-medium text-white bg-green-500 rounded-lg border hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
          <span className="sr-only">Search</span>
        </button>
        </div>
      </div>
      {filteredResults.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-8 sm:mt-6 mt-[5rem] mx-auto px-auto">
          {filteredResults.map((item, index) => (
            <div
              className="flex flex-col items-center sm:items-start sm:w-[200px] lg:w-[250px] w-[300px] mx-auto"
              key={index}
            >
              <div className="flex justify-center w-full">
                <img src={toasterImg.src} />
              </div>{' '}
              <div className="mt-2 font-inter font-semibold">{item.title}</div>
              <div className="w-full flex gap-4  mt-3 align-center items-center justify-between">
                <div>
                  <span className="text-[0.75rem] font-inter">
                    {
                      calcDiscount(item.price, item.discountPercent || 0)
                        .discountedPrice
                    }
                  </span>
                  {item.discountPercent ? (
                    <s className="text-neutralDark font-inter text-[0.75rem]">
                      ${item.price}
                    </s>
                  ) : null}
                </div>
                <button className="text-[0.75rem] px-2 py-1 font-inter transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      {filteredResults.length === 0 && searchTerm && (
        <p className="mt-2 text-gray-500">No results found</p>
      )}
    </>
  );
};

export default Search;
