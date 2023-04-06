import React, { useState } from "react";
import "./Home.css";
import { useUsername } from "../../context/userContext";
import { getCitiesList } from "../../helpers/getCitiesList";
import City from "../City/City";

const Home = (): JSX.Element => {
  const username = useUsername();
  const [textboxValue, setTextboxValue] = useState("");
  const [cities, setCities] = useState<string[]>([]);
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
        <input
          className="textfieldInput"
          type="text"
          onChange={(e) => setTextboxValue(e.target.value)}
        />
        <button
          className="addToListBtn"
          onClick={() => {
            const cts = getCitiesList(textboxValue);
            if (cts.length > 5) return;
            setCities(cts);
          }}
        >
          Add
        </button>
      </div>
      {cities.map((c) => (
        <City key={c} cities={cities} setCities={setCities} city={c} />
      ))}
    </div>
  );
};

export default Home;
