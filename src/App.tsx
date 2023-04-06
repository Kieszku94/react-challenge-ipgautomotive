import React from "react";
import "./App.css";
import { fetchCity } from "./helpers/fetchCity";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import { UserProvider } from "./context/userContext";
import { useUserAuthenticated } from "./context/userContext";

function App() {
  const isAuthenticated = useUserAuthenticated();

  // useEffect(() => {
  //   cities.map(async (city) => {
  //     try {
  //       let result = (await fetchCity(city)).data;
  //       console.log(result);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   });
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <UserProvider>
      <Routes>
        <Route
          path="/"
          element={isAuthenticated ? <Home /> : <Navigate to="/login" />}
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </UserProvider>
  );
}

export default App;
