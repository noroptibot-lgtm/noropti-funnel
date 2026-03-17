import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import ArtikelPage from './pages/ArtikelPage';
import LandingPage from './pages/LandingPage';
import TakkPage from './pages/TakkPage';

declare global {
  interface Window {
    fbq: (...args: any[]) => void;
  }
}

function App() {
  useEffect(() => {
    // Track PageView on every route change
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'PageView');
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/gratis-utkast" element={<LandingPage />} />
        <Route path="/artikkel" element={<ArtikelPage />} />
        <Route path="/takk" element={<TakkPage />} />
      </Routes>
    </Router>
  );
}

export default App;