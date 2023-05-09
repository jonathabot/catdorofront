import ActivePomodoro from 'components/ActivePomodoro';
import Header from 'components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ActivePomodoro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
