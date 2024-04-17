import React from 'react';
import logo from '../assets/images/logo.png';

const About = () => {
  return (
    <div>
      <div className=" container mx-auto p-5">
        <a href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
        </a>
      </div>
      <div className="container mx-auto flex flex-col items-center">
        <img src={logo} alt="Logo" className="w-50 h-28" />
        <p className="text-sm text-gray-500 mt-2">Versi 0.1</p>{' '}
        {/* Tambahkan keterangan versi di sini */}
        <div className="text-lg text-start px-20 py-8">
          <p>
            SIEDUB adalah platform web yang didedikasikan untuk menangani
            pengaduan dan memberikan edukasi tentang bencana alam. Dengan
            menggunakan teknologi modern, SIEDUB memberikan akses yang mudah
            bagi masyarakat untuk melaporkan bencana alam yang mereka alami dan
            mendapatkan bantuan dengan cepat.
          </p>
          <p className="mt-4">
            Salah satu fitur utama dari SIEDUB adalah kemampuannya untuk
            memberikan edukasi tentang berbagai jenis bencana alam dan
            memberikan tips tentang cara mengatasi nya. Dengan informasi yang
            tepat, masyarakat dapat mempersiapkan diri dengan lebih baik dan
            mengurangi risiko dampak yang ditimbulkan oleh bencana alam.
          </p>
          <p className="mt-4">
            SIEDUB bukan hanya sekedar sebuah platform web, tetapi juga
            merupakan simbol dari kolaborasi antara teknologi dan kepedulian
            sosial. Dengan memanfaatkan kekuatan teknologi untuk kebaikan
            bersama, SIEDUB membantu kita semua menjadi lebih siap dan tanggap
            dalam menghadapi tantangan bencana alam.
          </p>
          <p className="mt-4">
            Dengan demikian, SIEDUB adalah langkah maju dalam membangun
            masyarakat yang tangguh dan berdaya, siap menghadapi segala bentuk
            bencana alam yang mungkin terjadi di masa depan.
          </p>
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Visi</h2>
            <ul className="list-disc list-inside">
              <p>
                Menjadi platform terdepan dalam menangani pengaduan dan
                memberikan edukasi tentang bencana alam, serta memperkuat
                solidaritas dan ketahanan masyarakat dalam menghadapi tantangan
                lingkungan.
              </p>
            </ul>
            <h2 className="text-2xl font-bold mb-4 mt-8">Misi</h2>
            <ul className="list-disc list-inside">
              <li>
                Menyediakan akses yang mudah bagi masyarakat untuk melaporkan
                bencana alam dan mendapatkan bantuan dengan cepat.
              </li>
              <li>
                Memberikan edukasi yang bermanfaat tentang berbagai jenis
                bencana alam dan menyediakan tips tentang cara mengatasi nya
              </li>
              <li>
                Memanfaatkan teknologi untuk kebaikan bersama dalam membangun
                masyarakat yang tangguh dan berdaya.
              </li>
            </ul>
          </div>
          <p className="mt-8">
            Kami, di SIEDUB, berkomitmen untuk terus memperbaiki dan
            meningkatkan platform kami demi kebaikan bersama. Bergabunglah
            dengan kami dalam upaya kami untuk mempersiapkan masyarakat dalam
            menghadapi tantangan bencana alam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
