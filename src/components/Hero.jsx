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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-10 md:px-10  ">
            <div className="flex justify-center md:justify-start ">
              <button onClick={() => navigate('/edukasi')} className="bg-[#FF3D00] border-2 hover:bg-orange-700 focus:bg-orange-700 text-white hover:text-white focus:text-white font-semibold py-2 px-40 md:px-24 rounded">
                Mulai
              </button>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <a href="/about" className="text-black font-semibold hover:underline">
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
