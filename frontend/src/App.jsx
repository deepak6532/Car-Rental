import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';
import HomePage from './Page/HomePage';
// import Contact from './Components/Contact'; // or from './Pages/ContactPage' if that's what you use
import ContactPage from './Page/ContactPage';
import CarPage from './Page/CarPage';
import AboutPage from './Page/AboutPage';
import Booking from './Page/Booking';
import Signup from './Components/Signup';
import Login from './Components/Login';

import Dashboard from './Page/Admin/Dashboard';
import Allusers from './Page/Admin/Allusers';
import Cars from './Page/Admin/Cars'
import Addcar from './Page/Admin/Addcar';
import Bookcar from './Page/Admin/Bookcar';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/contactpage" element={<ContactPage />} />
        <Route path="/carpage" element={<CarPage />} />
        <Route path="/aboutpage" element={<AboutPage/>}/>
        <Route path="/booking" element={<Booking/>}/>

        <Route path="/" element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>

        {/* admin dashboard */}

        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/alluser" element={<Allusers/>}/>
        <Route path="/cars" element={<Cars/>}/>
        <Route path="/addcar" element={<Addcar/>}/>

        <Route path="/bookingcar" element={<Bookcar/>}/>
        

      </Routes>
    </Router>
  );
}

export default App;
