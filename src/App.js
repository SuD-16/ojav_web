import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

// import logo from './logo.svg';
import './assets/css/common.scss';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PanchkarmaPage from './pages/PanchkarmaPage';

import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="container">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/panchkarma" element={<PanchkarmaPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
