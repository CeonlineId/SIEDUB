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
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [informasiBelow, setInformasiBelow] = useState(false);

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
    setSidebarOpen(!sidebarOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
    setInformasiBelow(!informasiBelow);
  };

    return (
        <>
          {(isUploading || isSending) && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
              <CircularProgress color="inherit" />
            </div>
          )}
          {/* Navbar */}
          <nav className="bg-[#FF3D00] text-white p-4 px-4 md:px-20 fixed top-0 left-0 w-full z-10">
            <div className="container mx-auto flex justify-between items-center">
              <div className="flex items-center gap-4 text-lg font-semibold">
                <Link to="/" className="w-32 h-10">
                  <img src={logo} alt="Logo" className="w-full h-full" />
                </Link>
                <div className="hidden md:flex items-center gap-8">
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
                  <div className="relative">
                    <p
                      className="text-white hover:cursor-pointer hover:border-b-2 hover:border-white flex gap-1 items-center"
                      onClick={toggleDropdown}
                    >
                      Edukasi
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </p>
                    {dropdownOpen && (
                      <div className="absolute top-full left-0 bg-gray-800 shadow-md rounded-md mt-1 py-2 w-48 font-normal text-sm">
                        <NavLink
                          to="/edukasi/banjir"
                          className="block px-4 py-2 text-white hover:bg-gray-700"
                        >
                          Banjir
                        </NavLink>
                        <NavLink
                          to="/edukasi/kebakaran-hutan"
                          className="block px-4 py-2 text-white hover:bg-gray-700"
                        >
                          Kebakaran Hutan
                        </NavLink>
                        <NavLink
                          to="/edukasi/longsor"
                          className="block px-4 py-2 text-white hover:bg-gray-700"
                        >
                          Longsor
                        </NavLink>
                        <NavLink
                          to="/edukasi/tsunami"
                          className="block px-4 py-2 text-white hover:bg-gray-700"
                        >
                          Tsunami
                        </NavLink>
                        <NavLink
                          to="/edukasi/erupsi-gunung-berapi"
                          className="block px-4 py-2 text-white hover:bg-gray-700"
                        >
                          Erupsi
                        </NavLink>
                        <NavLink
                          to="/edukasi/gempa-bumi"
                          className="block px-4 py-2 text-white hover:bg-gray-700"
                        >
                          Gempa
                        </NavLink>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex gap-4 px-4 md:px-14">
                <NavLink
                  to="/informasi"
                  className={
                    location.pathname === '/informasi'
                      ? 'bg-white text-white font-semibold py-1 px-5 rounded border border-white hidden md:flex'
                      : 'hover:bg-white focus:bg-white text-white hover:text-[#FF3D00] focus:text-white font-semibold py-1 px-5 rounded border border-white hidden md:flex'
                  }
                >
                  Informasi
                </NavLink>
                {/* Tombol hamburger */}
                <button
                  className="md:hidden focus:outline-none"
                  onClick={toggleSidebar}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </nav>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="pt-16 absolute top-0 left-0 z-0 w-full"
          >
            <path
              fill="#FF3D00"
              fillOpacity="1"
              d="M0,224L26.7,208C53.3,192,107,160,160,149.3C213.3,139,267,149,320,170.7C373.3,192,427,224,480,245.3C533.3,267,587,277,640,256C693.3,235,747,181,800,144C853.3,107,907,85,960,101.3C1013.3,117,1067,171,1120,181.3C1173.3,192,1227,160,1280,160C1333.3,160,1387,192,1413,208L1440,224L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"
            ></path>
          </svg>
          <h1 className="text-4xl text-white text-center font-semibold mt-20 mb-4 relative z-10">
            Form Pelaporan Bencana
          </h1>
          <p className="text-white relative z-10 text-center text-sm">
            Silahkan Laporkan kejadian <br />
            Bencana Alam Yang Terjadi di Daerah anda
          </p>
          {/* Sidebar */}
          {sidebarOpen && (
            <div className="md:hidden fixed inset-y-0 right-0 bg-[#1E1E1E] z-20 w-64 shadow-md">
              <div className="flex items-center justify-center px-2 mr-10 relative">
                <img src={logo} alt="Logo" className="w-42 h-10 m-5 mr-10" />
                <a onClick={toggleSidebar} className="flex items-center justify-center">
                  <div className="absolute w-8 h-8 bg-white opacity-5 rounded-full"></div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </a>
              </div>
              <div className="flex flex-col py-4 ">
                <NavLink to="/" className="flex items-center px-4 py-2 text-white hover:bg-gray-700">
                  <div className="flex items-start justify-start px-1 py-2">
                    <svg xmlns="http://www.w3.org/20040/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                  </div>
                  <span className="ml-4">Beranda</span>
                </NavLink>

                <NavLink className="flex items-center px-4 py-2 text-white hover:bg-gray-700" onClick={toggleDropdown}>
                  <div className="relative">
                    <div className="flex items-start justify-start px-1 py-2" >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                      </svg>
                      <span className="ml-5">Edukasi</span>
                    </div>
                    {dropdownOpen && (
                      <div className="absolute top-full left-0 shadow-lg rounded-md mt-1 py-2 w-48 font-normal text-sm border border-gray-600 ml-8">
                        <NavLink
                          to="/edukasi/banjir"
                          className="block px-4 py-2 text-white hover:bg-gray-700"
                        >
                          Banjir
                        </NavLink>
                        <NavLink
                          to="/edukasi/kebakaran-hutan"
                          className="block px-4 py-2 text-white hover:bg-gray-700"
                        >
                          Kebakaran Hutan
                        </NavLink>
                        <NavLink
                          to="/edukasi/longsor"
                          className="block px-4 py-2 text-white hover:bg-gray-700"
                        >
                          Longsor
                        </NavLink>
                        <NavLink
                          to="/edukasi/tsunami"
                          className="block px-4 py-2 text-white hover:bg-gray-700"
                        >
                          Tsunami
                        </NavLink>
                        <NavLink
                          to="/edukasi/erupsi-gunung-berapi"
                          className="block px-4 py-2 text-white hover:bg-gray-700"
                        >
                          Erupsi
                        </NavLink>
                        <NavLink
                          to="/edukasi/gempa-bumi"
                          className="block px-4 py-2 text-white hover:bg-gray-700"
                        >
                          Gempa
                        </NavLink>
                      </div>
                    )}
                  </div>
                </NavLink>
                <NavLink to="/informasi" className={`flex items-center px-4 py-2 text-white hover:bg-gray-700 ${informasiBelow ? 'mt-60' : ''}`}>
                  <div className="flex items-start justify-start px-1 py-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                    </svg>
                  </div>
                  <span className="ml-4">Informasi</span>
                </NavLink>
              </div>
            </div>
          )}

          {/* Form Pelaporan */}
          <div className="container mx-auto px-4 ">
            {/* Form inputs here */}
            <section className="mx-auto p-4 flex justify-center items-center min-h-screen relative">
            {/* Form dan konten lainnya */}
            <form
              className="w-full max-w-full grid grid-cols-1 gap-y-2 bg-white p-10 m-8 md:m-32 mb-10 text-center rounded-lg shadow-lg"
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

              <button className="bg-[#FF3D00] text-white p-2 rounded-xl w-15 md:w-19 h-19 block mx-auto relative">
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
            <img src={tutor} alt="Tutorial" className="w-63 h-48 md:w-48 md:h-20" />
            <h3 className="text-xl mt-4 font-semibold text-[#FF3D00]">
              Bagaimana Cara Melaporkan Bencana
            </h3>
            <p className="text-center mt-4 text-gray-400">
              Kami menyediakan tutorial yang mudah dipahami untuk membantu Anda
              melaporkan bencana secara cepat dan akurat
            </p>
            <a
              href="#"
              className="bg-[#FF3D00] text-white py-2 px-8 rounded-full mt-4"
            >
              Lihat Tutorial
            </a>
          </div>
        </div>
    </>
  );
};

export default ReportForm;
