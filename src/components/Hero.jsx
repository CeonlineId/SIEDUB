import React from 'react';
import Img from '../assets/images/org.png';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  let navigate = useNavigate();
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 m-10">
        <div className="col-span-1 flex flex-col justify-center md:text-center">
          <h1 className="md:text-start font-bold text-4xl md:px-10 py-8  ">
            Selamat Datang Di <br />
            SIEDUB
          </h1>
          <p className="font-normal text-lg md:px-10 pb-10 text-start">
            Sistem Edukasi Bencana (SIEDUB) merupakan platform informasi dan
            edukasi kepada masyarakat luas dan aplikasi untuk proses pengaduan
            bencana yang terjadi disekitar masyarakat
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-32 md:gap-4 px-10 md:px-10">
            <div className="flex justify-center md:justify-start w-max md:w-auto">
              <button onClick={() => navigate('/edukasi')} className="bg-[#FF3D00] border-2 hover:bg-orange-700 focus:bg-orange-700 text-white focus:text-white font-semibold py-2 px-28 md:px-28 rounded">
                Mulai
              </button>
            </div>
            <div className="flex justify-center md:justify-start items-center ">
              <a href="/about" className="text-[#FF3D00] font-semibold hover:underline">
                Pelajari Lebih Lanjut
              </a>
            </div>
          </div>
        </div>
        <div className="col-span-1 flex justify-center items-center">
          <img
            src={Img}
            alt="Org"
            className="w-full md:w-96 h-auto my-8 md:my-32 mx-auto md:mx-0" // Apply fade-in animation class
          />
        </div>
      </div>
    </div>
  );
}
