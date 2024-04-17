import React from 'react';

export default function InfoSection() {
  return (
    <div className="text-center mt-24 mx-auto">
      <h1 className="font-semibold text-4xl">Data Informasi Pelaporan</h1>
      <p className="pt-3">Ini merupakan informasi mengenai <br></br> bencana alam yang terjadi disekitar<br></br> lingkungan masyarakat</p>
      <table className="border-collapse border border-gray-600 rounded-lg mt-4 mx-auto">
        <thead>
          <tr>
            <th className="border border-gray-400 bg-gray-300 px-4 py-2 font-normal">No</th>
            <th className="border border-gray-400 bg-gray-300 px-4 py-2 font-normal w-72 text-start">Nama Bencana</th>
            <th className="border border-gray-400 bg-gray-300 px-4 py-2 font-normal w-96 text-start">Lokasi</th>
            <th className="border border-gray-400 bg-gray-300 px-4 py-2 font-normal w-32 text-start">Suara</th>
            <th className="border border-gray-400 bg-gray-300 px-4 py-2 font-normal w-24">Y/N</th>
          </tr>
        </thead>
        <tbody className="text-start">
          
        </tbody>
      </table>
    </div>
  );
}
