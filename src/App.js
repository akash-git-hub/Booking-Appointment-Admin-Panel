import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/auth/Login';
import BookingList from './pages/booking_list/BookingList';
import Calendar from './pages/calender/Calender';
import { AuthContext } from "./states/AuthContext";
import { useContext } from "react";
import 'react-calendar/dist/Calendar.css';


function App() {
  const { loggedIn } = useContext(AuthContext);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={loggedIn ? <Navigate to="/calendar" /> : <Login />} />
        <Route path="/booking-list" element={loggedIn ? <BookingList /> : <Navigate to="/" />} />
        <Route path="/calendar" element={loggedIn ? <Calendar /> : <Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
