import React, { useState, useEffect } from "react";
import "./City.css";
import { fetchCity } from "../../helpers/fetchCity";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

interface Iprops {
  city: string;
  cities: string[];
  setCities: React.Dispatch<React.SetStateAction<string[]>>;
  index: Number;
}

type Condition = {
  code: Number;
  text: string;
  icon: string;
};

type Location = {
  name: String;
};

type Current = {
  condition: Condition;
  temp_c: Number;
  humidity: Number;
  precip_mm: Number;
};

type CityType = {
  location: Location;
  current: Current;
  id: Number;
};

const City = (props: Iprops) => {
  const [city, setCity] = useState<CityType>();

  useEffect(() => {
    const getCity = async () => {
      try {
        await fetchCity(props.city).then((res) => {
          res.data.id = props.index;
          setCity(res.data);
        });
      } catch (error) {
        console.log(error);
      }
    };
    getCity();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
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
      />
    </div>
  );
};

export default City;
