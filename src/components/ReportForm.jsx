import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logoW.png';
import tutor from '../assets/images/tutor.png';
import { Link } from 'react-router-dom';
import '../utils/firebaseConfig';
import { getFirestore, addDoc, collection } from 'firebase/firestore';
import { uploadImageToStorage } from '../utils/uploadImageToStorage';

const ReportForm = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [fullName, setFullName] = useState('');
  const [disasterType, setDisasterType] = useState('');
  const [location, setLocation] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const db = getFirestore();
  const saveReportData = async () => {
    const docRef = await addDoc(collection(db, 'report'), {
      phoneNumber: phoneNumber,
      fullName: fullName,
      disasterType: disasterType,
      location: location,
      imageUrl: imageUrl,
    });
    alert('Laporan berhasil dikirim');
  };

  const handleFileChange = async event => {
    const file = event.target.files[0];
    if (file) {
      try {
        const storagePath = `images/${file.name}`;
        const downloadURL = await uploadImageToStorage(file, storagePath);
        setImageUrl(downloadURL);
      } catch (error) {
        console.error('Error mengunggah file:', error);
      }
    }
  };

  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <>
      <nav className="bg-[#FF3D00] text-white p-4 px-20 fixed top-0 left-0 w-full z-10">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4 text-lg font-semibold">
            <Link to="/" className="w-32 h-10">
              <img src={logo} alt="Logo" className="w-full h-full" />
            </Link>
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
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                Edukasi
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
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
                    to="#"
                    className="block px-4 py-2 text-white hover:bg-gray-700"
                  >
                    Kebakaran Hutan
                  </NavLink>
                  <NavLink
                    to="#"
                    className="block px-4 py-2 text-white hover:bg-gray-700"
                  >
                    Longsor
                  </NavLink>
                  <NavLink
                    to="#"
                    className="block px-4 py-2 text-white hover:bg-gray-700"
                  >
                    Tsunami
                  </NavLink>
                  <NavLink
                    to="#"
                    className="block px-4 py-2 text-white hover:bg-gray-700"
                  >
                    Erupsi
                  </NavLink>
                  <NavLink
                    to="#"
                    className="block px-4 py-2 text-white hover:bg-gray-700"
                  >
                    Gempa
                  </NavLink>
                </div>
              )}
            </div>
          </div>
          <div className="flex gap-4 px-14">
            <NavLink
              to="/informasi"
              className="border border-white border-3 hover:bg-white focus:bg-white text-white hover:text-[#FF3D00] focus:text-[#FF3D00] font-semibold py-1 px-5 rounded"
            >
              Informasi
            </NavLink>
          </div>
        </div>
      </nav>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="pt-16 absolute top-0 left-0 z-0 w"
      >
        <path
          fill="#FF3D00"
          fillOpacity="1"
          d="M0,224L26.7,208C53.3,192,107,160,160,149.3C213.3,139,267,149,320,170.7C373.3,192,427,224,480,245.3C533.3,267,587,277,640,256C693.3,235,747,181,800,144C853.3,107,907,85,960,101.3C1013.3,117,1067,171,1120,181.3C1173.3,192,1227,160,1280,160C1333.3,160,1387,192,1413,208L1440,224L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"
        ></path>
      </svg>
      <h1 className="text-4xl text-white text-center font-semibold mt-16 mb-4 relative z-1">Form Pelaporan Bencana</h1>
      <p className="text-white relative z-2 text-center text-sm">Silahkan Laporkan kejadian <br />Bencana Alam Yang Terjadi di Daerah anda</p>
      <section className="mx-auto p-4 flex justify-center items-center min-h-screen relative">
        <form
          className="w-full max-w-full grid grid-cols-1 gap-y-2 bg-white p-10 m-32 mt-10 mb-10 text-center rounded-lg shadow-lg"
          onSubmit={e => {
            e.preventDefault();
            saveReportData();
          }}
        >
          <button
            className="bg-[#FF3D00] text-white p-2 mb-3 rounded-full w-96 block mx-auto"
            disabled
          >
            Laporkan Bencana
          </button>
          <a href="#" className="text-gray-400 pb-3">
            Cara melapor dengan baik?
          </a>
          <input
            type="number"
            className="mx-auto bg bg-gray-100 p-3 mb-6 rounded-xl w-96"
            placeholder="Nomor Hp"
            value={phoneNumber}
            onChange={e => setPhoneNumber(e.target.value)}
          />
          <input
            type="text"
            className="mx-auto bg bg-gray-100 p-3 mb-6 rounded-xl w-96"
            placeholder="Nama Lengkap"
            value={fullName}
            onChange={e => setFullName(e.target.value)}
          />
          <input
            type="text"
            className="mx-auto bg bg-gray-100 p-3 mb-6 rounded-xl w-96"
            placeholder="Jenis Bencana"
            value={disasterType}
            onChange={e => setDisasterType(e.target.value)}
          />
          <input
            type="text"
            className="mx-auto bg bg-gray-100 p-3 mb-6 rounded-xl w-96"
            placeholder="Lokasi"
            value={location}
            onChange={e => setLocation(e.target.value)}
          />

          <button className="bg-[#FF3D00] text-white p-2 rounded-xl w-19 h-19 block mx-auto relative">
            <input
              accept="image/*"
              capture="environment"
              type="file"
              className="absolute inset-0 opacity-0"
              onChange={handleFileChange}
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

          <p className="text-sm text-slate-400">Kirim Foto Kejadian</p>
          <button
            type="submit"
            className="w-24 h-10 justify-self-end bg-[#FF3D00] rounded-lg text-white"
          >
            Kirim
          </button>
        </form>
      </section>
      <div className="container mx-auto flex flex-col items-center pb-10">
        <img src={tutor} alt="Tutorial" className="w-96 h-28" />
      </div>
    </>
  );
};

export default ReportForm;
