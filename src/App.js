
import React from "react"
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
import RetreatPage from './pages/RetreatPage';
import CoursePage from './pages/CoursePage';

import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/panchkarma" element={<PanchkarmaPage />} />
          <Route path="/retreat" element={<RetreatPage />} />
          <Route path="/course" element={<CoursePage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
