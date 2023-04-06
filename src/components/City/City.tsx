import React, { useState, useEffect } from "react";
import "./City.css";
import { fetchCity } from "../../helpers/fetchCity";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { CityType } from "../../types/types";

interface Iprops {
  city: string;
  cities: string[];
  setCities: React.Dispatch<React.SetStateAction<string[]>>;
}

const City = (props: Iprops) => {
  const [city, setCity] = useState<CityType>();
  const [err, setError] = useState(false);

  useEffect(() => {
    const getCity = async () => {
      try {
        await fetchCity(props.city).then((res) => {
          setCity(res.data);
        });
      } catch (error) {
        setError(true);
      }
    };
    getCity();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {err ? (
        <p className="err">Couldn't fetch the data for {props.city}</p>
      ) : (
        <div className="cityWrapper">
          <div className="cityContainer">
            <div className="split">
              <div className="cityField">City name</div>
              <div className="cityField">{city?.location.name}</div>
            </div>
            <div className="split">
              <div className="cityField">Description of current weather</div>
              <div className="cityField">{city?.current.condition.text}</div>
            </div>
            <div className="split">
              <div className="cityField">Image of current weather</div>
              <div className="cityField">{`${city?.current.condition.code}`}</div>
            </div>
            <div className="split">
              <div className="cityField">Current temperature in C</div>
              <div className="cityField">{`${city?.current.temp_c}`}</div>
            </div>
            <div className="split">
              <div className="cityField">Current humidity</div>
              <div className="cityField">{`${city?.current.humidity}`}</div>
            </div>
            <div className="split">
              <div className="cityField">Current precipitation</div>
              <div className="cityField">{`${city?.current.precip_mm}`}</div>
            </div>
          </div>
          <FontAwesomeIcon
            className="deleteBtn"
            icon={faTrash}
            onClick={() => {
              props.setCities(
                props.cities.filter((x) => x !== city?.location.name)
              );
            }}
            title="Delete City From The List"
          />
        </div>
      )}
    </>
  );
};

export default City;
