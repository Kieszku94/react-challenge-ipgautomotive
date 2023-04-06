import React, { useState } from "react";
import "./Home.css";
import { useUsername } from "../../context/userContext";

const Home = (): JSX.Element => {
  const username = useUsername();
  const [cities, setCities] = useState([]);
  const [error, setError] = useState(false);
  const [maximumError, setMaximumError] = useState(false);

  return (
    <div className="container">
      <h1 className="welcomeMessage">{`Welcome to the weather app ${username}`}</h1>
      <h2 className="addCitiesMessage">
        Please add cities to the list to see the current weather for each of
        them. You can add up to 5 cities.
      </h2>
      <div className="textfieldContainer">
        <input className="textfieldInput" type="text" />
        <button className="addToListBtn">Add</button>
      </div>
    </div>
  );
};

export default Home;
