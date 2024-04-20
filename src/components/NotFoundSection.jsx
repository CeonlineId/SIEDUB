import Error from '../assets/images/Error.png'
import { NavLink } from 'react-router-dom';

export default function NotFoundSection() {
  return (
    <section className="flex items-center h-screen p-16 bg-orange-600">
      <div className="container flex flex-col items-center ">
        <div className="flex flex-col gap-6 text-center items-center">
          <img src={Error} alt="Error" className="w-32 h-auto" />
          <p className="text-2xl md:text-5xl font-semibold text-white">
            404 Error
          </p>
          <p className="text-sm md:text-4xl text-white">
            Maaf, Halaman tidak ditemukan.
          </p>
          <NavLink
            to="/"
            className="border-2 rounded-md py-3 px-20 text-white"
          >
            Kembali ke beranda
          </NavLink>
        </div>
      </div>
    </section>
  );
}
