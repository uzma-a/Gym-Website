import React, { useEffect } from 'react';
import './App.css';
import HeroSection from './Components/HeroSection/HeroSection';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginSignup from './Pages/LoginSignup';
import AboutSection from './Components/AboutSection/AboutSection'; // Import AboutSection
import Footer from './Components/Footer';
import ContactPage from './Pages/ContactPage';
import ServicesPage from './Pages/ServicesPage';
import TrainersPage from './Pages/TrainersPage';
import MembershipPlans from './Pages/MembershipPlans';
import BookNowPage from './Pages/BookNowPage';
import LearnMorePage from './Pages/LearnMorePage';
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS styles

function App() {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in milliseconds
      once: true, // Whether animations run only once
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {/* Home Page with Header, AboutSection, and Footer */}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <AboutSection />
              <ServicesPage />
              <TrainersPage />
              <LearnMorePage />

              <MembershipPlans />
            </>
          }
        />
        {/* Other Pages */}
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path='/service' element={<ServicesPage />} />
        <Route path='/trainers' element={<TrainersPage />} />
        <Route path='/plans' element={<MembershipPlans />} />
        <Route path='/plans/booking-a-plan' element={<BookNowPage />} />
        <Route path="/learn-more-about-diet-plan" element={<LearnMorePage />} />
      </Routes>
      {/* Footer for all pages */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
