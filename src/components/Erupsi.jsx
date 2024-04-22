import React from 'react';
import Navbar from './Navbar';
import t1 from '../assets/images/EduImg/T1.png'
import e1 from '../assets/images/EduImg/E1.png'
import l3 from '../assets/images/EduImg/L3.png'
import l1 from '../assets/images/EduImg/L1.png'

const EduSection = () => {
  return (
    <>
    <Navbar />
    <div className="container mx-auto px-4 py-8 m-20">
        <h1 className="text-4xl font-semibold text-center tracking-wider">Edukasi Bencana <br />(Erupsi Gunung Berapi)</h1>
            <p className="text-sm text-center mt-4 tracking-wider">Ini merupakan edukasi tentang <br /> bagaimana jika terjadi bencana <br /> alam (Erupsi Gunung Berapi) di daerah kalian</p>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 pb-20 pt-10">
            <div className="relative bg-white rounded-lg shadow-lg flex transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl ">
                <div className="bg-[#FF3D00] text-white w-14 h-10 flex items-center rounded-lg justify-center mr-4 p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                    </svg>
                </div>
                <div className="p-2">
                    <h2 className="font-semibold p-1">Pengertian dan Penyebab </h2><hr className="border-gray-400" />
                    <h2 className="text-xl font-semibold mb-1 mt-3 pl-10">Erupsi Gunung Berapi</h2>
                    <p className="text-gray-600 pl-10 pb-5">Erupsi gunung berapi adalah peristiwa ketika magma, gas, dan material lainnya naik ke permukaan Bumi melalui saluran vulkanik. Tekanan dari dalam Bumi yang mendorong magma ke permukaan merupakan penyebab utama terjadinya erupsi. Faktor lain yang memicu erupsi meliputi aktivitas tektonik, aktivitas vulkanik sebelumnya, dan akumulasi gas dalam magma. Intensitas erupsi bervariasi tergantung pada viskositas magma, kandungan gas, dan faktor lainnya.</p>
                </div>
            </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-8 w">
            <div className="relative bg-white rounded-lg shadow-lg flex transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl">
                <div className="bg-[#FF3D00] text-white rounded-lg w-20 h-10 flex items-center justify-center mr-4 p-2">
                    1
                </div>
                <div className="p-2">
                    <h2 className="font-semibold">Mengikuti Instruksi Evakuasi</h2>
                    <img src={t1} alt="Logo" className="w-96 h-auto ml-10 mb-3" />
                        <div className="flex gap-5 items-center">
                            <h1 className="font-semibold text-2xl">1</h1>
                            <h2 className="text-md font-semibold">Langkah Pertama</h2>
                        </div>
                    <p className="text-gray-600 pb-5 pl-8">Segera ikuti instruksi evakuasi yang diberikan oleh pihak berwenang atau petugas penanggulangan bencana. Ini termasuk mengarah ke zona-zona evakuasi yang aman.</p>
                </div>
            </div>

            <div className="relative bg-white rounded-lg shadow-lg flex transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl">
                <div className="bg-[#FF3D00] text-white rounded-lg w-16 h-10 flex items-center justify-center mr-4 p-3">
                    2
                </div>
                <div className="p-2">
                    <h2 className="font-semibold">Menggunakan Perlindungan Respiratori</h2>
                    <img src={e1} alt="Logo" className="w-96 h-auto ml-10 mb-3" />
                        <div className="flex gap-5 items-center">
                            <h1 className="font-semibold text-2xl">2</h1>
                            <h2 className="text-md font-semibold">Langkah Kedua</h2>
                        </div>
                    <p className="text-gray-600 pb-5 pl-9">Gunakan masker atau kain basah untuk melindungi saluran pernapasan dari debu vulkanik dan gas beracun yang dapat membahayakan kesehatan.</p>
                </div>
            </div>

            <div className="relative bg-white rounded-lg shadow-lg flex transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl">
                <div className="bg-[#FF3D00] text-white rounded-lg w-20 h-10 flex items-center justify-center mr-4 p-1">
                    3
                </div>
                <div className="p-2">
                    <h2 className="font-semibold">Menghindari Daerah Rawan</h2>
                    <img src={l3} alt="Logo" className="w-96 h-auto ml-10 mb-3" />
                        <div className="flex gap-5 items-center">
                            <h1 className="font-semibold text-2xl">3</h1>
                            <h2 className="text-md font-semibold">Langkah Ketiga</h2>
                        </div>
                    <p className="text-gray-600 pb-5 pl-8">Hindari daerah yang terkena dampak langsung erupsi, seperti daerah yang terdapat aliran lava, awan panas, atau lahar (banjir lumpur vulkanik).</p>
                </div>
            </div>

            <div className="relative bg-white rounded-lg shadow-lg flex transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl">
                <div className="bg-[#FF3D00] text-white rounded-lg w-20 h-10 flex items-center justify-center mr-4 p-1">
                    4
                </div>
                <div className="p-2">
                    <h2 className="font-semibold">Mencari Tempat Perlindungan</h2>
                    <img src={l1} alt="Logo" className="w-96 h-auto ml-10 mb-3" />
                        <div className="flex gap-5 items-center">
                            <h1 className="font-semibold text-2xl">4</h1>
                            <h2 className="text-md font-semibold">Langkah Keempat</h2>
                        </div>
                    <p className="text-gray-600 pb-5 pl-8">Jika tidak dapat menghindari daerah erupsi, cari tempat perlindungan yang aman, seperti bangunan yang kuat atau tanah yang lebih tinggi dari daerah bahaya.</p>
                </div>
            </div>  
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 pt-20">
            <div className="relative bg-white rounded-lg shadow-lg flex transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl ">
                <div className="bg-[#FF3D00] text-white w-20 h-10 px-2 flex items-center rounded-lg justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                    </svg>
                </div>
                <div className="p-2">
                    <h2 className="font-semibold p-1">Tips Mencegah Erupsi Gunung Berapi</h2><hr className="border-gray-400" />
                    <h2 className="text-xl font-semibold mb-1 mt-3 pl-10">Ini Merupakan Beberapa Tips Untuk Mencegah Bencana Alam Erupsi Gunung Berapi</h2>
                    <p className="text-gray-600 pl-10 pb-5">Untuk mencegah bencana alam erupsi gunung berapi, penting untuk selalu memantau aktivitas gunung berapi dan mengikuti petunjuk evakuasi yang diberikan oleh otoritas setempat. Mengetahui rute evakuasi dan menjaga kesehatan serta kebersihan saat terjadi erupsi juga sangat penting. Selain itu, perlu diingat untuk menjauhi daerah yang berpotensi terkena awan panas dan membangun struktur yang tahan terhadap erupsi gunung berapi jika tinggal di daerah rawan. Persiapkan juga perlengkapan darurat yang diperlukan untuk bertahan dalam situasi darurat akibat erupsi gunung berapi.</p>
                </div>
            </div>
        </div>
    </div>
    </>
  );
};

export default EduSection;
