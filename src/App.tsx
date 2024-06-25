import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react';

import Home from './pages/Home';
import Notfound from './pages/NotFound';
import Header from './pages/partials/Header';
import Footer from './pages/partials/Footer';
import Examples from './pages/Examples';

function App() {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <div className=''>
      <Router>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/examples" element={<Examples />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
