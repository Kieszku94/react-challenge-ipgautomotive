import React, { useState, useEffect } from "react";
import { fetchCity } from "../../helpers/fetchCity";

interface Iprops {
  city: string;
}

type Condition = {
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
};

type CityType = {
  location: Location;
  current: Current;
};

const City = (props: Iprops) => {
  const [city, setCity] = useState<CityType>();

  useEffect(() => {
    const getCity = async () => {
      try {
        await fetchCity(props.city).then((res) => {
          console.log(res.data);
          setCity(res.data);
        });
      } catch (error) {
        console.log(error);
      }
    };
    getCity();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div>{`${city?.current.temp_c}`}</div>;
};

export default City;
