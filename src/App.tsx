import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { fetchCity } from "./helpers/fetchCity";

function App() {
  const cities = ["Moscow", "London"];
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
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
