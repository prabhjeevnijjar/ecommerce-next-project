'use client';
import React, { useState } from 'react';
import categories from '@/data/categories.json';
import { calcDiscount } from '@/lib/utils';
import { Slider } from '@/components/ui/slider';
import Link from 'next/link';
import AddToCart from '../ProductComp/AddToCart';

const Search = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState(1000);
  const [filteredResults, setFilteredResults] = useState(data);

  const handleSearch = () => {
    let results = data.filter(
      (item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (category) {
      results = results.filter((item) => item.category.includes(category));
    }

    if (price) {
      results = results.filter((item) => item.price <= parseFloat(price));
    }

    setFilteredResults(results);
  };

  const handleClear = () => {
    setSearchTerm('');
    setCategory('');
    setPrice('');
    setFilteredResults(data);
  };

  return (
    <>
      <h2 className="text-[1.5rem] text-semibold mb-4">Filters</h2>
      <input
        type="text"
        className="border border-gray-300 rounded px-4 py-2 w-full "
        placeholder="Search product..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div>
        <div className="flex sm:flex-row flex-col justify-between h-[34px] gap-4 mb-10 mt-9 sm:mt-3">
          <div className="flex flex-col gap-2 w-full sm:w-[30%]">
            <label>Max Price: {price || 0}</label>
            <Slider
              defaultValue={[33]}
              max={10000}
              step={10}
              value={[price]}
              onValueChange={(e) => setPrice(e[0])}
            />
          </div>
          <div className="flex flex-row gap-1 sm:gap-2">
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
              className="flex align-center items-center gap-2 p-2.5 ms-2 text-sm font-medium text-white bg-green-500 rounded-lg border hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Apply
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
              <span className="sr-only">Apply</span>
            </button>
            <button
              onClick={handleClear}
              className="flex align-center items-center gap-2 p-2.5 ms-2 text-sm font-medium text-white bg-red-500 rounded-lg border hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
            >
              Clear <span className="">&times;</span>
            </button>
          </div>
        </div>
        <h2 className="text-[1.2rem] mb-4 mt-[5rem] sm:mt-3">
          Category:{' '}
          <span className="text-normal font-semibold">{category || 'All'}</span>
        </h2>
      </div>
      {filteredResults.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-8 sm:mt-[2rem] mt-[6rem] mx-auto px-auto">
          {filteredResults.map((item, index) => (
            <div
              className="flex flex-col items-center sm:items-start sm:w-[200px] lg:w-[250px] w-[261px] mx-auto"
              key={index}
            >
              <Link
                href={`/product/${encodeURIComponent(item.slug)}`}
                className="flex justify-center w-full"
              >
                <img
                  src={"/static/images/" + item.image}
                  alt="image"
                  loading="lazy"
                />
              </Link>
              <div className="mt-2 font-inter font-semibold">{item.title}</div>
              <div className="w-full flex gap-4  mt-3 align-center items-center justify-between">
                <div className="">
                  <span className="sm:text-[1.1rem] font-inter mr-1">
                    $
                    {
                      calcDiscount(item.price, item.discountPercent || 0)
                        .discountedPrice
                    }
                  </span>
                  <span>
                    {item.discountPercent ? (
                      <s className="text-neutralDark font-inter text-[0.75rem]">
                        ${item.price}
                      </s>
                    ) : null}
                  </span>
                </div>
                <AddToCart data={item} />
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
