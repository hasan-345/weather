
import { useEffect, useState } from "react";

function getWeather(city) {
  const api = "828e4994e37fb4fdcd70fcfdb31f2955";
  const [alldata, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!city) return;

    setError(null);
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=standard`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Enter valid city name");
        }
        // setLoading(true);
        return response.json();
      })
      .then((finalResponse) => {
        setData(finalResponse);
        setLoading(true);
      })
      .catch((error) => {
        setError(error.message); // Set error message
        setLoading(false);
      });
  }, [city]);

  return { alldata, loading, error };
}

export default getWeather;