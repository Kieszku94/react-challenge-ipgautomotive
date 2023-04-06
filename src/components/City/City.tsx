import React from "react";
import "./City.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faDroplet } from "@fortawesome/free-solid-svg-icons";
import { faCloudRain } from "@fortawesome/free-solid-svg-icons";
import { CityType } from "../../types/types";

interface Iprops {
  city: CityType;
  cities: CityType[];
  setCities: React.Dispatch<React.SetStateAction<CityType[]>>;
}

const City = (props: Iprops) => {
  return (
    <>
      <div className="cityWrapper">
        <div className="cityContainer">
          <div className="split">
            <div className="cityField">City name</div>
            <div className="cityField">{props.city?.location.name}</div>
          </div>
          <div className="split">
            <div className="cityField">Description of current weather</div>
            <div className="cityField">
              {props.city?.current.condition.text}
            </div>
          </div>
          <div className="split">
            <div className="cityField">Image of current weather</div>
            <div className="cityField">
              <img
                src={props.city?.current.condition.icon}
                alt="weather icon"
                className="weatherIcon"
              />
            </div>
          </div>
          <div className="split">
            <div className="cityField">Current temperature in &#8451;</div>
            <div className="cityField">
              {`${props.city?.current.temp_c}`}&#8451;
            </div>
          </div>
          <div className="split">
            <div className="cityField">Current humidity</div>
            <div className="cityField">
              {`${props.city?.current.humidity}`}{" "}
              <FontAwesomeIcon icon={faDroplet} />
            </div>
          </div>
          <div className="split">
            <div className="cityField">Current precipitation</div>
            <div className="cityField">
              {`${props.city?.current.precip_mm}`}{" "}
              <FontAwesomeIcon icon={faCloudRain} />
            </div>
          </div>
        </div>
        <FontAwesomeIcon
          className="deleteBtn"
          icon={faTrash}
          onClick={() => {
            props.setCities(
              props.cities.filter(
                (x) => x.location.name !== props.city?.location.name
              )
            );
          }}
          title="Delete City From The List"
        />
      </div>
    </>
  );
};

export default City;
