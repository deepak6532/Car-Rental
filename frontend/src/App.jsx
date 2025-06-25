import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Page/HomePage';
// import Contact from './Components/Contact'; // or from './Pages/ContactPage' if that's what you use
import ContactPage from './Page/ContactPage';
import CarPage from './Page/CarPage';
import AboutPage from './Page/AboutPage';
import Booking from './Page/Booking';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contactpage" element={<ContactPage />} />
        <Route path="/carpage" element={<CarPage />} />
        <Route path="/aboutpage" element={<AboutPage/>}/>
        <Route path="/booking" element={<Booking/>}/>

      </Routes>
    </Router>
  );
}

export default App;
