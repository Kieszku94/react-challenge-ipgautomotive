import React, { useState, useEffect } from "react";
import "./Home.css";
import { useUsername } from "../../context/userContext";
import { validateInput } from "../../helpers/validateInput";
import { toPascalCase } from "../../helpers/toPascalCase";
import { fetchCity } from "../../helpers/fetchCity";
import City from "../City/City";
import { CityType } from "../../types/types";

const Home = (): JSX.Element => {
  const username = useUsername();
  const [textboxValue, setTextboxValue] = useState("");
  const [cities, setCities] = useState<CityType[]>([]);
  const [error, setError] = useState(false);
  const [fetchError, setFetchError] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [duplicateError, setDuplicateError] = useState(false);

  const handleOnClick = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const validInput = validateInput(textboxValue);
    for (let city of cities) {
      if (city.location.name === toPascalCase(textboxValue)) {
        setDuplicateError(true);
        return;
      }
    }
    if (validInput) {
      try {
        const result = await fetchCity(toPascalCase(textboxValue));
        setCities((cities) => [...cities, result.data]);
        setTextboxValue("");
      } catch (error) {
        setFetchError(true);
      }
    } else {
      setError(true);
    }
  };

  useEffect(() => {
    if (cities.length === 5) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [cities]);

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
          onChange={(e) => {
            setError(false);
            setFetchError(false);
            setDuplicateError(false);
            setTextboxValue(e.target.value);
          }}
          value={textboxValue}
        />
        <button
          className={disabled ? "addToListBtn disabled" : "addToListBtn"}
          onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
            handleOnClick(e)
          }
          disabled={disabled}
        >
          Add
        </button>
      </div>
      {disabled && (
        <p className="err">The list is full. You cannot add more.</p>
      )}
      {duplicateError && (
        <p className="err">List already contains this city.</p>
      )}
      {error && <p className="err">Please provide valid city.</p>}
      {fetchError && (
        <p className="err">
          Couldn't fetch the weather data for {textboxValue}
        </p>
      )}

      {cities.map((c: CityType, index) => (
        <City key={index} cities={cities} setCities={setCities} city={c} />
      ))}
    </div>
  );
};

export default Home;
