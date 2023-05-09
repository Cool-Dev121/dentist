// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './pages/Signup';
import Home from './pages/Home';
import LoginPage from './pages/Login';
import Dentist from './pages/Dentist';
import Laboratory from './pages/Laboratory';
import Service from './pages/Service';
import Aboutus from './pages/AboutUs';
import Contactus from './pages/ContactUs';


function App() {
  return (

      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/dentist" element={<Dentist/>} />
            <Route path="/laboratory" element={<Laboratory/>} />
            <Route path="/service" element={<Service/>} />
            <Route path="/aboutus" element={<Aboutus/>} />
            <Route path="/contactus" element={<Contactus/>} />
        </Routes>
      </BrowserRouter>

  );
}

export default App;
