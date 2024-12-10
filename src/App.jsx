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
import DietPlanPage from './Components/DietPlanPage'

function App() {
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
              <DietPlanPage />
              </>
          }
        />
        {/* Other Pages */}
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path='/service' element={<ServicesPage />} />
        <Route path='/trainers' element={<TrainersPage />} />
        <Route path='/plans' element={<MembershipPlans />} />
        <Route path='/plans/booking-a-plan' element={<BookNowPage/>} />
      </Routes>
      {/* Footer for all pages */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
