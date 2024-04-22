import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Education from './pages/Education';
import Information from './pages/Information';
import NotFound from './pages/NotFound';
import Report from './pages/Report';
import ReportButton from './components/ReportButton';
import Footer from './components/Footer';
import About from './components/About';
import Banjir from './components/Banjir';
import KebakaranHutan from './components/KebakaranHutan';
import Longsor from './components/Longsor';
import Tsunami from './components/Tsunami';
import Erupsi from './components/Erupsi';
import Gempa from './components/Gempa';

export default function App() {
  return (
    <>
      <Router>
        <div>
          <ReportButton />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/edukasi" element={<Education />} />
            <Route path="/edukasi/banjir" element={<Banjir />} />
            <Route path="/edukasi/kebakaran-hutan" element={<KebakaranHutan />} />
            <Route path="/edukasi/longsor" element={<Longsor />} />
            <Route path="/edukasi/tsunami" element={<Tsunami />} />
            <Route path="/edukasi/erupsi-gunung-berapi" element={<Erupsi />} />
            <Route path="/edukasi/gempa-bumi" element={<Gempa />} />
            <Route path="/informasi" element={<Information />} />
            <Route path="/lapor" element={<Report />} />
            <Route path="/about" element={<About />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}
