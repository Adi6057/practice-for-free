import { useState, useEffect } from 'react';

const PopupAd = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 10000); // Show after 10s
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg max-w-md w-full text-center relative shadow-xl">
        <button
          className="absolute top-2 right-3 text-gray-500 cursor-pointer"
          onClick={() => setVisible(false)}
        >
          ✖
        </button>
        {/* Your ad content or ad script iframe */}
        <h3 className="text-xl font-semibold mb-2 text-black">Advertisement</h3>
        <p className="text-sm text-gray-700 mb-4">Don't miss this movie deal!</p>
        <a
          href="https://your-ad-url.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-indigo-600 text-white px-4 py-2 rounded"
        >
          Click Here
        </a>
      </div>
    </div>
  );
};

export default PopupAd;
