import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/auth/Login';
import BookingList from './pages/booking_list/BookingList';
import SessionDetailList from './pages/session_detail/SessionDetailList';
import Calendar from './pages/calender/Calender';
import { AuthContext } from "./states/AuthContext";
import { useContext } from "react";
import 'react-calendar/dist/Calendar.css';


function App() {
  const { doctorLoggedIn } = useContext(AuthContext);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={doctorLoggedIn ? <Navigate to="/calendar" /> : <Login />} />
        <Route path="/booking-list" element={doctorLoggedIn ? <BookingList /> : <Navigate to="/" />} />
        <Route path="/calendar" element={doctorLoggedIn ? <Calendar /> : <Navigate to="/" />} />
        <Route path="/session-detail" element={doctorLoggedIn ? <SessionDetailList /> : <Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
