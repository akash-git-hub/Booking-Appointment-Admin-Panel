import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './auth/Login/login';
import Appointment from './main/pages/Appointment/appointment';
import Calendar from './main/pages/Calendar/calendar';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/appointment" element={<Appointment/>} />
          <Route path="/calendar" element={<Calendar/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
