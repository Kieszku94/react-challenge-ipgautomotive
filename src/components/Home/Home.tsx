import React, { useState } from "react";
import "./Home.css";
import { useUsername } from "../../context/userContext";

const Home = () => {
  const username = useUsername();
  const [error, setError] = useState(false);
  const [maximumError, setMaximumError] = useState(false);

  return (
    <div className="container">
      <h1 className="welcomeMessage">{`Welcome to the weather app ${username}`}</h1>
      <div className="textfieldContainer">
        <input className="textfieldInput" type="text" />
        <button className="addToListBtn">Add</button>
      </div>
    </div>
  );
};

export default Home;
