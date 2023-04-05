import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { fetchCity } from "./helpers/fetchCity";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";

function App() {
  const cities = ["Moscow", "London"];
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    cities.map(async (city) => {
      try {
        let result = (await fetchCity(city)).data;
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
