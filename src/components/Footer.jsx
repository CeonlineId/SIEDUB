import React from 'react';
import Perusahaan from '../assets/images/ceonline.png';
import Dukungan from '../assets/images/dukungan.png';
import Ig from '../assets/images/IG.png';
import Git from '../assets/images/Github.png';
import Mail from '../assets/images/Email.png';

export default function Footer() {
  return (
    <footer className="bg-gray-50 text-black">
      <div className="grid grid-cols-1 md:grid-cols-3 justify-center py-5 md:py-10 px-4 md:px-20">
        <div className="flex flex-col items-center">
          <p>Dikelola oleh</p>
          <img src={Perusahaan} alt="psh" className="w-30 h-10 " />
        </div>
        <div className="flex flex-col items-center ">
          <p>Di dukung oleh</p>
          <img src={Dukungan} alt="dkg" className="w-64 h-13 pt-4 item-center" />
          <div className="flex gap-2 md:gap-1 font-semibold text-xs justify-center opacity-70 pt-4 pb-4 sm:text-sm ">
            <a href="/" className='text-center'>BERANDA</a>
            <a href="/edukasi" className='text-center'>EDUKASI</a>
            <a href="/informasi" className='text-center'>INFORMASI</a>
            <a href="/lapor" className='text-center'>LAPOR</a>
            <a href="/about" className='text-center'>TENTANG KAMI</a>
          </div>
          <p className="opacity-50 text-sm text-center">
            Copyright 2024.
            <a href="#" className="text-blue-600">
              {' '}
              CEONLINE{' '}
            </a>{' '}
            All Rights Reserved.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <p>Lebih dekat dengan kami</p>
          <div className="flex gap-7 pt-4">
            <a href="https://www.instagram.com/ceonline_id/" target="_blank" rel="Instagram">
              <img src={Ig} alt="Instagram" className="w-30 h-10 " />
            </a>
            <a href="https://github.com/CeonlineId" target="_blank" rel="GitHub">
              <img src={Git} alt="GitHub" className="w-30 h-10 " />
            </a>
            <a href="https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=ceonline.id@gmail.com" target="_blank" rel="Email">
              <img src={Mail} alt="Email" className="w-30 h-10 " />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
