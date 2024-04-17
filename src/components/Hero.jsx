import React from 'react';
import Navbar from './Navbar';
import Img from '../assets/images/org.png';

export default function Hero() {
  return (
    <div className="grid grid-cols-2">
      <div className="col-span-1 flex flex-col justify-center">
        <h1 className="text-start font-bold text-4xl px-20 py-8">
          Selamat Datang Di <br />
          SIEDUB
        </h1>
        <p className="font-normal text-lg px-20 pb-10">
          Sistem Edukasi Bencana (SIEDUB) merupakan platform informasi dan
          edukasi kepada masyarakat luas dan aplikasi untuk proses pengaduan
          bencana yang terjadi disekitar masyarakat
        </p>
        <div className="grid grid-cols-2 px-10">
          <div className="col-span-1 flex flex-col justify-center">
            <button className="bg-orange-600 border-2 hover:bg-orange-700 focus:bg-orange-700 text-white hover:text-white focus:text-white font-semibold py-2 px-20 rounded mx-auto text-start">
              Mulai
            </button>
          </div>
          <div className="col-span-1 flex flex-col justify-center">
            <a href="">Pelajari Lebih Lanjut</a>
          </div>
        </div>
      </div>
      <div className="col-span-1 flex justify-center items-center">
        <img src={Img} alt="Org" className="w-96 h-96 my-32 mx-40" />
      </div>
    </div>
  );
}
