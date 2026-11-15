import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Notfound from './pages/NotFound'
import Header from './pages/partials/Header'
import Footer from './pages/partials/Footer'
import Examples from './pages/Examples'

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/examples" element={<Examples />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App
