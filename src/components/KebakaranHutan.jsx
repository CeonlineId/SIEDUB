import React from 'react';
import Navbar from './Navbar';
import kh1 from '../assets/images/EduImg/KH1.png'
import kh2 from '../assets/images/EduImg/KH2.png'
import kh3 from '../assets/images/EduImg/KH3.png'
import b4 from '../assets/images/EduImg/B4.png'

const EduSection = () => {
  return (
    <>
    <Navbar />
    <div className="container mx-auto px-4 py-8 m-20">
        <h1 className="text-4xl font-semibold text-center tracking-wider">Edukasi Bencana <br />(Kebakaran Hutan)</h1>
            <p className="text-sm text-center mt-4 tracking-wider">Ini merupakan edukasi tentang <br /> bagaimana jika terjadi bencana <br /> alam (Kebakaran Hutan) di daerah kalian</p>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 pb-20 pt-10">
            <div className="relative bg-white rounded-lg shadow-lg flex transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl ">
                <div className="bg-[#FF3D00] text-white w-20 md:w-16 h-10 flex items-center rounded-lg justify-center mr-0 md:mr-4 p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                    </svg>
                </div>
                <div className="p-2">
                    <h2 className="font-semibold p-1">Pengertian dan Penyebab </h2><hr className="border-gray-400" />
                    <h2 className="text-xl font-semibold mb-1 mt-3">Kebakaran Hutan</h2>
                    <p className="text-gray-600 pb-5">Kebakaran hutan adalah penyebaran api yang tidak terkendali di area hutan. Penyebabnya meliputi aktivitas manusia seperti pembakaran lahan, cuaca ekstrem seperti panas dan petir, serta vegetasi yang mudah terbakar.</p>
                </div>
            </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-8 w">
            <div className="relative bg-white rounded-lg shadow-lg flex transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl">
                <div className="bg-[#FF3D00] text-white rounded-lg w-28 h-10 md:w-16 md:h-10 flex items-center justify-center mr-0 md:mr-4 p-2">
                    1
                </div>
                <div className="p-2">
                    <h2 className="font-semibold">Cari Tempat yang Aman</h2>
                    <img src={kh1} alt="Logo" className="w-80 h-44 ml-0 mb-0 md:ml-10 md:mb-3 md:w-96 md:h-auto" />
                        <div className="flex gap-5 items-center">
                            <h1 className="font-semibold text-2xl">1</h1>
                            <h2 className="text-md font-semibold">Langkah Pertama</h2>
                        </div>
                    <p className="text-gray-600 pb-5 pl-8">Segera cari tempat yang aman, seperti area yang sudah terbakar atau lapangan yang luas tanpa vegetasi yang mudah terbakar.</p>
                </div>
            </div>

            <div className="relative bg-white rounded-lg shadow-lg flex transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl">
                <div className="bg-[#FF3D00] text-white rounded-lg w-32 h-10 md:w-14 md:h-10 flex items-center justify-center mr-0 md:mr-4 p-1">
                    2
                </div>
                <div className="p-2">
                    <h2 className="font-semibold">Hindari Udara Panas</h2>
                    <img src={kh2} alt="Logo" className="w-80 h-44 ml-0 mb-0 md:ml-10 md:mb-3 md:w-96 md:h-auto" />
                        <div className="flex gap-5 items-center">
                            <h1 className="font-semibold text-2xl">2</h1>
                            <h2 className="text-md font-semibold">Langkah Kedua</h2>
                        </div>
                    <p className="text-gray-600 pb-5 pl-9">Tutup mulut dan hidung Anda dengan kain basah atau pakaian untuk menghindari menghirup asap panas.</p>
                </div>
            </div>

            <div className="relative bg-white rounded-lg shadow-lg flex transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl">
                <div className="bg-[#FF3D00] text-white rounded-lg w-36 h-10 md:w-16 md:h-10 flex items-center justify-center mr-0 md:mr-4 p-1">
                    3
                </div>
                <div className="p-2">
                    <h2 className="font-semibold">Hindari Jalan yang Dikelilingi Api</h2>
                    <img src={kh3} alt="Logo" className="w-80 h-44 ml-0 mb-0 md:ml-10 md:mb-3 md:w-96 md:h-auto" />
                        <div className="flex gap-5 items-center">
                            <h1 className="font-semibold text-2xl">3</h1>
                            <h2 className="text-md font-semibold">Langkah Ketiga</h2>
                        </div>
                    <p className="text-gray-600 pb-5 pl-8">Jika terjebak di antara api, cari jalan keluar yang tidak dikelilingi oleh api. Jangan melarikan diri ke arah api yang sedang berkembang.</p>
                </div>
            </div>

            <div className="relative bg-white rounded-lg shadow-lg flex transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl">
                <div className="bg-[#FF3D00] text-white rounded-lg w-32 h-10 md:w-14 md:h-10 flex items-center justify-center mr-0 md:mr-4 p-1">
                    4
                </div>
                <div className="p-2">
                    <h2 className="font-semibold">Panggil Bantuan</h2>
                    <img src={b4} alt="Logo" className="w-80 h-44 ml-0 mb-0 md:ml-10 md:mb-3 md:w-96 md:h-auto" />
                        <div className="flex gap-5 items-center">
                            <h1 className="font-semibold text-2xl">4</h1>
                            <h2 className="text-md font-semibold">Langkah Keempat</h2>
                        </div>
                    <p className="text-gray-600 pb-5 pl-8">Jika memungkinkan, hubungi layanan darurat setempat atau pihak berwenang untuk meminta bantuan.</p>
                </div>
            </div>  
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 pt-20">
            <div className="relative bg-white rounded-lg shadow-lg flex transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl ">
                <div className="bg-[#FF3D00] text-white w-20 h-10 px-2 flex items-center rounded-lg justify-center mr-0 md:mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                    </svg>
                </div>
                <div className="p-2">
                    <h2 className="font-semibold p-1">Tips Mencegah Kebakaran Hutan</h2><hr className="border-gray-400" />
                    <h2 className="text-xl font-semibold mb-1 mt-3">Ini Merupakan Beberapa Tips Untuk Mencegah Bencana Alam Kebakaran Hutan</h2>
                    <p className="text-gray-600 pb-5">Mencegah kebakaran hutan memerlukan tindakan bijaksana dan terkoordinasi. Pertama, hindari pembakaran lahan, terutama di musim kemarau, dan jika harus, lakukan dengan izin dan pengawasan yang ketat. Edukasi masyarakat tentang bahaya kebakaran dan ajarkan praktik bertanggung jawab, seperti tidak membuang puntung rokok sembarangan.</p>
                </div>
            </div>
        </div>
    </div>
    </>
  );
};

export default EduSection;
