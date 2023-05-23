import ActivePomodoro from 'components/ActivePomodoro';
import Footer from 'components/Footer';
import Header from 'components/Header';
import LoginPage from 'components/LoginPage';
import SignupPage from 'components/SignupPage';
import WelcomePage from 'components/WelcomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/pomodoro" element={<ActivePomodoro />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
