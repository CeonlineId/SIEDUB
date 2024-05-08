import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from '@react-hook/media-query';

export default function ReportButton() {
  let navigate = useNavigate();
  const isLargeScreen = useMediaQuery('(min-width: 1024px)');
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    if (isLargeScreen) {
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 3000); // Ubah angka 3000 menjadi durasi yang Anda inginkan (dalam milidetik)
    } else {
      navigate('/lapor');
    }
  };

  return (
    <div className="fixed bottom-8 right-10 z-50">
      <button
        onClick={handleClick}
        className={`bg-[#FF3D00] text-white font-bold py-4 px-4 rounded-xl `}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          {' '}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
          />
        </svg>
      </button>
      {showPopup && (
        <div className="absolute bottom-16 right-10 bg-white border border-gray-300 shadow-md p-4 rounded-md text-sm w-64 text-gray-700">
          <span>Tombol ini tidak dapat diakses pada Desktop. Silakan gunakan pada perangkat mobile atau tablet.</span>
        </div>
      )}
    </div>
  );
}
