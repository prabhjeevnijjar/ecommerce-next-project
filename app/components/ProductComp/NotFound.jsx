import React from 'react';

const NotFound = ({ data }) => {
  return (
    <div className="flex flex-col font-poppins text-[1.25rem] lg:text-[2.5rem] mx-auto text-center my-12">
      <span className="leading-[44px]">
        Product {data ? <span className="font-bold">{data}</span> : null}
      </span>
      <span>Not Found</span>
    </div>
  );
};

export default NotFound;
