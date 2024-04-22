import React from 'react';
import Navbar from './Navbar';
import b1 from '../assets/images/EduImg/B1.png'
import b3 from '../assets/images/EduImg/B3.png'
import g1 from '../assets/images/EduImg/G1.png'
import g2 from '../assets/images/EduImg/G2.png'

const EduSection = () => {
  return (
    <>
    <Navbar />
    <div className="container mx-auto px-4 py-8 m-20">
        <h1 className="text-4xl font-semibold text-center tracking-wider">Edukasi Bencana <br />(Gempa Bumi)</h1>
            <p className="text-sm text-center mt-4 tracking-wider">Ini merupakan edukasi tentang <br /> bagaimana jika terjadi bencana <br /> alam (Gempa Bumi) di daerah kalian</p>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 pb-20 pt-10">
            <div className="relative bg-white rounded-lg shadow-lg flex transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl ">
                <div className="bg-[#FF3D00] text-white w-14 h-10 flex items-center rounded-lg justify-center mr-4 p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                    </svg>
                </div>
                <div className="p-2">
                    <h2 className="font-semibold p-1">Pengertian dan Penyebab </h2><hr className="border-gray-400" />
                    <h2 className="text-xl font-semibold mb-1 mt-3 pl-10">Gempa Bumi</h2>
                    <p className="text-gray-600 pl-10 pb-5">Gempa bumi adalah getaran yang terjadi di permukaan bumi akibat pelepasan energi dari dalam bumi. Penyebab utama gempa bumi adalah pergerakan lempeng tektonik yang saling bergerak atau bertabrakan. Tektonika lempeng ini dapat menyebabkan retakan di dalam bumi yang kemudian memicu terjadinya gempa bumi.</p>
                </div>
            </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-8 w">
            <div className="relative bg-white rounded-lg shadow-lg flex transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl">
                <div className="bg-[#FF3D00] text-white rounded-lg w-20 h-10 flex items-center justify-center mr-4 p-2">
                    1
                </div>
                <div className="p-2">
                    <h2 className="font-semibold">Jaga Ketenangan dan Hindari Panik</h2>
                    <img src={b1} alt="Logo" className="w-96 h-auto ml-10 mb-3" />
                        <div className="flex gap-5 items-center">
                            <h1 className="font-semibold text-2xl">1</h1>
                            <h2 className="text-md font-semibold">Langkah Pertama</h2>
                        </div>
                    <p className="text-gray-600 pb-5 pl-8">Pertahankan ketenangan dan hindari panik. Bersikap tenang memungkinkan Anda untuk berpikir dengan jernih dan mengambil langkah-langkah yang tepat untuk menyelamatkan diri.</p>
                </div>
            </div>

            <div className="relative bg-white rounded-lg shadow-lg flex transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl">
                <div className="bg-[#FF3D00] text-white rounded-lg w-20 h-10 flex items-center justify-center mr-4 p-3">
                    2
                </div>
                <div className="p-2">
                    <h2 className="font-semibold">Cari Tempat Penyelamatan yang Aman</h2>
                    <img src={b3} alt="Logo" className="w-96 h-auto ml-10 mb-3" />
                        <div className="flex gap-5 items-center">
                            <h1 className="font-semibold text-2xl">2</h1>
                            <h2 className="text-md font-semibold">Langkah Kedua</h2>
                        </div>
                    <p className="text-gray-600 pb-5 pl-9">Jika berada di dalam bangunan, cari tempat yang aman di bawah meja, tempat tidur, atau struktur bangunan lain yang kuat. Hindari tempat dengan potensi objek jatuh seperti kaca, cermin, atau perabotan yang dapat melukai Anda.</p>
                </div>
            </div>

            <div className="relative bg-white rounded-lg shadow-lg flex transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl">
                <div className="bg-[#FF3D00] text-white rounded-lg w-14 h-10 flex items-center justify-center mr-4 p-1">
                    3
                </div>
                <div className="p-2">
                    <h2 className="font-semibold">Hindari Elevator</h2>
                    <img src={g1} alt="Logo" className="w-96 h-auto ml-10 mb-3" />
                        <div className="flex gap-5 items-center">
                            <h1 className="font-semibold text-2xl">3</h1>
                            <h2 className="text-md font-semibold">Langkah Ketiga</h2>
                        </div>
                    <p className="text-gray-600 pb-5 pl-8">Jangan menggunakan elevator selama atau setelah gempa bumi. Gunakan tangga untuk evakuasi.</p>
                </div>
            </div>

            <div className="relative bg-white rounded-lg shadow-lg flex transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl">
                <div className="bg-[#FF3D00] text-white rounded-lg w-36 h-10 flex items-center justify-center mr-4 p-1">
                    4
                </div>
                <div className="p-2">
                    <h2 className="font-semibold">Setelah Gempa Bumi Berhenti, Periksa Kondisi Sekitar</h2>
                    <img src={g2} alt="Logo" className="w-96 h-auto ml-10 mb-3" />
                        <div className="flex gap-5 items-center">
                            <h1 className="font-semibold text-2xl">4</h1>
                            <h2 className="text-md font-semibold">Langkah Keempat</h2>
                        </div>
                    <p className="text-gray-600 pb-5 pl-8">Setelah getaran berhenti, periksa kondisi sekitar Anda segera. Segera keluar dari bangunan jika ada indikasi kerusakan yang serius. Jika Anda terperangkap, berusaha untuk memberi tahu penyelamat potensial posisi Anda dan berkomunikasi melalui telepon atau pesan singkat jika mungkin.</p>
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
                    <h2 className="font-semibold p-1">Tips Mencegah Gempa Bumi</h2><hr className="border-gray-400" />
                    <h2 className="text-xl font-semibold mb-1 mt-3 pl-10">Ini Merupakan Beberapa Tips Untuk Mencegah Bencana Alam Gempa Bumi</h2>
                    <p className="text-gray-600 pl-10 pb-5">Untuk mencegah dampak buruk dari gempa bumi, ada beberapa langkah yang dapat diambil. Pertama, bangun rumah dengan material yang kuat seperti beton yang diperkuat. Kedua, perkuat struktur bangunan dengan fondasi yang kokoh dan dinding yang kuat. Ketiga, rutin periksa dan perbaiki kerusakan kecil pada bangunan. Keempat, pastikan barang-barang yang mudah jatuh diletakkan di tempat yang aman. Kelima, simpan barang-barang berat di bawah rak atau meja. Keenam, buat rencana evakuasi darurat dan pastikan semua anggota keluarga mengetahuinya. Ketujuh, ikuti panduan evakuasi yang diberikan oleh pihak berwenang. Dengan langkah-langkah ini, Anda dapat membantu melindungi diri sendiri dan keluarga dari bahaya gempa bumi.</p>
                </div>
            </div>
        </div>
    </div>
    </>
  );
};

export default EduSection;
