import axios from "axios";

export const fetchCity = async (q: string) => {
  const response = await axios.get(
    "http://api.weatherapi.com/v1/current.json",
    {
      params: {
        key: process.env.REACT_APP_API_KEY,
        q: q,
      },
    }
  );
  return response;
};
