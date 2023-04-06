import React from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import { useUserAuthenticated } from "./context/userContext";

function App() {
  const isAuthenticated = useUserAuthenticated();

  return (
    <Routes>
      <Route
        path="/"
        element={isAuthenticated ? <Home /> : <Navigate to="/login" />}
      />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
