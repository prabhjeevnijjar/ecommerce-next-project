import { useState } from 'react';

const CopyCouponCode = ({ couponCode }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(couponCode).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset the copied state after 2 seconds
    });
  };

  return (
    <>
      <div className='font-semibold mt-6'>Try These!</div>
      <div className="flex items-center space-x-2 mt-3">
        <input
          type="text"
          value={couponCode}
          readOnly
          className="border rounded-lg p-2 text-gray-700 focus:outline-none"
        />
        <button
          onClick={handleCopy}
          className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition duration-300"
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
    </>
  );
};

export default CopyCouponCode;
