import React from 'react';
import Navbar from './Navbar';
import l1 from '../assets/images/EduImg/L1.png'
import l2 from '../assets/images/EduImg/L2.png'
import l3 from '../assets/images/EduImg/L3.png'
import l4 from '../assets/images/EduImg/L4.png'

const EduSection = () => {
  return (
    <>
    <Navbar />
    <div className="container mx-auto px-4 py-8 m-20">
        <h1 className="text-4xl font-semibold text-center tracking-wider">Edukasi Bencana <br />(Longsor)</h1>
            <p className="text-sm text-center mt-4 tracking-wider">Ini merupakan edukasi tentang <br /> bagaimana jika terjadi bencana <br /> alam (Longsor) di daerah kalian</p>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 pb-20 pt-10">
            <div className="relative bg-white rounded-lg shadow-lg flex transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl ">
                <div className="bg-[#FF3D00] text-white w-14 h-10 flex items-center rounded-lg justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                    </svg>
                </div>
                <div className="p-2">
                    <h2 className="font-semibold p-1">Pengertian dan Penyebab </h2><hr className="border-gray-400" />
                    <h2 className="text-xl font-semibold mb-1 mt-3 pl-10">Longsor</h2>
                    <p className="text-gray-600 pl-10 pb-5">Longsor adalah peristiwa ketika tanah atau batuan tiba-tiba jatuh dari lereng. Penyebabnya bisa beragam, termasuk hujan deras, pengikisan oleh air, pembangunan, gempa bumi, kondisi geologi, dan deforestasi.</p>
                </div>
            </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-8 w">
            <div className="relative bg-white rounded-lg shadow-lg flex transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl">
                <div className="bg-[#FF3D00] text-white rounded-lg w-24 h-10 flex items-center justify-center mr-4 p-2">
                    1
                </div>
                <div className="p-2">
                    <h2 className="font-semibold">Segera Berlindung</h2>
                    <img src={l1} alt="Logo" className="w-96 h-auto ml-10 mb-3" />
                        <div className="flex gap-5 items-center">
                            <h1 className="font-semibold text-2xl">1</h1>
                            <h2 className="text-md font-semibold">Langkah Pertama</h2>
                        </div>
                    <p className="text-gray-600 pb-5 pl-8">Jika Anda melihat tanah atau batuan bergerak, segera cari tempat perlindungan. Pilihlah tempat yang terlindung dari longsoran, seperti di balik batu besar atau pohon besar. Hindari berlindung di bawah pohon kecil atau di dekat tepi tebing.</p>
                </div>
            </div>

            <div className="relative bg-white rounded-lg shadow-lg flex transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl">
                <div className="bg-[#FF3D00] text-white rounded-lg w-24 h-10 flex items-center justify-center mr-4 p-2">
                    2
                </div>
                <div className="p-2">
                    <h2 className="font-semibold">Berusaha Naik ke Tempat yang Lebih Tinggi</h2>
                    <img src={l2} alt="Logo" className="w-96 h-auto ml-10 mb-3" />
                        <div className="flex gap-5 items-center">
                            <h1 className="font-semibold text-2xl">2</h1>
                            <h2 className="text-md font-semibold">Langkah Kedua</h2>
                        </div>
                    <p className="text-gray-600 pb-5 pl-9">Jika Anda tidak dapat mencapai tempat perlindungan, berusaha untuk naik ke tempat yang lebih tinggi. Longsoran cenderung bergerak ke arah bawah, jadi berada di tempat yang lebih tinggi dapat meningkatkan keselamatan Anda.</p>
                </div>
            </div>

            <div className="relative bg-white rounded-lg shadow-lg flex transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl">
                <div className="bg-[#FF3D00] text-white rounded-lg w-20 h-10 flex items-center justify-center mr-4 p-2">
                    3
                </div>
                <div className="p-2">
                    <h2 className="font-semibold">Hindari Jalan Turun</h2>
                    <img src={l3} alt="Logo" className="w-96 h-auto ml-10 mb-3" />
                        <div className="flex gap-5 items-center">
                            <h1 className="font-semibold text-2xl">3</h1>
                            <h2 className="text-md font-semibold">Langkah Ketiga</h2>
                        </div>
                    <p className="text-gray-600 pb-5 pl-8">Jika Anda sedang berada di lereng yang terkena longsor, hindari jalan turun. Lebih baik mencoba mendaki ke tempat yang lebih tinggi atau berlindung di tempat yang aman.</p>
                </div>
            </div>

            <div className="relative bg-white rounded-lg shadow-lg flex transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl">
                <div className="bg-[#FF3D00] text-white rounded-lg w-24 h-10 flex items-center justify-center mr-4 p-2">
                    4
                </div>
                <div className="p-2">
                    <h2 className="font-semibold">Hindari Wilayah Terbuka</h2>
                    <img src={l4} alt="Logo" className="w-96 h-auto ml-10 mb-3" />
                        <div className="flex gap-5 items-center">
                            <h1 className="font-semibold text-2xl">4</h1>
                            <h2 className="text-md font-semibold">Langkah Keempat</h2>
                        </div>
                    <p className="text-gray-600 pb-5 pl-8">Jika Anda berada di daerah terbuka yang terkena ancaman longsor, segera pindah ke daerah yang lebih aman. Hindari daerah yang terbuka dan terkena hujan, karena ini dapat meningkatkan risiko longsor.</p>
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
                    <h2 className="font-semibold p-1">Tips Mencegah Longsor</h2><hr className="border-gray-400" />
                    <h2 className="text-xl font-semibold mb-1 mt-3 pl-10">Ini Merupakan Beberapa Tips Untuk Mencegah Bencana Alam Longsor</h2>
                    <p className="text-gray-600 pl-10 pb-5">Untuk mencegah bencana alam longsor, langkah-langkah pencegahan yang dapat dilakukan antara lain adalah mengidentifikasi area rentan longsor dan menggunakan peta bahaya longsor, menjaga kestabilan tanah dengan menanam pohon dan menerapkan teknik konservasi tanah, memastikan sistem drainase yang baik untuk menghindari genangan air, menggunakan teknik penguatan lereng seperti terracing, menjaga jalan dan bangunan agar tidak merusak tanah, menghindari pembangunan di lereng curam, membangun sistem peringatan dini, mengedukasi masyarakat tentang bahaya longsor, menyusun rencana darurat dan melaksanakan latihan evakuasi secara berkala, serta terus memantau kondisi lingkungan dan mengevaluasi efektivitas langkah-langkah pencegahan yang telah diimplementasikan. Dengan kolaborasi antara pemerintah, komunitas, dan ahli geologi, upaya pencegahan longsor dapat dilakukan secara efektif.</p>
                </div>
            </div>
        </div>
    </div>
    </>
  );
};

export default EduSection;
