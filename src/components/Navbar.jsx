import React, { useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import logo from '../assets/images/logoW.png';
import tutor from '../assets/images/tutor.png';
import '../utils/firebaseConfig';
import { getFirestore, addDoc, collection } from 'firebase/firestore';
import { uploadImageToStorage } from '../utils/uploadImageToStorage';
import CircularProgress from '@mui/material/CircularProgress';

const ReportForm = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [fullName, setFullName] = useState('');
  const [disasterType, setDisasterType] = useState('');
  const [location, setLocation] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const db = getFirestore();
  let navigate = useNavigate();

  const saveReportData = async () => {
    setIsSending(true);
    try {
      const docRef = await addDoc(collection(db, 'report'), {
        phoneNumber: phoneNumber,
        fullName: fullName,
        disasterType: disasterType,
        location: location,
        imageUrl: imageUrl,
        isTrue: 0,
        isFalse: 0,
      });
      alert('Laporan berhasil dikirim!');
      navigate('/');
    } catch (error) {
      console.error('Error saving data:', error);
      alert('Gagal mengirim laporan!');
    }
    setIsSending(false);
  };

  const handleFileChange = async event => {
    const file = event.target.files[0];
    if (file) {
      setIsUploading(true);
      try {
        const storagePath = `images/${file.name}`;
        const downloadURL = await uploadImageToStorage(file, storagePath);
        setImageUrl(downloadURL);
        setIsUploading(false);
      } catch (error) {
        alert('Gagal menambahkan gambar!');
        setIsUploading(false);
      }
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {(isUploading || isSending) && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <CircularProgress color="inherit" />
        </div>
      )}
      <nav className="bg-[#FF3D00] text-white p-4 px-4 lg:px-20 fixed top-0 left-0 w-full z-10">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4 text-lg font-semibold">
            <button
              className="block lg:hidden"
              onClick={toggleSidebar}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
            <Link to="/" className="w-32 h-10">
              <img src={logo} alt="Logo" className="w-full h-full" />
            </Link>
            {/* Tampilkan menu navigasi hanya pada perangkat non-mobile */}
            <div className="hidden lg:flex items-center gap-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? 'text-white border-b-2 border-white'
                    : 'text-white hover:border-b-2 hover:border-white'
                }
              >
                Beranda
              </NavLink>
              <NavLink
                to="/informasi"
                className="border border-white border-3 hover:bg-white focus:bg-white text-white hover:text-[#FF3D00] focus:text-[#FF3D00] font-semibold py-1 px-5 rounded"
              >
                Informasi
              </NavLink>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <div className={`fixed lg:hidden top-0 left-0 h-full w-full bg-[#FF3D00] text-white z-20 transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-4">
          {/* Tambahkan link untuk menu navigasi */}
          <NavLink
            to="/informasi"
            className="block py-2 text-lg text-center border-b border-white"
          >
            Informasi
          </NavLink>
        </div>
      </div>

      {/* Overlay untuk menutup sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Konten Form Pelaporan Bencana */}
      <section className="mx-auto p-4 flex justify-center items-center min-h-screen relative">
        {/* Form dan konten lainnya */}
        <form
          className="w-full max-w-full grid grid-cols-1 gap-y-2 bg-white p-10 m-8 md:m-32 mt-10 mb-10 text-center rounded-lg shadow-lg"
          onSubmit={e => {
            e.preventDefault();
            saveReportData();
          }}
        >
          <button
            className="bg-[#FF3D00] text-white p-2 mb-3 rounded-full w-full md:w-96 block mx-auto"
            disabled
          >
            Laporkan Bencana
          </button>
          <a href="#" className="text-gray-400 pb-3">
            Cara melapor dengan baik?
          </a>
          <input
            type="number"
            className="mx-auto bg bg-gray-100 p-3 mb-6 rounded-xl w-full md:w-96"
            placeholder="Nomor Hp"
            value={phoneNumber}
            onChange={e => setPhoneNumber(e.target.value)}
            required
          />
          <input
            type="text"
            className="mx-auto bg bg-gray-100 p-3 mb-6 rounded-xl w-full md:w-96"
            placeholder="Nama Lengkap"
            value={fullName}
            onChange={e => setFullName(e.target.value)}
            required
          />
          <input
            type="text"
            className="mx-auto bg bg-gray-100 p-3 mb-6 rounded-xl w-full md:w-96"
            placeholder="Jenis Bencana"
            value={disasterType}
            onChange={e => setDisasterType(e.target.value)}
            required
          />
          <input
            type="text"
            className="mx-auto bg bg-gray-100 p-3 mb-6 rounded-xl w-full md:w-96"
            placeholder="Lokasi"
            value={location}
            onChange={e => setLocation(e.target.value)}
            required
          />

          <button className="bg-[#FF3D00] text-white p-2 rounded-xl w-full md:w-19 h-19 block mx-auto relative">
            <input
              accept="image/*"
              capture="environment"
              type="file"
              className="absolute inset-0 opacity-0"
              onChange={handleFileChange}
              required
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1"
              stroke="currentColor"
              className="w-12 h-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
              />
            </svg>
          </button>

          <p className="text-sm text-slate-400">
            {imageUrl ? 'Gambar Tersimpan' : 'Kirim Foto Kejadian'}
          </p>
          <button
            type="submit"
            className="w-full md:w-24 h-10 justify-self-end bg-[#FF3D00] rounded-lg text-white"
          >
            Kirim
          </button>
        </form>
      </section>

      <div className="container mx-auto flex flex-col items-center pb-10">
        <img src={tutor} alt="Tutorial" className="w-full md:w-96 h-28" />
      </div>
    </>
  );
};

export default ReportForm;
