// AuthContext.js
import React, { createContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [doctorLoggedIn, setDoctorLoggedIn] = useState(
    localStorage.getItem("doctorLoggedIn") === "true"
  );

  return (
    <AuthContext.Provider value={{ doctorLoggedIn, setDoctorLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
