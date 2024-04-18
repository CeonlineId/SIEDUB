import React from 'react';
import Navbar from './Navbar';
import b1 from '../assets/images/EduImg/B1.png'
import b2 from '../assets/images/EduImg/B2.png'
import b3 from '../assets/images/EduImg/B3.png'
import b4 from '../assets/images/EduImg/B4.png'

const EduSection = () => {
  return (
    <>
    <Navbar />
    <div className="container mx-auto px-4 py-8 m-20">
        <h1 className="text-4xl font-semibold text-center tracking-wider">Edukasi Bencana <br />(Banjir)</h1>
            <p className="text-sm text-center mt-4 tracking-wider">Ini merupakan edukasi tentang <br /> bagaimana jika terjadi bencana <br /> alam (Banjir) di daerah kalian</p>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 pb-20 pt-10">
            <div className="relative bg-white rounded-lg shadow-lg flex transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl ">
                <div className="bg-[#FF3D00] text-white w-20 h-10 flex items-center rounded-lg justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                    </svg>
                </div>
                <div className="p-2">
                    <h2 className="font-semibold p-1">Pengertian dan Penyebab </h2><hr className="border-gray-400" />
                    <h2 className="text-xl font-semibold mb-1 mt-3 pl-10">Banjir</h2>
                    <p className="text-gray-600 pl-10 pb-5">Banjir adalah peristiwa alam di mana air meluap dan mencakup area yang biasanya kering. Penyebabnya bisa termasuk hujan deras, sungai yang meluap, topografi datar, pencairan salju, letusan gunung berapi, perubahan tanah oleh manusia, serta infrastruktur yang buruk. Perubahan iklim juga semakin mempengaruhi kejadian banjir.</p>
                </div>
            </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-8 w">
            <div className="relative bg-white rounded-lg shadow-lg flex transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl">
                <div className="bg-[#FF3D00] text-white rounded-lg w-32 h-10 flex items-center justify-center mr-4">
                    1
                </div>
                <div className="p-2">
                    <h2 className="font-semibold">Tingkatkan Kewaspadaan</h2>
                    <img src={b1} alt="Logo" className="w-96 h-auto ml-10 mb-3" />
                        <div className="flex gap-5 items-center">
                            <h1 className="font-semibold text-2xl">1</h1>
                            <h2 className="text-md font-semibold">Langkah Pertama</h2>
                        </div>
                    <p className="text-gray-600 pb-5 pl-8">Pertama-tama, penting untuk selalu waspada terhadap kondisi cuaca dan peringatan banjir dari otoritas setempat. Perhatikan tanda-tanda awal banjir seperti peningkatan tinggi air sungai atau genangan air di sekitar area Anda.</p>
                </div>
            </div>

            <div className="relative bg-white rounded-lg shadow-lg flex transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl">
                <div className="bg-[#FF3D00] text-white rounded-lg w-32 h-10 flex items-center justify-center mr-4">
                    2
                </div>
                <div className="p-2">
                    <h2 className="font-semibold">Segera Pindah Ke Tempat Yang Lebih Tinggi</h2>
                    <img src={b2} alt="Logo" className="w-96 h-auto ml-10 mb-3" />
                        <div className="flex gap-5 items-center">
                            <h1 className="font-semibold text-2xl">2</h1>
                            <h2 className="text-md font-semibold">Langkah Kedua</h2>
                        </div>
                    <p className="text-gray-600 pb-5 pl-9">Jika Anda mendapatkan peringatan atau melihat tanda-tanda banjir, segera pindah ke tempat yang lebih tinggi. Pindahlah ke lantai atas rumah atau bangunan, atau ke tempat yang lebih tinggi di daerah sekitar Anda.</p>
                </div>
            </div>

            <div className="relative bg-white rounded-lg shadow-lg flex transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl">
                <div className="bg-[#FF3D00] text-white rounded-lg w-24 h-10 flex items-center justify-center mr-4">
                    3
                </div>
                <div className="p-2">
                    <h2 className="font-semibold">Cari Jalur Evakuasi yang Aman</h2>
                    <img src={b3} alt="Logo" className="w-96 h-auto ml-10 mb-3" />
                        <div className="flex gap-5 items-center">
                            <h1 className="font-semibold text-2xl">3</h1>
                            <h2 className="text-md font-semibold">Langkah Ketiga</h2>
                        </div>
                    <p className="text-gray-600 pb-5 pl-8">Jika Anda terjebak di area yang terendam banjir, carilah jalur evakuasi yang aman. Hindari berjalan melawan arus air dan cari rute yang lebih tinggi dan stabil.</p>
                </div>
            </div>

            <div className="relative bg-white rounded-lg shadow-lg flex transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl">
                <div className="bg-[#FF3D00] text-white rounded-lg w-36 h-10 flex items-center justify-center mr-4">
                    4
                </div>
                <div className="p-2">
                    <h2 className="font-semibold">Tingkatkan Kewaspadaan</h2>
                    <img src={b4} alt="Logo" className="w-96 h-auto ml-10 mb-3" />
                        <div className="flex gap-5 items-center">
                            <h1 className="font-semibold text-2xl">4</h1>
                            <h2 className="text-md font-semibold">Langkah Keempat</h2>
                        </div>
                    <p className="text-gray-600 pb-5 pl-8">Jika Anda memerlukan bantuan atau merasa dalam bahaya, segera hubungi layanan darurat setempat seperti polisi, pemadam kebakaran, atau tim penyelamat. Berikan informasi yang jelas tentang lokasi Anda dan situasi yang sedang terjadi.</p>
                </div>
            </div>  
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 pt-20">
            <div className="relative bg-white rounded-lg shadow-lg flex transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl ">
                <div className="bg-[#FF3D00] text-white w-11 h-10 flex items-center rounded-lg justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                    </svg>
                </div>
                <div className="p-2">
                    <h2 className="font-semibold p-1">Tips Mencegah Banjir</h2><hr className="border-gray-400" />
                    <h2 className="text-xl font-semibold mb-1 mt-3 pl-10">Ini Merupakan Beberapa Tips Untuk Mencegah Bencana Alam Banjir</h2>
                    <p className="text-gray-600 pl-10 pb-5">Membangun tanggul, merawat saluran air, dan menghindari pemukiman di daerah rawan banjir sangat penting untuk mengurangi risiko banjir.</p>
                </div>
            </div>
        </div>
    </div>
    </>
  );
};

export default EduSection;
