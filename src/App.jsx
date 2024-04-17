import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Education from './pages/Education';
import Information from './pages/Information';
import NotFound from './pages/NotFound';
import Report from './pages/Report';
import ReportButton from './components/ReportButton';
import About from './components/About';

export default function App() {
  return (
    <>
      <Router>
        <div>
          <ReportButton />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/edukasi" element={<Education />} />
            <Route path="/informasi" element={<Information />} />
            <Route path="/lapor" element={<Report />} />
            <Route path="/about" element={<About />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}
