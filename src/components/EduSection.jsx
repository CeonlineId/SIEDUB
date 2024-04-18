import React from 'react';

const EduSection = () => {
  return (
    <div className="container mx-auto px-4 py-8 m-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 ">
        {/* Kartu 1 */}
        <a href="/edukasi/banjir"><div className="relative bg-white rounded-lg shadow-lg p-6 flex items-center transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl ">
          <div className="bg-[#FF3D00] text-white rounded-full w-8 h-24 flex items-center justify-center mr-4">
            1
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Banjir</h2>
            <p className="text-gray-600 ">Informasi dan tips mengenai penanganan banjir.</p>
          </div>
        </div></a>
        
        {/* Kartu 2 */}
        <a href=""><div className="relative bg-white rounded-lg shadow-lg p-6 flex items-center transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl">
          <div className="bg-[#FF3D00] text-white rounded-full w-8 h-24 flex items-center justify-center mr-4">
            2
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Kebakaran Hutan</h2>
            <p className="text-gray-600">Informasi dan tips mengenai penanganan kebakaran hutan.</p>
          </div>
        </div></a>
        
        {/* Kartu 3 */}
        <a href=""> <div className="relative bg-white rounded-lg shadow-lg p-6 flex items-center transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl">
          <div className="bg-[#FF3D00] text-white rounded-full w-8 h-24 flex items-center justify-center mr-4">
            3
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Longsor</h2>
            <p className="text-gray-600">Informasi dan tips mengenai penanganan longsor.</p>
          </div>
        </div></a>
       
        {/* Kartu 4 */}
        <a href=""><div className="relative bg-white rounded-lg shadow-lg p-6 flex items-center transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl">
          <div className="bg-[#FF3D00] text-white rounded-full w-8 h-24 flex items-center justify-center mr-4">
            4
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Tsunami</h2>
            <p className="text-gray-600">Informasi dan tips mengenai penanganan tsunami.</p>
          </div>
        </div></a>
        
        {/* Kartu 5 */}
        <a href=""><div className="relative bg-white rounded-lg shadow-lg p-6 flex items-center transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl">
          <div className="bg-[#FF3D00] text-white rounded-full w-8 h-24 flex items-center justify-center mr-4">
            5
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Erupsi</h2>
            <p className="text-gray-600">Informasi dan tips mengenai penanganan erupsi.</p>
          </div>
        </div></a>
        
        {/* Kartu 6 */}
        <a href=""><div className="relative bg-white rounded-lg shadow-lg p-6 flex items-center transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl">
          <div className="bg-[#FF3D00] text-white rounded-full w-8 h-24 flex items-center justify-center mr-4">
            6
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Gempa</h2>
            <p className="text-gray-600">Informasi dan tips mengenai penanganan gempa bumi.</p>
          </div>
        </div></a>
        
      </div>
    </div>
  );
};

export default EduSection;
